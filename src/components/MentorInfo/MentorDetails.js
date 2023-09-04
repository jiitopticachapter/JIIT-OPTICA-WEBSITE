import React from "react";
import "./MentorInfo.scss";
import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from "react";

const MentorDetails = () => {

  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 500,
      easing: 'ease-in-sine',
      delay: 100,
  });
  }, [])

  return (
    <>
     
      <div className="mentor-info">
      <div data-aos="fade-up">
        <section  className="about">
          <div className="main">
            <img src="/images/mentors/anuraj_panwar.jpg" alt="Mentor - Anurag Panwar" />
            <div className="about-text">
              <h2>Dr. ANURAJ PANWAR </h2>
              <h3>FACULTY ADVISOR</h3>
              <p>
                Dr. Anuraj Panwar is currently an Assistant Professor (Senior
                Grade) in Department of Physics and Material Science, JIIT
                Noida. He did M.Sc. (2002) and M.Phil. (2004) from Institute of
                Advanced Studies, CCS University Meerut. In 2010 he had
                completed Ph.D. from IIT Delhi. From Jan 2010 - Jan 2012, he
                worked as Research Associate with Prof. Karl-Peter Marzlin at
                St. Francis Xavier University, NS, Canada. In mid Jan 2012 he
                moved to Pohang University of Science and Technology, Pohang,
                South Korea. Since then (Jan 2012 to Aug 2017) he was the post
                doctoral research associate there and actively involved in
                research with Prof. C. M. Ryu. He is a member of Optical Society
                of America (OSA), Plasma Science Society India (PSSI) and
                Association of Asia Pacific Physical Societies – Division of
                Plasma Physics, (AAPPS-DPP).
              </p>
            </div>
          </div>
        </section>
        </div>
        <div data-aos="fade-up">
        <section className="about">
          <div className="main">
            <img src="/images/mentors/manoj_tripathi.png" alt="Mentor - Manoj Tripathi" />
            <div className="about-text">
              <h2>Dr. Manoj Tripathi </h2>
              <h3> CO-FACULTY ADVISOR</h3>
              <p>
                Dr. Manoj Tripathi completed his Post Graduate degree (M.Sc. in
                Physics) from Dr. Ram Manohar Lohia Avadh University, Faizabad
                followed by M.Tech. in Cryogenic Engineering from IIT Kharagpur.
                Dr. Tripathi secured a fellowship under ‘High Impact Research
                Grant-Scheme’ and completed his Ph.D. from University of Malaya,
                Kuala Lumpur Malaysia in the field of Energy Storage Materials.
                He has served as visiting researcher in Integrated
                Biotechnological Research Institute, Lucknow. Dr. Manoj Tripathi
                joined the Department of Physics & Material Science &
                Engineering at JIIT Noida in 2018 as Assistant Professor.
              </p>
            </div>
          </div>
        </section>
        </div>
        <div data-aos="fade-up">
        <section className="about">
          <div className="main">
            <img src="/images/mentors/ashish_bhatnagar.jpg" alt="Mentor - Ashish Bhatnagar" />
            <div className="about-text">
              <h2>Dr. ASHISH BHATNAGAR</h2>
              <h3>  CO-FACULTY ADVISOR</h3>
              <p>
                Dr. Ashish Bhatnagar completed his Post Graduate degree (M.Sc.
                in Physics) from University of Delhi, afterwards he joined
                Banaras Hindu University (Prof O.N. Srivastava) in 2011 for
                Doctoral Degree. He has been visiting scientist in the lab of
                Prof. J. Karl Johnson, University of Pittsburgh, USA from
                October 2014 to January 2015. After completing PhD in 2018, Dr
                Bhatnagar worked as Post-Doctoral Fellow at Banaras Hindu
                University under DST Nano Mission Thematic Project on Energy
                Storage. Dr. Ashish Bhatnagar joined the Department of Physics
                and Materials Science and Engineering at JIIT Noida in 2019 as
                Assistant Professor.
              </p>
            </div>
          </div>
        </section>
        </div>
        <div data-aos="fade-up">
        <section className="about">
          <div className="main">
            <img src="/images/mentors/ravi_gupta.jpeg" alt="Mentor - Manoj Tripathi" />
            <div className="about-text">
              <h2>Dr. Ravi Gupta</h2>
              <h3> CO-FACULTY ADVISOR</h3>
              <p>
              Dr. Ravi Gupta is an Assistant Professor in the Department of Physics and Materials Science and Engineering at JIIT Noida. He received his B.Sc. (H) Physics from Hindu College, University of Delhi in 2011 and M.Sc. Physics from the Department of Physics and Astrophysics, University of Delhi in 2013. He received his Ph.D. in Applied Physics from Delhi Technological University in 2018, under the supervision of Prof. (Dr.) Suresh C. Sharma. His research focused on the minimization and condensation of graphene sheets and carbon nanotubes/fibers in a plasma environment. He secured the 56th rank in the UGC-CSIR NET/JRF exam in 2015. Dr. Ravi worked as an Assistant Professor at Bhaskaracharya College of Applied Sciences, DU for one year. To explore new frontiers in the fields of physics and computer science, he joined Cyberimmersions Digital Forensics Solutions Lab as Director and Researcher. He worked on the identification and simplification of discontinuities present in voice sound wave forms and spectrograms under different stress conditions. He also worked on the optimization and abstraction of spatial and temporal tampering in digital video files using the concept of optical flow field vector. He has obtained many certifications in cyber forensics from EC Council US.
              </p>
            </div>
          </div>
        </section>
        </div>
      </div>
    </>
  );
};

export default MentorDetails;
