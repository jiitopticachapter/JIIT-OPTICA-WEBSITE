import React from 'react'
import Navbar from '../../components/NavBar/NavBar'
import PageName from '../../components/PageName/PageName'
import Gallerygrid from '../../components/Gallery/Gallerygrid'
import Footer from '../../components/Footer/Footer'

export const Gallery = () => {
  return (
    <>
        <Navbar/>
        <PageName page_heading="GALLERY"/>
        <Gallerygrid />
        <Footer />
    </>
  )
}

export default  Gallery;


