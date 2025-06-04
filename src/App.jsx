import { useState } from 'react'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/home'
import Shop from './pages/home/sections/Shop'
import Services from './pages/home/sections/Services'
import Contact from './pages/home/sections/Contact'
import AboutUs from './pages/home/sections/AboutUs'
import Rootlayout from './layouts/Rootlayout'

function App() {
  const router = createBrowserRouter( [
    {
      path: '/',
      element: <Rootlayout/>,
      children: [  
      {
        index: true, 
        element: <Home/>
      },
      {
        path: '/shop',
        element: <Shop/>
      },
      {
        path: '/services',
        element: <Services/>
      },
      {
        path: '/aboutus',
        element: <AboutUs/>
      },
      {
        path: '/contact',
        element: <Contact/>
         }
    ]
    }

   




  ])
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
