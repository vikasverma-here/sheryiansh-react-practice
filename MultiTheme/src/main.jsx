import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ThemeProcider from './context/ThemeContext.jsx'

createRoot(document.getElementById('root')).render(
  <ThemeProcider>
 <App />
  </ThemeProcider>
   
 
)
