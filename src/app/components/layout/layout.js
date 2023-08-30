"use client";

import React from 'react'
import Top from './top'
//theme
import "primereact/resources/themes/lara-light-indigo/theme.css";

//core
import "primereact/resources/primereact.min.css";


const Layout = ({children}) => {

  return (
    <div>
    <Top/>
    {children}
    </div>
  )
}

export default Layout
