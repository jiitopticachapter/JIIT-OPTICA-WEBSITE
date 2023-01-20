import React from 'react'

import MentorInfo from '../../components/MentorInfo/MentorInfo'
import NavBar from '../../components/NavBar/NavBar'
import PageName from '../../components/PageName/PageName'

const Mentor = () => {
  return (
    <div>
      <NavBar />
      <PageName page_heading="MENTORS"/>
      <MentorInfo/>
    </div>
  )
}

export default Mentor