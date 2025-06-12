// Updated API service to use secure Supabase Edge Function
export const identifyInsect = async (imageFile) => {
  if (!imageFile) {
    throw new Error('No image file provided')
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
        'Authorization': `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
      },
      body: formData,
    })

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}))
      
      if (response.status === 401) {
        throw new Error('Authentication failed. Please check your Supabase configuration.')
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

    return data
  } catch (error) {
    if (error instanceof TypeError && error.message.includes('fetch')) {
      throw new Error('Network error. Please check your internet connection.')
    }
    throw error
  }
}