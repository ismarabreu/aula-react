import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { UseProvider } from './components/contexts/UseContext'
import './index.css'
import App from './App'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UseProvider>
      <App />
    </UseProvider>
  </StrictMode>,
)
