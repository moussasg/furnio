import React from 'react'
import ReactDOM from "react-dom/client"
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from "react-router-dom" //// il faut faire commande npm add router
import { AuthProvider } from './components/componenetLogin/rightcomponent/autcontext.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <BrowserRouter> 
    <App/>
    </BrowserRouter> 
    </AuthProvider>
  </React.StrictMode>,
)
