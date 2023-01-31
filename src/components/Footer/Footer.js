import "./Footer.scss";
import React from 'react'

function Footer() {
  return (
    <div className="footer">
      
      <div className="copyright">
        Copyright &copy; 2022 JIIT OPTICA Chapter | All Rights Reserved

      </div>
      {/* <div className ="footer_spacer"></div> */}
      <div className="socials">
        <a href="https://www.instagram.com/jiitopticachapter"><i class="icon fa-brands fa-instagram fa-2xl" /></a>
        <a href="https://www.linkedin.com/company/jiitopticachapter/mycompany/"><i class="icon fa-brands fa-linkedin fa-2xl" /></a>
        <a href="https://github.com/jiitopticachapter"><i class="icon fa-brands fa-github fa-2xl" /></a>
        <a href="https://www.facebook.com/jiitopticachapter/"><i class="icon fa-brands fa-facebook fa-2xl" /></a>
        <a href="https://twitter.com/jiitoptica"><i class="icon fa-brands fa-twitter fa-2xl" /></a>
        <a href="mailto: jiitopticachapter@gmail.com"><i class="icon fa-regular fa-envelope fa-2xl" /></a>

      </div>
    </div>
  )
}

export default Footer
