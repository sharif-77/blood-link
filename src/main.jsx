import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import AuthProvider from './AuthProvider/AuthProvider'
import { RouterProvider } from 'react-router-dom'
import router from './router/router'
import { Toaster } from 'react-hot-toast'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
      <Toaster position="top-center" reverseOrder={false} />

    </AuthProvider>
  </React.StrictMode>,
)
