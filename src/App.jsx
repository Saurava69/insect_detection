import { useState } from 'react'
import ImageUpload from './components/ImageUpload'
import ResultDisplay from './components/ResultDisplay'
import LoadingSpinner from './components/LoadingSpinner'
import ErrorMessage from './components/ErrorMessage'
import { identifyInsect } from './services/insectApi'
import './App.css'

function App() {
  const [result, setResult] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const handleImageUpload = async (file) => {
    if (!file) return

    setLoading(true)
    setError(null)
    setResult(null)

    try {
      const apiResponse = await identifyInsect(file)
      setResult(apiResponse)
    } catch (err) {
      setError(err.message || 'Failed to identify insect. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  const handleReset = () => {
    setResult(null)
    setError(null)
  }

  return (
    <div className="app">
      <header className="app-header">
        <h1>🐛 Insect Identification App</h1>
        <p>Upload an image of an insect to identify its species</p>
      </header>

      <main className="app-main">
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
      </main>

      <footer className="app-footer">
        <p>© 2025 <a href="https://sauravkumar.link" target="_blank" rel="noopener noreferrer" style={{color: 'inherit', textDecoration: 'none'}}>sauravkumar.link</a></p>
      </footer>
    </div>
  )
}

export default App