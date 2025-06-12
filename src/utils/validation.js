const MAX_FILE_SIZE = 10 * 1024 * 1024 // 10MB
const ALLOWED_TYPES = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp']

export const validateImageFile = (file) => {
  if (!file) {
    throw new Error('No file selected')
  }

  if (!ALLOWED_TYPES.includes(file.type)) {
    throw new Error('Invalid file type. Please upload a JPG, PNG, or WebP image.')
  }

  if (file.size > MAX_FILE_SIZE) {
    throw new Error('File too large. Please upload an image smaller than 10MB.')
  }

  return true
}

export const validateApiResponse = (response) => {
  if (!response || typeof response !== 'object') {
    throw new Error('Invalid API response')
  }

  if (!response.result || !response.result.classification) {
    throw new Error('No classification data in response')
  }

  return true
}