import "./CoreTeam.css";
import React from 'react'
import Card from "../Card/Card";
import CoreTeamData from './CoreTeamInfo';

function CoreTeam() {
  return (
    <div className="team_container">
      <div className="card_container">

        {CoreTeamData.map((val,ind)=>{
          return (
            <Card 
              key={ind} 
              imgsrc={val.imgsrc} 
              name={val.name} 
              designation={val.designation}
              linkedinLink={val.linkedinLink}
              instaLink={val.instaLink}
            />
          )
        })}

      </div>
    </div>
  )
}

export default CoreTeam