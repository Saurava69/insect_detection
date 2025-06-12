import { useState, useEffect } from 'react'
import { useAuth } from '../contexts/AuthContext'
import AuthForm from './AuthForm'
import ImageUpload from './ImageUpload'
import ResultDisplay from './ResultDisplay'
import LoadingSpinner from './LoadingSpinner'
import ErrorMessage from './ErrorMessage'
import SEOHead from './SEOHead'
import { identifyInsect } from '../services/insectApi'

const HomePage = () => {
  const [result, setResult] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  
  const { user } = useAuth()

  // SEO and Analytics
  useEffect(() => {
    // Update page title dynamically based on user state
    const title = user 
      ? 'Insect Identification App - Upload & Identify' 
      : 'Insect Identification App - AI-Powered Species Recognition'
    
    document.title = title
    
    // Update meta description dynamically
    const description = user 
      ? 'Upload an insect photo to get instant AI-powered species identification with detailed information.'
      : 'Identify insects instantly with our AI-powered app. Upload photos to get accurate species identification, detailed descriptions, and learn about insect biology.'
    
    const metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
      metaDescription.setAttribute('content', description)
    }

    // Track page views (replace with your analytics)
    if (typeof gtag !== 'undefined') {
      gtag('config', 'GA_MEASUREMENT_ID', {
        page_title: document.title,
        page_location: window.location.href
      })
    }
  }, [user])

  const handleImageUpload = async (file) => {
    if (!file) return

    setLoading(true)
    setError(null)
    setResult(null)

    // Track identification attempt
    if (typeof gtag !== 'undefined') {
      gtag('event', 'identification_started', {
        event_category: 'engagement',
        event_label: 'image_upload'
      })
    }

    try {
      const apiResponse = await identifyInsect(file)
      setResult(apiResponse)
      
      // Track successful identification
      if (typeof gtag !== 'undefined') {
        gtag('event', 'identification_success', {
          event_category: 'engagement',
          event_label: apiResponse.result?.classification?.suggestions?.[0]?.name || 'unknown'
        })
      }
    } catch (err) {
      setError(err.message || 'Failed to identify insect. Please try again.')
      
      // Track identification error
      if (typeof gtag !== 'undefined') {
        gtag('event', 'identification_error', {
          event_category: 'error',
          event_label: err.message
        })
      }
    } finally {
      setLoading(false)
    }
  }

  const handleReset = () => {
    setResult(null)
    setError(null)
    
    // Update title back to upload state
    document.title = 'Insect Identification App - Upload & Identify'
  }

  if (!user) {
    return (
      <>
        <SEOHead 
          title="Insect Identification App - AI-Powered Species Recognition"
          description="Identify insects instantly with our AI-powered app. Upload photos to get accurate species identification, detailed descriptions, and learn about insect biology."
          keywords="insect identification, bug identifier, species recognition, entomology, AI insect detector, nature app, wildlife identification"
        />
        <AuthForm />
      </>
    )
  }

  return (
    <>
      <SEOHead 
        title={result ? `${result.result?.classification?.suggestions?.[0]?.name || 'Unknown Species'} - Identification Result` : 'Insect Identification App - Upload & Identify'}
        description={result 
          ? `Identified as ${result.result?.classification?.suggestions?.[0]?.name || 'Unknown Species'} with ${Math.round((result.result?.classification?.suggestions?.[0]?.probability || 0) * 100)}% confidence.`
          : 'Upload an insect photo to get instant AI-powered species identification with detailed information.'
        }
        keywords="insect identification, upload insect photo, AI species recognition, identify insects online"
      />
      
      {!result && !loading && (
        <ImageUpload onImageUpload={handleImageUpload} />
      )}

      {loading && <LoadingSpinner />}

      {error && (
        <ErrorMessage 
          message={error} 
          onRetry={handleReset}
        />
      )}

      {result && (
        <ResultDisplay 
          result={result} 
          onReset={handleReset}
        />
      )}
    </>
  )
}

export default HomePage