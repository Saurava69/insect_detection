// Simple HTML sanitization to prevent XSS attacks
export const sanitizeHtml = (html) => {
  if (!html || typeof html !== 'string') {
    return ''
  }

  // Create a temporary div element
  const temp = document.createElement('div')
  temp.textContent = html
  
  // Return the sanitized text content
  return temp.innerHTML
}

// Validate URLs to prevent malicious redirects
export const isValidUrl = (url) => {
  try {
    const urlObj = new URL(url)
    return urlObj.protocol === 'http:' || urlObj.protocol === 'https:'
  } catch {
    return false
  }
}

// Initialize security measures (developer tools now enabled)
export const initializeSecurityMeasures = () => {
  // Security measures have been relaxed to allow developer tools access
  console.log('Developer tools access enabled')
}