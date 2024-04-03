import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './routes/App.tsx'
import "./styles/style.css"
import "./styles/patient.css"
import { Toaster } from 'sonner'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
    <Toaster />
  </React.StrictMode>,
)
