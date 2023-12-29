import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Contact from './components/Contact'
import Name from './components/Name'
import Friend from './components/Friend'
const router = createBrowserRouter([

  {

    path: "/",
    element: <Contact />,
    children: [
      {
        path: "/name",
        element: <Name />
      },
      {
        path: "/friend",
        element: <Friend />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
