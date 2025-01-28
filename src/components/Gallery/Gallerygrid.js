import React from "react";
import ImageGallery from "react-image-gallery";
// import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { useState, useEffect } from "react";
import SideHeading from "../SideHeading/SideHeading";
import {
  gallery2025,
  gallery2024,
  gallery2023,
  gallery2022,
  gallery2019,
  gallery2021,
  recenthighlights,
} from "./GalleryimgData";
import "react-image-gallery/styles/css/image-gallery.css";
import "./Gallerygrid.css";
import Gallerybgimg from "./Gallerybgimg";

import YearButton from "../YearButton/YearButton";

export default function Gallerygrid() {
  const [eventYear, setEventYear] = useState("2025");
  const [galleryData, setGalleryData] = useState(gallery2024);

  useEffect(() => {
    if (eventYear === "2022") {
      setGalleryData(gallery2022);
    } else if (eventYear === "2021") {
      setGalleryData(gallery2021);
    } else if (eventYear === "2019") {
      setGalleryData(gallery2019);
    } else if (eventYear === "2023") {
      setGalleryData(gallery2023);
    } else if (eventYear === "2024") {
      setGalleryData(gallery2024);
    } else if (eventYear === "2025") {
      setGalleryData(gallery2025);
    }
  }, [eventYear]);

  useEffect(() => {
    const throttleProgressBar = throttle(() => {
      document.querySelectorAll(".progress-bar").forEach(calculateProgressBar);
    }, 250);
    throttleProgressBar();
  }, []);

  // left navigation button of automatic carousel

  function renderLeftNav(onClick, disabled) {
    return (
      <div
        type="button"
        className="image-gallery-left-nav"
        aria-label="Prev Slide"
        disabled={disabled}
        onClick={onClick}
      >
        <i className="fa-sharp fa-solid fa-chevron-left fa-2x"></i>
      </div>
    );
  }

  // right naviagation button of automatic carousel

  function renderRightNav(onClick, disabled) {
    return (
      <div
        type="button"
        className="image-gallery-right-nav "
        aria-label="Next Slide"
        disabled={disabled}
        onClick={onClick}
      >
        <i className="fa-sharp fa-solid fa-chevron-right fa-2x"></i>
      </div>
    );
  }

  // this function helps know which button was clicked and stores it in handle variable

  const handleClick = (e) => {
    let handle;
    if (e.target.matches(".handle")) {
      handle = e.target;
    } else {
      handle = e.target.closest(".handle");
    }
    if (handle != null) onHandleClick(handle);
  };

  // window.addEventListener("resize",throttleProgressBar)

  document.querySelectorAll(".progress-bar").forEach(calculateProgressBar);

  // this function helps shifts to next or previous screen using slider index and items per screen variables

  function calculateProgressBar(progressBar) {
    progressBar.innerHTML = "";

    const slider = progressBar
      .closest(".gallery-row")
      .querySelector(".gallery-items");
    const itemCount = slider.children.length;
    const itemsPerScreen = parseInt(
      getComputedStyle(slider).getPropertyValue("--items-per-screen")
    );
    let sliderIndex = parseInt(
      getComputedStyle(slider).getPropertyValue("--slider-index")
    );
    const progressBarItemCount = Math.ceil(itemCount / itemsPerScreen);

    if (sliderIndex >= progressBarItemCount) {
      slider.style.setProperty("--slider-index", progressBarItemCount - 1);
      sliderIndex = progressBarItemCount - 1;
    }
    for (let i = 0; i < progressBarItemCount; i++) {
      const barItem = document.createElement("div");

      barItem.classList.add("progress-item");
      if (i === sliderIndex) {
        barItem.classList.add("active");
      }
      progressBar.append(barItem);
    }
  }

  //  this function handles click events

  function onHandleClick(handle) {
    const progressBar = handle
      .closest(".gallery-row")
      .querySelector(".progress-bar");
    const slider = handle
      .closest(".gallery-imgcontainer")
      .querySelector(".gallery-items");
    const sliderIndex = parseInt(
      getComputedStyle(slider).getPropertyValue("--slider-index")
    );

    const progressBarItemCount = progressBar.children.length;
    if (handle.classList.contains("left-handle")) {
      if (sliderIndex - 1 < 0) {
        slider.style.setProperty("--slider-index", progressBarItemCount - 1);
        progressBar.children[sliderIndex].classList.remove("active");
        progressBar.children[progressBarItemCount - 1].classList.add("active");
      } else {
        slider.style.setProperty("--slider-index", sliderIndex - 1);
        progressBar.children[sliderIndex].classList.remove("active");
        progressBar.children[sliderIndex - 1].classList.add("active");
      }
    }

    if (handle.classList.contains("right-handle")) {
      if (sliderIndex + 1 >= progressBarItemCount) {
        slider.style.setProperty("--slider-index", 0);
        progressBar.children[sliderIndex].classList.remove("active");
        progressBar.children[0].classList.add("active");
      } else {
        slider.style.setProperty("--slider-index", sliderIndex + 1);
        progressBar.children[sliderIndex].classList.remove("active");
        progressBar.children[sliderIndex + 1].classList.add("active");
      }
    }
  }

  // throttle function refer web dev simplified blog for this

  function throttle(cb, delay = 1000) {
    let shouldWait = false;
    let waitingArgs;
    const timeoutFunc = () => {
      if (waitingArgs == null) {
        shouldWait = false;
      } else {
        cb(...waitingArgs);
        waitingArgs = null;
        setTimeout(timeoutFunc, delay);
      }
    };

    return (...args) => {
      if (shouldWait) {
        waitingArgs = args;
        return;
      }

      cb(...args);
      shouldWait = true;
      setTimeout(timeoutFunc, delay);
    };
  }

  return (
    <div className="Gallery">
      <div className="gallery-recent">Recent Highlights</div>
      <div className="gallery-row">
        <div className="gallery-imgcontainer">
          <button onClick={handleClick} className="handle left-handle">
            <i className="fa-sharp fa-solid fa-chevron-left fa-2x"></i>
          </button>
          <div className="gallery-items">
            {recenthighlights.map((val, ind) => {
              return <Gallerybgimg key={ind} url={val.imgUrl} />;
            })}
          </div>
          <button onClick={handleClick} className="handle right-handle">
            <i className="fa-sharp fa-solid fa-chevron-right fa-2x"></i>
          </button>
        </div>

        <div className="progress-bar"></div>
      </div>

      <div className="gallery-header">
        <strong>OPTICA AT GLANCE</strong>
      </div>
      <div className="gallery-container">
        <div className="gallery-heading">
          <SideHeading side_heading="Year-wise Gallery" />
          <YearButton
            className="year-buttons"
            text="2025"
            SetEventYear={setEventYear}
          />
          <YearButton
            className="year-buttons"
            text="2024"
            SetEventYear={setEventYear}
          />
          <YearButton
            className="year-buttons"
            text="2023"
            SetEventYear={setEventYear}
          />
          <YearButton
            className="year-buttons"
            text="2022"
            SetEventYear={setEventYear}
          />
          <YearButton
            className="year-buttons"
            text="2021"
            SetEventYear={setEventYear}
          />
          <YearButton
            className="year-buttons"
            text="2019"
            SetEventYear={setEventYear}
          />
        </div>

        <div className="Image-gallery">
          <ImageGallery
            items={galleryData}
            renderLeftNav={renderLeftNav}
            renderRightNav={renderRightNav}
            showPlayButton={false}
            lazyLoad={true}
            autoPlay={"true"}
          />
        </div>
      </div>
    </div>
  );
}
