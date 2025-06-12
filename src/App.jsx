import { useState, useEffect } from 'react'
import { AuthProvider, useAuth } from './contexts/AuthContext'
import AuthForm from './components/AuthForm'
import UserProfile from './components/UserProfile'
import Navigation from './components/Navigation'
import ImageUpload from './components/ImageUpload'
import ResultDisplay from './components/ResultDisplay'
import LoadingSpinner from './components/LoadingSpinner'
import ErrorMessage from './components/ErrorMessage'
import InsectGuide from './components/InsectGuide'
import InsectFacts from './components/InsectFacts'
import PhotoTips from './components/PhotoTips'
import About from './components/About'
import Privacy from './components/Privacy'
import Terms from './components/Terms'
import Features from './components/Features'
import Contact from './components/Contact'
import { identifyInsect } from './services/insectApi'
import './App.css'

function AppContent() {
  const [result, setResult] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [currentView, setCurrentView] = useState('app')
  
  const { user, loading: authLoading } = useAuth()

  // Handle URL routing
  useEffect(() => {
    const path = window.location.pathname
    if (path === '/about') {
      setCurrentView('about')
    } else if (path === '/privacy') {
      setCurrentView('privacy')
    } else if (path === '/terms') {
      setCurrentView('terms')
    } else if (path === '/features') {
      setCurrentView('features')
    } else if (path === '/guide') {
      setCurrentView('guide')
    } else if (path === '/facts') {
      setCurrentView('facts')
    } else if (path === '/tips') {
      setCurrentView('tips')
    } else if (path === '/contact') {
      setCurrentView('contact')
    } else {
      setCurrentView('app')
    }
  }, [])

  // Update URL when view changes
  useEffect(() => {
    const paths = {
      app: '/',
      about: '/about',
      privacy: '/privacy',
      terms: '/terms',
      features: '/features',
      guide: '/guide',
      facts: '/facts',
      tips: '/tips',
      contact: '/contact'
    }
    
    const newPath = paths[currentView] || '/'
    if (window.location.pathname !== newPath) {
      window.history.pushState({}, '', newPath)
    }
  }, [currentView])

  // SEO and Analytics
  useEffect(() => {
    // Update page title dynamically based on current view
    const titles = {
      app: user 
        ? 'Insect Identification App - Upload & Identify' 
        : 'Insect Identification App - AI-Powered Species Recognition',
      guide: 'Complete Insect Identification Guide - Learn About Insect Species',
      facts: 'Amazing Insect Facts & Ecological Importance - Learn About Insect Biology',
      tips: 'Insect Photography Tips - Capture Perfect Photos for AI Identification',
      about: 'About Us - Insect Identification App | AI-Powered Species Recognition',
      privacy: 'Privacy Policy - Insect Identification App | Data Protection & Security',
      terms: 'Terms of Service - Insect Identification App | User Agreement',
      features: 'Features - AI-Powered Insect Identification | Advanced Species Recognition',
      contact: 'Contact Us - Insect Identification App | Get Support & Help'
    }
    
    document.title = titles[currentView] || titles.app
    
    // Update meta description dynamically
    const descriptions = {
      app: user 
        ? 'Upload an insect photo to get instant AI-powered species identification with detailed information.'
        : 'Identify insects instantly with our AI-powered app. Upload photos to get accurate species identification, detailed descriptions, and learn about insect biology.',
      guide: 'Comprehensive guide to insect identification, detection tips, and species information. Learn about beetles, butterflies, flies, bees, and more.',
      facts: 'Discover fascinating facts about insects, their incredible abilities, ecological roles, and conservation challenges.',
      tips: 'Master insect photography with professional tips, camera settings, and techniques for accurate AI species identification.',
      about: 'Learn about our mission to make insect identification accessible to everyone through AI technology. Discover how our app helps researchers, educators, and nature enthusiasts.',
      privacy: 'Learn how we protect your privacy and handle your data. Our comprehensive privacy policy explains data collection, usage, and your rights.',
      terms: 'Read our terms of service to understand your rights and responsibilities when using our AI-powered insect identification platform.',
      features: 'Discover powerful features of our insect identification app: AI recognition, detailed species info, educational resources, and more.',
      contact: 'Contact our team for support, feedback, or questions about our AI-powered insect identification app. We\'re here to help with your insect identification needs.'
    }
    
    const metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
      metaDescription.setAttribute('content', descriptions[currentView] || descriptions.app)
    }

    // Track page views (replace with your analytics)
    if (typeof gtag !== 'undefined') {
      gtag('config', 'GA_MEASUREMENT_ID', {
        page_title: document.title,
        page_location: window.location.href
      })
    }
  }, [user, currentView])

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

  const handleViewChange = (view) => {
    setCurrentView(view)
    // Reset app state when switching views
    if (view !== 'app') {
      setResult(null)
      setError(null)
      setLoading(false)
    }
  }

  const renderCurrentView = () => {
    switch (currentView) {
      case 'guide':
        return <InsectGuide />
      case 'facts':
        return <InsectFacts />
      case 'tips':
        return <PhotoTips />
      case 'about':
        return <About />
      case 'privacy':
        return <Privacy />
      case 'terms':
        return <Terms />
      case 'features':
        return <Features />
      case 'contact':
        return <Contact />
      case 'app':
      default:
        if (!user) {
          return <AuthForm />
        }
        
        return (
          <>
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
  }

  if (authLoading) {
    return (
      <div className="app">
        <div className="app-main">
          <LoadingSpinner />
        </div>
      </div>
    )
  }

  return (
    <div className="app">
      <header className="app-header">
        <div className="header-content">
          <div className="header-title">
            <h1>🐛 Insect Identification App</h1>
            <p>Upload an image of an insect to identify its species using AI</p>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
            <Navigation currentView={currentView} onViewChange={handleViewChange} />
            {user && <UserProfile />}
          </div>
        </div>
      </header>

      <main className="app-main" role="main">
        {renderCurrentView()}
      </main>

      <footer className="app-footer" role="contentinfo">
        <p>
          © 2025 <a href="https://syntaxengineer.com" target="_blank" rel="noopener noreferrer" style={{color: 'inherit', textDecoration: 'none'}}>SyntaxEngineer</a> | 
          <a href="https://sauravkumar.link" target="_blank" rel="noopener noreferrer" style={{color: 'inherit', textDecoration: 'none', marginLeft: '0.5rem'}}>Saurav Kumar</a> | 
          <a href="/privacy" onClick={(e) => { e.preventDefault(); handleViewChange('privacy'); }} style={{color: 'inherit', textDecoration: 'none', marginLeft: '0.5rem'}}>Privacy</a> | 
          <a href="/terms" onClick={(e) => { e.preventDefault(); handleViewChange('terms'); }} style={{color: 'inherit', textDecoration: 'none', marginLeft: '0.5rem'}}>Terms</a> | 
          <a href="/about" onClick={(e) => { e.preventDefault(); handleViewChange('about'); }} style={{color: 'inherit', textDecoration: 'none', marginLeft: '0.5rem'}}>About</a> | 
          <a href="/contact" onClick={(e) => { e.preventDefault(); handleViewChange('contact'); }} style={{color: 'inherit', textDecoration: 'none', marginLeft: '0.5rem'}}>Contact</a>
        </p>
      </footer>
    </div>
  )
}

function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  )
}

export default App