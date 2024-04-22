import Header from "./header/Header";
import Footer from "./component/Footer/Footer";
import { Outlet } from "react-router-dom";
import React from 'react'

function Layout() {
  return (
    <>
    <Header/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default Layout