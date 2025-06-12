import { useState } from 'react'
import { useAuth } from '../contexts/AuthContext'

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true)
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    fullName: '',
    phone: '',
    bio: ''
  })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [message, setMessage] = useState('')
  
  const { signIn, signUp } = useAuth()

  // Test credentials helper
  const fillTestCredentials = () => {
    setFormData({
      email: 'test@example.com',
      password: 'testpassword123',
      fullName: 'Test User',
      phone: '+1 (555) 123-4567',
      bio: 'I love identifying insects and learning about nature!'
    })
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    setMessage('')

    try {
      if (isLogin) {
        const { error } = await signIn(formData.email, formData.password)
        if (error) {
          throw error
        }
        setMessage('Successfully signed in!')
      } else {
        // Validate required fields for signup
        if (!formData.fullName.trim()) {
          throw new Error('Full name is required')
        }
        
        if (formData.password.length < 6) {
          throw new Error('Password must be at least 6 characters long')
        }
        
        const { error } = await signUp(formData.email, formData.password, {
          full_name: formData.fullName,
          phone: formData.phone,
          bio: formData.bio
        })
        
        if (error) {
          throw error
        }
        
        setMessage('Account created successfully! You can now sign in.')
        setIsLogin(true)
        // Reset form
        setFormData({
          email: '',
          password: '',
          fullName: '',
          phone: '',
          bio: ''
        })
      }
    } catch (error) {
      console.error('Auth error:', error)
      setError(error.message || 'An error occurred. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="auth-container">
      <div className="auth-card">
        <div className="auth-header">
          <div className="auth-icon">
            {isLogin ? '🔐' : '🦋'}
          </div>
          <h2>{isLogin ? 'Welcome Back' : 'Join Our Community'}</h2>
          <p>
            {isLogin 
              ? 'Sign in to continue your insect identification journey' 
              : 'Create your account to start identifying insects with AI'
            }
          </p>
        </div>

        {/* Test Credentials Helper */}
        <div className="test-credentials">
          <p className="test-label">🧪 Quick Test Access</p>
          <button 
            type="button" 
            onClick={fillTestCredentials}
            className="btn-test"
          >
            Fill Test Credentials
          </button>
          <div className="test-info">
            <p><strong>Email:</strong> test@example.com</p>
            <p><strong>Password:</strong> testpassword123</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="auth-form">
          {!isLogin && (
            <div className="form-group">
              <label htmlFor="fullName">
                Full Name <span className="required">*</span>
              </label>
              <input
                id="fullName"
                name="fullName"
                type="text"
                value={formData.fullName}
                onChange={handleInputChange}
                required={!isLogin}
                placeholder="Enter your full name"
              />
            </div>
          )}

          <div className="form-group">
            <label htmlFor="email">
              Email Address <span className="required">*</span>
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              placeholder="Enter your email address"
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">
              Password <span className="required">*</span>
            </label>
            <input
              id="password"
              name="password"
              type="password"
              value={formData.password}
              onChange={handleInputChange}
              required
              placeholder="Enter your password"
              minLength={6}
            />
            {!isLogin && (
              <small className="form-hint">
                Password must be at least 6 characters long
              </small>
            )}
          </div>

          {!isLogin && (
            <>
              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="Enter your phone number (optional)"
                />
              </div>

              <div className="form-group">
                <label htmlFor="bio">About You</label>
                <textarea
                  id="bio"
                  name="bio"
                  value={formData.bio}
                  onChange={handleInputChange}
                  placeholder="Tell us about your interest in insects (optional)"
                  rows={3}
                />
              </div>
            </>
          )}

          {error && <div className="error-message">{error}</div>}
          {message && <div className="success-message">{message}</div>}

          <button 
            type="submit" 
            className="btn-primary auth-submit"
            disabled={loading}
          >
            {loading ? (
              <span className="loading-text">
                <span className="spinner"></span>
                {isLogin ? 'Signing In...' : 'Creating Account...'}
              </span>
            ) : (
              isLogin ? 'Sign In' : 'Create Account'
            )}
          </button>
        </form>

        <div className="auth-switch">
          <p>
            {isLogin ? "Don't have an account? " : "Already have an account? "}
            <button
              type="button"
              onClick={() => {
                setIsLogin(!isLogin)
                setError('')
                setMessage('')
                setFormData({
                  email: '',
                  password: '',
                  fullName: '',
                  phone: '',
                  bio: ''
                })
              }}
              className="link-button"
            >
              {isLogin ? 'Create one here' : 'Sign in instead'}
            </button>
          </p>
        </div>

        {!isLogin && (
          <div className="signup-benefits">
            <h4>Why join us?</h4>
            <ul>
              <li>🔍 AI-powered insect identification</li>
              <li>📚 Learn about different species</li>
              <li>🌿 Contribute to nature conservation</li>
              <li>📱 Access from any device</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  )
}

export default AuthForm