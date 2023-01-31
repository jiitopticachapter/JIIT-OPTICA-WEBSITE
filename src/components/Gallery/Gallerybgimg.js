import React from "react";

function Gallerybgimg(props){
    return(
            <a href="#image" className="bg-img">
                <img src={props.url} alt="recent year images" />
            </a>
    )
}

export default Gallerybgimg;