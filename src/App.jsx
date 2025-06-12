import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
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
import Layout from './components/Layout'
import HomePage from './components/HomePage'
import { identifyInsect } from './services/insectApi'
import './App.css'

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="guide" element={<InsectGuide />} />
            <Route path="facts" element={<InsectFacts />} />
            <Route path="tips" element={<PhotoTips />} />
            <Route path="features" element={<Features />} />
            <Route path="about" element={<About />} />
            <Route path="privacy" element={<Privacy />} />
            <Route path="terms" element={<Terms />} />
            <Route path="contact" element={<Contact />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Route>
        </Routes>
      </Router>
    </AuthProvider>
  )
}

export default App