import { Outlet, useLocation } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import Navigation from './Navigation'
import UserProfile from './UserProfile'
import LoadingSpinner from './LoadingSpinner'

const Layout = () => {
  const { loading: authLoading } = useAuth()
  const location = useLocation()

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
            <Navigation />
            <UserProfile />
          </div>
        </div>
      </header>

      <main className="app-main" role="main">
        <Outlet />
      </main>

      <footer className="app-footer" role="contentinfo">
        <p>
          © 2025 <a href="https://syntaxengineer.com" target="_blank" rel="noopener noreferrer" style={{color: 'inherit', textDecoration: 'none'}}>SyntaxEngineer</a> | 
          <a href="https://sauravkumar.link" target="_blank" rel="noopener noreferrer" style={{color: 'inherit', textDecoration: 'none', marginLeft: '0.5rem'}}>Saurav Kumar</a> | 
          <a href="/privacy" style={{color: 'inherit', textDecoration: 'none', marginLeft: '0.5rem'}}>Privacy</a> | 
          <a href="/terms" style={{color: 'inherit', textDecoration: 'none', marginLeft: '0.5rem'}}>Terms</a> | 
          <a href="/about" style={{color: 'inherit', textDecoration: 'none', marginLeft: '0.5rem'}}>About</a> | 
          <a href="/contact" style={{color: 'inherit', textDecoration: 'none', marginLeft: '0.5rem'}}>Contact</a>
        </p>
      </footer>
    </div>
  )
}

export default Layout