import React from "react";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/NavBar/NavBar";
import JscopPage from "../../components/JscopEvent/JscopPage";
import PageName from "../../components/PageName/PageName";
import "./Jscop.css";

function Jscop() {
  return (
    // <div className='jscop'>
    //     <Navbar />
    //     <div className='jscop_poster'></div>
    //     <Footer />
    // </div>
    <div>
      <Navbar />
      <PageName page_heading="JSCOP" />
      <JscopPage />
      <Footer />
    </div>
  );
}

export default Jscop;
