import "./EventPage.scss"

export const EventCard = (props)=>{
    return(
      <div className="event-wrapper">
        <div className="event-Wrappercard">
          <img loading="lazy" src={props.imgsrc} alt={props.title} />{" "}
          <div className="event-info">
            <h1 className="event-card_name">{props.title}</h1>
            <p>{props.description}</p>
          </div>
        </div>
      </div>
      
    )
}