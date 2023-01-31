import React from 'react'
import AlumniPage from '../../components/AlumniPage/AlumniPage'
import Footer from '../../components/Footer/Footer'

import NavBar from '../../components/NavBar/NavBar'
import PageName from '../../components/PageName/PageName'

function Alumni() {
  return (
    <div>
      <NavBar />
      <PageName page_heading="ALUMNI"/>
      <AlumniPage/>
      <Footer />
    </div>
  )
}

export default Alumni