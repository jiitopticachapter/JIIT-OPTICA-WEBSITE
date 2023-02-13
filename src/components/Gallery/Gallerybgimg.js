import React from "react";

function Gallerybgimg(props){
    return(
            <a href="#image" className="bg-img">
                <img src={props.url} alt="JIIT OPTICA CHAPTER RECENT HIGHTLIGHTS IMAGES" />
            </a>
    )
}

export default Gallerybgimg;