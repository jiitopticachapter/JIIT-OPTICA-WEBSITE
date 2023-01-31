import React from 'react'
import Navbar from '../../components/NavBar/NavBar'
import PageName from '../../components/PageName/PageName'
import Event from '../../components/EventPage/Event'
import Footer from '../../components/Footer/Footer'

const Events = () => {
  return (
    <>
        <Navbar/>
        <PageName page_heading="PAST EVENTS"/>
        <Event />
        <Footer/>
    </>
  )
}

export default Events