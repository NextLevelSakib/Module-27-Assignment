import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './assets/css/main.css'
import App from './App.jsx'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-icons/font/bootstrap-icons.css';
import {Toaster} from "react-hot-toast";
import axios from 'axios'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Toaster position="top-center"/>
  </StrictMode>,
)
