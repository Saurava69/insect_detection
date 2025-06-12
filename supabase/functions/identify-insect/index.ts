// Edge Function to securely proxy insect identification requests
import { serve } from "https://deno.land/std@0.168.0/http/server.ts"

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
}

serve(async (req) => {
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

    // Get the API key from environment variables (server-side only)
    const API_KEY = Deno.env.get('KINDWISE_API_KEY')
    const API_URL = 'https://insect.kindwise.com/api/v1/identification?details=common_names%2Curl%2Cdescription%2Cimage'

    if (!API_KEY) {
      return new Response(
        JSON.stringify({ error: 'API key not configured' }),
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

    // Create new FormData for the API request
    const apiFormData = new FormData()
    apiFormData.append('images', imageFile)
    apiFormData.append('latitude', '49.207')
    apiFormData.append('longitude', '16.608')
    apiFormData.append('similar_images', 'true')

    // Make the request to Kindwise API
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Api-Key': API_KEY,
      },
      body: apiFormData,
    })

    if (!response.ok) {
      let errorMessage = 'API request failed'
      
      if (response.status === 401) {
        errorMessage = 'Invalid API key'
      } else if (response.status === 429) {
        errorMessage = 'Too many requests. Please try again later.'
      } else if (response.status >= 500) {
        errorMessage = 'Server error. Please try again later.'
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

    // Return the API response
    return new Response(
      JSON.stringify(data),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      }
    )

  } catch (error) {
    console.error('Edge function error:', error)
    
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