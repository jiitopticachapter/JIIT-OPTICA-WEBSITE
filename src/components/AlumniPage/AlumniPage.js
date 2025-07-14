import "./AlumniPage.scss";
import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import SideHeading from "../SideHeading/SideHeading";
import YearButton from "../YearButton/YearButton";
import { motion } from "framer-motion";
import { containerVariants, cardVariants } from "../../utils/motionVariants";
import {
  FoundingMember,
  AluminiData2020_21,
  AluminiData2021_22,
  AluminiData2019_20,
  AluminiData2022_23,
  AluminiData2023_24,
  AluminiData2024_25,
} from "./AluminiData";

function AlumniPage() {
  const [year, SetYear] = useState("2024-25");
  const [AluminiData, setAluminiData] = useState(AluminiData2021_22);

  useEffect(() => {
    if (year === "2021-22") {
      setAluminiData(AluminiData2021_22);
    } else if (year === "2020-21") {
      setAluminiData(AluminiData2020_21);
    } else if (year === "2019-20") {
      setAluminiData(AluminiData2019_20);
    } else if (year === "2022-23") {
      setAluminiData(AluminiData2022_23);
    } else if (year === "2023-24") {
      setAluminiData(AluminiData2023_24);
    } else if (year === "2024-25") {
      setAluminiData(AluminiData2024_25);
    }
  }, [year]);

  return (
    <motion.div
      className="alumni"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Founding Members */}
      <div className="alumni_founders">
        <div className="alumni_founders_heading">
          <SideHeading
            side_heading="Founding Members"
            side_content="Visionaries plant the seeds of tomorrow's success."
          />
        </div>
        <div className="alumni_founders_cards">
          {FoundingMember.map((val, ind) => (
            <motion.div key={ind} variants={cardVariants} className="motion_card_wrapper">
              <Card
                imgsrc={val.imgsrc}
                name={val.name}
                designation={val.designation}
                linkedinLink={val.linkedinLink}
                instaLink={val.instaLink}
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Alumni by Year */}
      <div className="alumni_founders">
        <div className="alumni_founders_heading">
          <SideHeading
            side_heading="Meet Our Alumni"
            side_content="The journey continues, fueled by passion and purpose."
          />
          <YearButton text="2024-25" SetYear={SetYear} />
          <YearButton text="2023-24" SetYear={SetYear} />
          <YearButton text="2022-23" SetYear={SetYear} />
          <YearButton text="2021-22" SetYear={SetYear} />
          <YearButton text="2020-21" SetYear={SetYear} />
          <YearButton text="2019-20" SetYear={SetYear} />
        </div>

         <motion.div
          key={year}
          className="alumni_founders_cards"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {AluminiData.map((val, ind) => (
            <motion.div
              key={ind}
              variants={cardVariants}
              className="motion_card_wrapper"
            >
              <Card
                imgsrc={val.imgsrc}
                name={val.name}
                designation={val.designation}
                linkedinLink={val.linkedinLink}
                instaLink={val.instaLink}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}

export default AlumniPage;
