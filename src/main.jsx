import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './routes/Router.jsx'
import AuthProvider from './providers/AuthProvider.jsx'
import EmailProvider from './providers/EmailProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <EmailProvider>
        <RouterProvider router={router} />
      </EmailProvider>
    </AuthProvider>
  </StrictMode>,
)
