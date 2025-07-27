import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './style.css'
import AppRoutes from './routes/index.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppRoutes />
  </StrictMode>,
)
