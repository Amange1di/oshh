import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './app/routes/App'
import { Analytics } from "@vercel/analytics/react"
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)