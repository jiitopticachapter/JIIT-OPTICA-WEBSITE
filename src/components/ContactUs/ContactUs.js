import React from "react";
import "./ContactUs.scss";
function ContactUs() {
  return (
    <>
      <div className="contactUs">
        <h1>CONTACT US</h1>
      <div className="ContactUs-container">
        <div className="ContactUs-content">
          <div className="ContactUs-left-side">
            <div className="ContactUs-address ContactUs-details">
                  <i className="fas fa-map-marker-alt"></i>
                {/* <div className="ContactUs-topic">Address</div> */}
                <div className="ContactUs-details2">
                  <div className="ContactUs-text-one">JIIT - Noida</div>
                  <div className="ContactUs-text-two">Sector - 62</div>
                </div>
            </div>
            <div className="ContactUs-phone ContactUs-details">
              <i className="fas fa-phone-alt"></i>
              {/* <div className="ContactUs-topic">Phone</div> */}
              <div className="ContactUs-details2">
                <div className="ContactUs-text-one">+91 9044552333</div>
                <div className="ContactUs-text-two">+91 8882988313</div>
              </div>
            </div>
            <div className="ContactUs-email ContactUs-details">
              <i className="fas fa-envelope"></i>
              {/* <div className="ContactUs-topic">Email</div> */}
              <div className="ContactUs-details2">
                {/* <div className="ContactUs-text-one">contact@jiitopticachapter.com</div> */}
                <div className="ContactUs-text-two">jiitopticachapter@gmail.com</div>
              </div>
            </div>
          </div>
          <div className="ContactUs-right-side">
            <div className="ContactUs-topic-text">Send us a message</div>
            
            <form action="#">
              <div className="ContactUs-input-name">
                <div className="ContactUs-input-box FirstName">
                  <input type="text" placeholder="First Name" />
                </div>
                <div className="ContactUs-input-box LastName">
                  <input type="text" placeholder="Last Name" />
                </div>
              </div>
              
              <div className="ContactUs-input-box">
                <input type="text" placeholder="Mobile Number" />
              </div>
              <div className="ContactUs-input-box">
                <input type="text" placeholder="Email" />
              </div>
              <div className="ContactUs-input-box ContactUs-message-box">
                <textarea name="" id="" cols="30" rows="10" placeholder="Your Message"></textarea>
              </div>
              <div className="ContactUs-button">
                <input type="button" value="Send Now" />
              </div>
            </form>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}

export default ContactUs;

