import React from 'react'
import Footer from './footer/footer'
import Navbar from './navbar/navbar'

export default function Layout(props) {
  return (
    <>
    <Navbar/>
    <main  style={{minHeight:'80vh'}}>
      {props.children}
    </main>
     <Footer/>
    </>
    

  )
}