import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router'
import { router } from './Routs/Routs'
import AuthProvider from './Providers/AuthProvider'
import { ReTitleProvider } from 're-title'

createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <ReTitleProvider defaultTitle='Krishi-Link'>
      <RouterProvider router={router}></RouterProvider>
    </ReTitleProvider>
  </AuthProvider>
)
