import React from 'react'

import MentorInfo from './MentorInfo'
import NavBar from '../../components/NavBar'
import PageName from '../../components/PageName'

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