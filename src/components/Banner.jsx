import React from "react";
import styled from "styled-components";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import slider1 from "../image/slider1.png";
import slider2 from "../image/slider2.png";
import slider3 from "../image/slider3.png";

const BannerWapper = styled.header`
  background-image: black;
  margin-top: 85px;
  .header-img {
    height: 443px;
    width: 100%;
    background-color: #000;
    .header-slider2 {
      width: 656.74px;
      height: 336.87px;
      margin-top: 2em;
      margin-left: 50vw !important;
    }
  }
  .header-carousel {
    height: 100px;
    /* img {
      width: 100%;
      min-height: 450px !important;
    } */
  }
  .title-banner-slider1 {
    margin-left: 14%;
    margin-top: 2em;
    width: 350px;
    height: 378px;
    text-align: start;
    border-radius: 10px;
    padding: 0 2em;
    background-color: black;
    p {
      color: white;
      text-align: left;
      font-size: 18px;
    }

    h2 {
      font-weight: bold;
      font-size: 40px;
      color: white;
    }
    button {
      margin-top: 1em;
      background-color: #6e6a6b;
      padding: 8px;
      border-radius: 8px;
      color: #ffffff;
    }
  }
  .title-banner-slider2 {
    padding-left: 5em;
    padding-top: 3em;
    width: 50%;
    text-align: start;
    p {
      color: white;
      text-align: left;
      font-size: 20px;
    }
    span {
      color: white;
      text-align: left;
      font-size: 20px;
    }
    h2 {
      font-weight: bold;
      font-size: 45px;
      color: white;
    }
  }
`;
export const Banner = () => {
  return (
    <BannerWapper>
      <Carousel
        className="header-carousel"
        autoPlay={true}
        infiniteLoop={true}
        interval={5000}
        emulateTouch={true}
        showStatus={false}
        showThumbs={false}
        centerSlidePercentage={30}
      >
        <div>
          <img className="header-img" src={slider1} alt="Hotel Argentina" />

          <div
            className="title-banner-slider1"
            style={{
              position: "absolute",
              left: "50%",
              top: 0,
              left: 0,
            }}
          >
            <h2>Spread facts, not fear</h2>

            <p>
              New cases of COVID-19 are increasing rapidly at astonishing rates
              globally. Dataset has started to help in processing the data into
              the spread and control of this virus.
            </p>
            <button>READ OUR STORY</button>
          </div>
        </div>
        <div>
          {/* <img className="header-img" src={slider2} alt="Hotel Chile" /> */}
          <div className="header-img">
            <img
              src={slider3}
              alt="Hotel Argentina"
              className="header-slider2"
            />
          </div>
          <div
            className="title-banner-slider2"
            style={{
              position: "absolute",
              left: "50%",
              top: 0,
              left: 0,
            }}
          >
            <h2>A Data Crowdsourcing Platform</h2>
            <span>Struggling with data ground-truth?</span>
            <p>
              Let Dataset launch your data challenge to our network of more than
              7000 workers and receive proposed solutions quickly and
              effectively for all types of data processing services.
            </p>
          </div>
        </div>
      </Carousel>
    </BannerWapper>
  );
};
