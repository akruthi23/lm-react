import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Comp1 from './components'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Comp1 />
  </StrictMode>,
)
