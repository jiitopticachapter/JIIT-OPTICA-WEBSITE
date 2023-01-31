import "./About.scss";
import React from 'react'
import { InfoBox1, InfoBox2, InfoBox3 } from "../InfoBox/InfoBox";


function About() {
  return (
    <div className="about">
      <div id="about_id" className="spacer"></div>
      <h1 className="about_title">ABOUT US</h1>
      <InfoBox3
        heading="Who We Are"
        info="From a newly founded hub with a handful active members, JIIT OPTICA has evolved into a reputable community with commendable social outreach. With the support of our versatile volunteers, assiduous coordinators, core team enthusiasts and their diligent efforts we have been able to achieve unprecedented levels of outreach, interaction and social support. This journey has been nothing short of enthralling and thrilling. From following the footsteps and walking down the well-trodden path to paving it’s very own, JIIT OPTICA has witnessed bliss in it’s own making. From conducting technical seminars and workshops to organising our flagship event JSCOP, JIIT OPTICA has made a brand of its name and with each success our impeccable efforts have set the bar high for the next. With the combined efforts of the digital, marketing and content team JIIT OPTICA has strengthened it's social media presence and it now has over 1k followers on Instagram and various posts on the page have 15k+ views. Even after the challenging times of the pandemic, Optica was the only hub to conduct an offline event which attracted a huge crowd. This event helped us in increasing our members and added to our legacy. The event attracted major footfall from various other colleges as well. Hardworking and zealous volunteers and enthusiastic participants contributed to the success of JSCOP. This unending journey of changing times and our constant urge to deliver is a space ride and our legacy. We are delighted to have you all onboard with us ! "
      />
      <InfoBox1
        image="images/about_one.png"
        heading="Our Community"
        info="JIIT OPTICA, the institute's only internationally recognised scientific body offers a forum for students to discover new worlds outside of the academic curriculum and organises workshops, annual festivals, national conferences, alumni gatherings, and educational visits to reputable research and development institutions. In order to inspire young minds, the club also hosts lectures by illustrious scholar and researchers from a variety of subjects.  " />
      <InfoBox2
        image="images/about_two.jpg"
        heading="Life as a Member"
        info="Students actively participate in a variety of competitions in this organisation, displaying originality, great inventiveness, and dedication to their goals. Additionally, these activities aid students in developing their communication and presentation skills, which are crucial in today's society.  Optica offers a very powerful platform for the overall growth of students and makes an effort to raise the pupils' academic standards, along with focusing on the development of their working capabilities.  " />
      <InfoBox1
        image="images/about_three.jpg"
        heading="What Makes Us Unique"
        info="In the past we've conducted a plethora of workshops, while our main attraction stays at the society's annually conducted JSCOP, it won't be an exaggeration to say that the rest of our events stand par the quality.
        Through the mentorship provided by our core team, we strive to provide a real world work environment to our members to enrich their experiences.
        All of the departments of our society display, analyse, and improve upon the student's potential while the audience which partakes in our activities has their brains propelled with geeky information about recent scientific and technological facts. " />
    </div>

  )
}

export default About