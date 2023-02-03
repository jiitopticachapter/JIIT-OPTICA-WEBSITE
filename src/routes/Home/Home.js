import React from 'react'
import About from '../../components/About/About'
import NavBar from "../../components/NavBar/NavBar"
import Title from '../../components/Title/Title'
import MentorInfo from '../../components/MentorInfo/MentorInfo'
import Footer from '../../components/Footer/Footer'
import JoinUs from '../../components/JoinUs/JoinUs'
import ContactUs from '../../components/ContactUs/ContactUs'
// import ShootingStar from '../../components/ShootingStars/ShootingStars';

const Home = () => {
  return (
    <div>
      {/* <ShootingStar/> */}
      <NavBar />
      <Title />
      <About />
      <MentorInfo/>
      <JoinUs />
      <ContactUs/>
      <Footer/>
    </div>
  )
}

export default Home