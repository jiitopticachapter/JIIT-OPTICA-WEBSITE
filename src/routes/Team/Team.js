import React from 'react'

import CoreTeam from '../../components/CoreTeam/CoreTeam'
import Footer from '../../components/Footer/Footer'
import NavBar from '../../components/NavBar/NavBar'
import PageName from '../../components/PageName/PageName'

function Team() {
  return (
    <div>
      <NavBar />
      <PageName page_heading="CORE TEAM"/>
      <CoreTeam/>
      <Footer />
    </div>
  )
}

export default Team