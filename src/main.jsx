import { StrictMode } from 'react'
import React from 'react'
import { supabase } from './supabaseClient.js'
import { createRoot } from 'react-dom/client'
import './index.css'
import QAHive from './QAHive.jsx'
import { BrowserRouter } from 'react-router-dom'
import { SessionContextProvider } from '@supabase/auth-helpers-react'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SessionContextProvider supabaseClient={supabase}>
    <BrowserRouter>
    <QAHive />
    </BrowserRouter>
    </SessionContextProvider>
  </React.StrictMode>,
)
