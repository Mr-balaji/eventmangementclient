"use client";

import React from 'react'
import Top from './top'
import { Metadata } from 'next'
//theme
import "primereact/resources/themes/lara-light-indigo/theme.css";

//core
import "primereact/resources/primereact.min.css";


export async function Layout({children}){

  return (
    <div>
    <Top/>
    {children}
    </div>
  )
}

export default Layout
