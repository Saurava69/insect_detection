import { useEffect } from 'react'

const SEOHead = ({ 
  title = "Insect Identification App - AI-Powered Species Recognition",
  description = "Identify insects instantly with our AI-powered app. Upload photos to get accurate species identification, detailed descriptions, and learn about insect biology.",
  keywords = "insect identification, bug identifier, species recognition, entomology, AI insect detector",
  image = "https://identify-insect.syntaxengineer.com/og-image.jpg",
  url = "https://identify-insect.syntaxengineer.com"
}) => {
  useEffect(() => {
    // Update document title
    document.title = title

    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
      metaDescription.setAttribute('content', description)
    }

    // Update meta keywords
    const metaKeywords = document.querySelector('meta[name="keywords"]')
    if (metaKeywords) {
      metaKeywords.setAttribute('content', keywords)
    }

    // Update Open Graph tags
    const ogTitle = document.querySelector('meta[property="og:title"]')
    if (ogTitle) {
      ogTitle.setAttribute('content', title)
    }

    const ogDescription = document.querySelector('meta[property="og:description"]')
    if (ogDescription) {
      ogDescription.setAttribute('content', description)
    }

    const ogImage = document.querySelector('meta[property="og:image"]')
    if (ogImage) {
      ogImage.setAttribute('content', image)
    }

    const ogUrl = document.querySelector('meta[property="og:url"]')
    if (ogUrl) {
      ogUrl.setAttribute('content', url)
    }

    // Update Twitter tags
    const twitterTitle = document.querySelector('meta[property="twitter:title"]')
    if (twitterTitle) {
      twitterTitle.setAttribute('content', title)
    }

    const twitterDescription = document.querySelector('meta[property="twitter:description"]')
    if (twitterDescription) {
      twitterDescription.setAttribute('content', description)
    }

    const twitterImage = document.querySelector('meta[property="twitter:image"]')
    if (twitterImage) {
      twitterImage.setAttribute('content', image)
    }

    const twitterUrl = document.querySelector('meta[property="twitter:url"]')
    if (twitterUrl) {
      twitterUrl.setAttribute('content', url)
    }

    // Update canonical URL
    const canonical = document.querySelector('link[rel="canonical"]')
    if (canonical) {
      canonical.setAttribute('href', url)
    }
  }, [title, description, keywords, image, url])

  return null
}

export default SEOHead