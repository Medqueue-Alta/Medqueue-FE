
import ReactDOM from 'react-dom/client'
import App from './routes/App.tsx'
import "./styles/style.css"
import "./styles/patient.css"
import { Toaster } from "@/components/ui/toaster"


ReactDOM.createRoot(document.getElementById('root')!).render(
  <>
    <App />
    <Toaster />
  </>,
)
