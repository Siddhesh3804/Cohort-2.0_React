import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './Components/navbar.css'
import './Components/mainpage.css'
import './Components/secondpage.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
