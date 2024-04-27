import React from 'react'
import {Outlet} from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'

const Layout = () => {
  return (
    <div className="h-full w-full bg-slate-300">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Layout
