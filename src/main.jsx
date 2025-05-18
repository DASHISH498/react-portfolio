import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.scss'
import App from './App.jsx'
import Header from './Header.jsx'
import Mains from './Mains.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <Mains />
    <App />
  </StrictMode>,
)
