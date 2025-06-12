// Edge Function to securely proxy insect identification requests
import { createClient } from 'npm:@supabase/supabase-js@2'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
}

Deno.serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    // Only allow POST requests
    if (req.method !== 'POST') {
      return new Response(
        JSON.stringify({ error: 'Method not allowed' }),
        { 
          status: 405, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        }
      )
    }

    // Verify authentication
    const authHeader = req.headers.get('Authorization')
    if (!authHeader) {
      return new Response(
        JSON.stringify({ error: 'Missing authorization header' }),
        { 
          status: 401, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        }
      )
    }

    // Initialize Supabase client to verify the user
    const supabaseUrl = Deno.env.get('SUPABASE_URL')
    const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')
    
    if (!supabaseUrl || !supabaseServiceKey) {
      console.error('Missing Supabase configuration')
      return new Response(
        JSON.stringify({ error: 'Server configuration error' }),
        { 
          status: 500, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        }
      )
    }

    const supabaseClient = createClient(supabaseUrl, supabaseServiceKey)

    // Extract the JWT token from the Authorization header
    const token = authHeader.replace('Bearer ', '')
    
    // Verify the JWT token
    const { data: { user }, error: authError } = await supabaseClient.auth.getUser(token)
    
    if (authError || !user) {
      console.error('Auth error:', authError)
      return new Response(
        JSON.stringify({ error: 'Invalid authentication token' }),
        { 
          status: 401, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        }
      )
    }

    console.log('User authenticated:', user.id)

    // Get the API key from environment variables (server-side only)
    const API_KEY = Deno.env.get('KINDWISE_API_KEY')
    const API_URL = 'https://insect.kindwise.com/api/v1/identification?details=common_names%2Curl%2Cdescription%2Cimage'

    if (!API_KEY) {
      console.error('KINDWISE_API_KEY not configured')
      return new Response(
        JSON.stringify({ error: 'API key not configured. Please contact support.' }),
        { 
          status: 500, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        }
      )
    }

    // Get the form data from the request
    const formData = await req.formData()
    
    // Validate that an image was provided
    const imageFile = formData.get('images')
    if (!imageFile) {
      return new Response(
        JSON.stringify({ error: 'No image file provided' }),
        { 
          status: 400, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        }
      )
    }

    console.log('Image file received:', imageFile.name, imageFile.size, 'bytes')

    // Create new FormData for the API request
    const apiFormData = new FormData()
    apiFormData.append('images', imageFile)
    apiFormData.append('latitude', '49.207')
    apiFormData.append('longitude', '16.608')
    apiFormData.append('similar_images', 'true')

    console.log('Making request to Kindwise API...')

    // Make the request to Kindwise API
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Api-Key': API_KEY,
      },
      body: apiFormData,
    })

    console.log('Kindwise API response status:', response.status)

    if (!response.ok) {
      let errorMessage = 'API request failed'
      
      if (response.status === 401) {
        errorMessage = 'Invalid API key'
        console.error('Invalid Kindwise API key')
      } else if (response.status === 429) {
        errorMessage = 'Too many requests. Please try again later.'
        console.error('Rate limit exceeded')
      } else if (response.status >= 500) {
        errorMessage = 'Server error. Please try again later.'
        console.error('Kindwise API server error')
      } else {
        console.error('Kindwise API error:', response.status)
      }

      // Try to get error details from response
      try {
        const errorData = await response.text()
        console.error('Kindwise API error details:', errorData)
      } catch (e) {
        console.error('Could not read error response')
      }

      return new Response(
        JSON.stringify({ error: errorMessage }),
        { 
          status: response.status, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        }
      )
    }

    const data = await response.json()
    console.log('Kindwise API response received successfully')

    // Log the successful identification (optional)
    try {
      await supabaseClient
        .from('identification_logs')
        .insert({
          user_id: user.id,
          success: true,
          species_identified: data.result?.classification?.suggestions?.[0]?.name || 'Unknown',
          confidence: data.result?.classification?.suggestions?.[0]?.probability || 0
        })
      console.log('Identification logged successfully')
    } catch (logError) {
      console.warn('Failed to log identification:', logError)
    }

    // Return the API response
    return new Response(
      JSON.stringify(data),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      }
    )

  } catch (error) {
    console.error('Edge function error:', error)
    
    // Log the failed identification (optional)
    try {
      const authHeader = req.headers.get('Authorization')
      if (authHeader) {
        const token = authHeader.replace('Bearer ', '')
        const supabaseUrl = Deno.env.get('SUPABASE_URL')
        const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')
        
        if (supabaseUrl && supabaseServiceKey) {
          const supabaseClient = createClient(supabaseUrl, supabaseServiceKey)
          const { data: { user } } = await supabaseClient.auth.getUser(token)
          
          if (user) {
            await supabaseClient
              .from('identification_logs')
              .insert({
                user_id: user.id,
                success: false,
                error_message: error.message
              })
          }
        }
      }
    } catch (logError) {
      console.warn('Failed to log error:', logError)
    }
    
    return new Response(
      JSON.stringify({ 
        error: 'Internal server error',
        message: error.message 
      }),
      { 
        status: 500, 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      }
    )
  }
})