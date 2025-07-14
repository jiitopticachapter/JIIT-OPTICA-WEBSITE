import React from "react";
import "./ContactUs.scss";
import { useState } from "react";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

function ContactUs() {
  const [form, setForm] = useState({
    firstname: "",
    lastname: "",
    number: "",
    email: "",
    message: "",
  });

  const handlechange = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
    console.log(event.target.value);
  };

  var contactParams = {
    from_name: form.firstname + form.lastname,
    from_email: form.email,
    message: form.message,
    to_name: "JIIT OPTICA",
    phone_no: form.number,
    reply_to: "opticastudentchapterjiit@gmail.com",
  };

  const Form = useRef();
  
  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    alert("Phone number copied to clipboard!");
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (
      !form.firstname ||
      !form.lastname ||
      !form.email ||
      !form.number ||
      !form.message
    ) {
      alert("Please check your entries");
      return false;
    } else {
      emailjs
        .send(
          "service_7ppuafa",
          "template_oo1fky7",
          contactParams,
          "owr6ABCfGYaeiy-ut"
        )
        .then(
          function (response) {
            console.log("SUCCESS!", response.status, response.text);
            alert("Mail sent successfully");
            setForm({
              firstname: "",
              lastname: "",
              number: "",
              email: "",
              message: "",
            });
          },
          function (error) {
            console.log("FAILED...", error);
            alert("Failed to connect");
          }
        );
    }
  };

  return (
    <>
      <div className="contactUs">
        <h1>CONTACT US</h1>
        <div className="ContactUs-container">
          <div className="ContactUs-content">
            <div className="ContactUs-left-side">
              <div className="ContactUs-address ContactUs-details">
                <i
                  className="fas fa-map-marker-alt"
                  style={{ fontSize: "20px" }}
                ></i>
                {/* <div className="ContactUs-topic">Address</div> */}
                <div className="ContactUs-details2">
                  <div className="ContactUs-text-one">JIIT - Noida</div>
                  <div className="ContactUs-text-two">Sector - 62</div>
                </div>
              </div>
              <div className="ContactUs-phone ContactUs-details">
                <i
                  className="fas fa-phone-alt"
                  style={{ fontSize: "20px" }}
                ></i>
                {/* <div className="ContactUs-topic">Phone</div> */}
                <div className="ContactUs-details2">
                  <div className="ContactUs-text-one" onClick={() => copyToClipboard("+91 9610363350")}>
                   Bhavishya Katariya<br /> +91 9610363350{" "}
                  </div>
                  {/* <br /> */}
                  
                </div>
              </div>

              <div className="ContactUs-phone ContactUs-details">
                <i
                  className="fas fa-phone-alt"
                  style={{ fontSize: "20px" }}
                ></i>
                {/* <div className="ContactUs-topic">Phone</div> */}
                <div className="ContactUs-details2">
                  <div className="ContactUs-text-two" onClick={() => copyToClipboard("+91 9045410408")}>
                    Saarthak Agarwal <br /> +91 9045410408
                  </div>
                  {/* <br /> */}
                  
                </div>
              </div>
             
              <div className="ContactUs-email ContactUs-details">
                <i className="fas fa-envelope" style={{ fontSize: "20px" }}></i>
                {/* <div className="ContactUs-topic">Email</div> */}
                <div className="ContactUs-details2">
                  {/* <div className="ContactUs-text-one">contact@jiitopticachapter.com</div> */}
                  <div className="ContactUs-text-two">
                    <a href="mailto:opticastudentchapterjiit@gmail.com">
                  opticastudentchapterjiit@gmail.com
                  </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="ContactUs-right-side">
              <div className="ContactUs-topic-text">Send us a message</div>

              <form ref={Form} onSubmit={sendEmail}>
                <div className="ContactUs-input-name">
                  <div className="ContactUs-input-box FirstName">
                    <input
                      type="text"
                      placeholder="First Name"
                      name="firstname"
                      onChange={handlechange}
                      value={form.firstname}
                    />
                  </div>
                  <div className="ContactUs-input-box LastName">
                    <input
                      type="text"
                      placeholder="Last Name"
                      name="lastname"
                      onChange={handlechange}
                      value={form.lastname}
                    />
                  </div>
                </div>

                <div className="ContactUs-input-box">
                  <input
                    type="text"
                    placeholder="Mobile Number"
                    name="number"
                    onChange={handlechange}
                    value={form.number}
                  />
                </div>
                <div className="ContactUs-input-box">
                  <input
                    type="text"
                    placeholder="Email"
                    name="email"
                    onChange={handlechange}
                    value={form.email}
                  />
                </div>
                <div className="ContactUs-input-box ContactUs-message-box">
                  <textarea
                    name="message"
                    id=""
                    cols="30"
                    rows="10"
                    placeholder="Your Message"
                    onChange={handlechange}
                    value={form.message}
                  ></textarea>
                </div>
                <div className="ContactUs-button">
                  <input type="submit" value="Send Now" />
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
