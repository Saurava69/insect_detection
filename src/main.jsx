import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { initializeSecurityMeasures } from './utils/security'
import './index.css'

// Initialize security measures
initializeSecurityMeasures()

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)