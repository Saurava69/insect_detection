import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  const navigationItems = [
    { id: '/', label: 'Identify', icon: '🔍', description: 'Upload & identify insects' },
    { id: '/guide', label: 'Guide', icon: '📚', description: 'Learn about insect groups' },
    { id: '/facts', label: 'Facts', icon: '🤯', description: 'Amazing insect facts' },
    { id: '/tips', label: 'Tips', icon: '📷', description: 'Photography tips' },
    { id: '/features', label: 'Features', icon: '✨', description: 'App features' },
    { id: '/about', label: 'About', icon: '🌿', description: 'About us' },
    { id: '/contact', label: 'Contact', icon: '📞', description: 'Get in touch' }
  ]

  const handleNavClick = () => {
    setIsMenuOpen(false)
  }

  return (
    <nav className="app-navigation">
      {/* Mobile menu button */}
      <button 
        className="mobile-menu-button"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle navigation menu"
      >
        <span className="menu-icon">
          {isMenuOpen ? '✕' : '☰'}
        </span>
      </button>

      {/* Navigation items */}
      <div className={`nav-items ${isMenuOpen ? 'mobile-open' : ''}`}>
        {navigationItems.map((item) => (
          <Link
            key={item.id}
            to={item.id}
            className={`nav-item ${location.pathname === item.id ? 'active' : ''}`}
            onClick={handleNavClick}
            title={item.description}
          >
            <span className="nav-icon">{item.icon}</span>
            <span className="nav-label">{item.label}</span>
          </Link>
        ))}
      </div>

      {/* Mobile overlay */}
      {isMenuOpen && (
        <div 
          className="mobile-overlay"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </nav>
  )
}

export default Navigation