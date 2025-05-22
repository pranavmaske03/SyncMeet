import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { SocketProvider } from './contexts/SocketProvider.js'
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render (
  <StrictMode>
    <BrowserRouter>
      <SocketProvider>
        <App/>
      </SocketProvider>
    </BrowserRouter>
  </StrictMode>,
);
