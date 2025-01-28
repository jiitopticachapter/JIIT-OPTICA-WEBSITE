import React from "react";
import {
  eventData2018_19,
  eventData2020_21,
  eventData2022_23,
  eventData2023_24,
  eventData2024_25,
} from "./EventData";
import "./EventPage.scss";
import YearButton from "../YearButton/YearButton";
import { EventCard } from "./EventCard";
import { useState, useEffect } from "react";

const Event = () => {
  const [eventYear, setEventYear] = useState("2024-25");
  const [eventData, setEventData] = useState(eventData2022_23);

  useEffect(() => {
    if (eventYear === "2022-23") {
      setEventData(eventData2022_23);
    } else if (eventYear === "2020-21") {
      setEventData(eventData2020_21);
    } else if (eventYear === "2018-19") {
      setEventData(eventData2018_19);
    } else if (eventYear === "2023-24") {
      setEventData(eventData2023_24);
    } else if (eventYear === "2024-25") {
      setEventData(eventData2024_25);
    }
  }, [eventYear]);

  return (
    <div className="events-container">
      <div className="year-buttons">
        <YearButton text="2024-25" SetEventYear={setEventYear} />
        <YearButton text="2023-24" SetEventYear={setEventYear} />
        <YearButton text="2022-23" SetEventYear={setEventYear} />
        <YearButton text="2020-21" SetEventYear={setEventYear} />
        <YearButton text="2018-19" SetEventYear={setEventYear} />
      </div>
      <div className="event-card-container">
        {eventData.map((val, ind) => {
          return (
            <EventCard
              key={ind}
              imgsrc={val.imgUrl}
              title={val.title}
              description={val.description}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Event;
