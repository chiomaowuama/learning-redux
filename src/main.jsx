import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Layout from './Layout.jsx'
import Contact from './component/Contact/Contact.jsx'
import Home from './component/home/Home.jsx'
import About from './component/About/About.jsx'
import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<Home />}/>
      <Route path='About' element={<About />}/>

    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
          <RouterProvider router={router} />
  </React.StrictMode>,
)
