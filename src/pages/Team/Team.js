import React from 'react'

import CoreTeam from './CoreTeam'
import NavBar from '../../components/NavBar'
import PageName from '../../components/PageName'

function Team() {
  return (
    <div>
      <NavBar />
      <PageName page_heading="CORE TEAM"/>
      <CoreTeam/>
    </div>
  )
}

export default Team