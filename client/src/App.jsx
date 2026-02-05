import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Layout } from './Layout'
import UserDashboard from './pages/UserDashboard'

function App() {
  const router = createBrowserRouter(
    [
      {
        path: '/',
        element: <Layout/>,
        children: [
          {
            path: '',
            element: <UserDashboard/>
          }
        ]
      }
    ]
  )
  return (
    <RouterProvider router={router}/>
  )
}

export default App
