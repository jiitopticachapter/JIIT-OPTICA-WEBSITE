import "./CoreTeam.css";
import React from 'react';
import Card from "../Card/Card";
import CoreTeamData from './CoreTeamInfo';
import { motion } from "framer-motion";
import { containerVariants,cardVariants } from "../../utils/motionVariants";

function CoreTeam() {
  return (
    <motion.div
      className="team_container"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="card_container">
        {CoreTeamData.map((val, ind) => (
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
      </div>
    </motion.div>
  );
}

export default CoreTeam