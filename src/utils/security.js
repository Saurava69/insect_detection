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

// Prevent context menu and F12 key
export const initializeSecurityMeasures = () => {
  // Prevent right-click context menu
  document.addEventListener('contextmenu', (event) => {
    event.preventDefault()
  })

  // Prevent F12 and other developer tool shortcuts
  document.addEventListener('keydown', (event) => {
    if (
      event.key === 'F12' ||
      (event.ctrlKey && event.shiftKey && event.key === 'I') ||
      (event.ctrlKey && event.shiftKey && event.key === 'C') ||
      (event.ctrlKey && event.key === 'U')
    ) {
      event.preventDefault()
    }
  })
}