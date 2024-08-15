import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {HashRouter} from 'react-router-dom'
import { AuthProvider } from './AuthContext.jsx'
createRoot(document.getElementById('root')).render(
  <AuthProvider>
  <HashRouter>
  <App />
</HashRouter>
</AuthProvider>
)
