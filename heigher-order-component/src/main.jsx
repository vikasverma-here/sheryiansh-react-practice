import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import information from './context/information.jsx'
import firstComponent from './component/firstComponent.jsx'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
 <information>
  <App/>
  <firstComponent/>
 </information>,
)
