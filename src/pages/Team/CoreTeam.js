import React from 'react'

import Card from "../../components/Card";
import CoreTeamData from "../../data/CoreTeam"


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