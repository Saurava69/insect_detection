const API_KEY = import.meta.env.VITE_KEY 
const API_URL = import.meta.env.VITE_API

export const identifyInsect = async (imageFile) => {
  if (!imageFile) {
    throw new Error('No image file provided')
  }

  // Create FormData
  const formData = new FormData()
  formData.append('images', imageFile)
  formData.append('latitude', 49.207)
  formData.append('longitude', 16.608)
  formData.append('similar_images', true)

  try {
    const response = await fetch(
      API_URL,
      {
        method: 'POST',
        headers: {
          'Api-Key': API_KEY,
        },
        body: formData,
      }
    )

    if (!response.ok) {
      if (response.status === 401) {
        throw new Error('Invalid API key. Please check your configuration.')
      } else if (response.status === 429) {
        throw new Error('Too many requests. Please try again later.')
      } else if (response.status >= 500) {
        throw new Error('Server error. Please try again later.')
      } else {
        throw new Error(`Request failed with status ${response.status}`)
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