import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/pagelayout/Layout'
import Home from './components/pages/Home'
import Project from './components/pages/Project'
import Skills from './components/pages/Skills'
import About from './components/pages/About'
import Journey from './components/pages/Journey'
import Contact from './components/pages/Contact'
import Error from './components/pagelayout/Error'
import "./index.css"
const router = createBrowserRouter([{
  path: "/",
  element: <Layout/>,
  errorElement: <Error/>,
  children:[
    {
      index: "/",
      element: <Home/>
    },
    {
      path: "project",
      element: <Project/>
    },
    {
      path: "skills",
      element: <Skills/>
    },
    {
      path: "about",
      element: <About/>
    },
    {
      path: "journey",
      element: <Journey/>
    },
    {
      path: "contact",
      element: <Contact/>
    },
  ]  
}])
const App = () => {
  return (
   <div className='bg-[#050816] text-[#FFFF] min-h-screen'>
     <RouterProvider router={router}/>
   </div>
  )
}

export default App