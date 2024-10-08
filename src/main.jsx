import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {  HashRouter } from 'react-router-dom'
import Playercontextprovider from './context/playercontext.jsx'

createRoot(document.getElementById('root')).render(
  <HashRouter>
  <Playercontextprovider>
  <App/>
  </Playercontextprovider>
 
  </HashRouter>
,
)
