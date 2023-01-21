import React from 'react'

import NavBar from "../../components/Navbar"
import Title from './Title'
import Alumni from './Alumni'
import Mentor from './Mentor'

const Home = () => {
  return (
    <div>
      <NavBar/>
      <Title />
      <Mentor />
      <Alumni />
    </div>
  )
}

export default Home