import { supabase } from '../lib/supabase'

// Updated API service to use secure Supabase Edge Function with authentication
export const identifyInsect = async (imageFile) => {
  if (!imageFile) {
    throw new Error('No image file provided')
  }

  // Check if user is authenticated
  const { data: { session } } = await supabase.auth.getSession()
  
  if (!session) {
    throw new Error('You must be signed in to identify insects')
  }

  // Get Supabase URL from environment variables
  const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
  
  if (!supabaseUrl) {
    throw new Error('Supabase URL not configured. Please connect to Supabase.')
  }

  // Create the edge function URL
  const edgeFunctionUrl = `${supabaseUrl}/functions/v1/identify-insect`

  // Create FormData
  const formData = new FormData()
  formData.append('images', imageFile)

  try {
    const response = await fetch(edgeFunctionUrl, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${session.access_token}`,
      },
      body: formData,
    })

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}))
      
      if (response.status === 401) {
        throw new Error('Authentication failed. Please sign in again.')
      } else if (response.status === 403) {
        throw new Error('Access denied. Please check your account permissions.')
      } else if (response.status === 429) {
        throw new Error('Too many requests. Please try again later.')
      } else if (response.status >= 500) {
        throw new Error('Server error. Please try again later.')
      } else {
        throw new Error(errorData.error || `Request failed with status ${response.status}`)
      }
    }

    const data = await response.json()

    if (!data.result || !data.result.classification) {
      throw new Error('Invalid response from API')
    }

    // Log successful identification for analytics (optional)
    try {
      await supabase
        .from('identification_logs')
        .insert({
          user_id: session.user.id,
          success: true,
          species_identified: data.result.classification.suggestions?.[0]?.name || 'Unknown'
        })
    } catch (logError) {
      // Don't fail the main request if logging fails
      console.warn('Failed to log identification:', logError)
    }

    return data
  } catch (error) {
    // Log failed identification for analytics (optional)
    try {
      await supabase
        .from('identification_logs')
        .insert({
          user_id: session.user.id,
          success: false,
          error_message: error.message
        })
    } catch (logError) {
      // Don't fail the main request if logging fails
      console.warn('Failed to log identification error:', logError)
    }

    if (error instanceof TypeError && error.message.includes('fetch')) {
      throw new Error('Network error. Please check your internet connection.')
    }
    throw error
  }
}