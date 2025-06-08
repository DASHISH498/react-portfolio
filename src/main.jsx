import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.scss'
import App from './App.jsx'
import Header from './Header.jsx'
import Mains from './Mains.jsx'
import 'animate.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <Mains />
    <App />
  </StrictMode>,
)
