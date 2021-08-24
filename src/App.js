import logo from "./logo.svg";
import "./App.css";
import serviecNew1 from "./image/serviecNew1.png";
import serviecNew2 from "./image/serviecNew2.png";
import serviecNew3 from "./image/serviecNew3.png";

import service1 from "./image/service1.png";
import service2 from "./image/service2.png";
import service3 from "./image/service3.png";
import service4 from "./image/service4.png";

import newImg from "./image/new.png";
import career1 from "./image/career1.png";
import career2 from "./image/career2.png";
import career3 from "./image/career3.png";
import career4 from "./image/career4.png";
import career5 from "./image/career5.png";
import logoImg from "./image/logo.jpg";
import { Header } from "./components/Header";
import { Banner } from "./components/Banner";
import { Serveces } from "./components/Serveces";
import { WhyUs } from "./components/WhyUs";
import { TrustedBby } from "./components/TrustedBby";
import { News } from "./components/News";
import { Careers } from "./components/Careers";
import { ContactSales } from "./components/ContactSales";
import { FooterComponent } from "./components/FooterComponent";
import { useRef, useState } from "react";
import styled from "styled-components";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import slider1 from "./image/slider1.png";
import slider2 from "./image/slider2.png";
import slider3 from "./image/slider3.png";
import { Carousel } from "react-responsive-carousel";
import i18n from "./i18n";

const BannerWapper = styled.header`
  background-image: black;
  margin-top: 85px;
  .header-img {
    height: 443px;
    width: 100%;
    background-color: #000;
    .header-slider2 {
      width: 580px;
      height: 310px;
      margin-top: 3em;
      margin-left: 50vw !important;
      margin-right: 1em;
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
  button {
    margin-top: 500px;
  }
`;

function App() {
  const [index, setIndex] = useState(0);
  const ref = useRef();
  const aboutUsFunction = () => {
    if (index !== 1) {
      ref.current.onClickNext();
    }
  };
  function handleChange(selectedIndex) {
    setIndex(selectedIndex);
  }
  return (
    <div className="App">
      <Header aboutUsFunction={aboutUsFunction} />
      <BannerWapper id="banner">
        <Carousel
          ref={ref}
          className="header-carousel"
          autoPlay={true}
          infiniteLoop={true}
          interval={5000}
          emulateTouch={true}
          showStatus={false}
          showThumbs={false}
          centerSlidePercentage={30}
          onChange={handleChange}
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
              <h2>{i18n.t("Banner.Spread_facts_not_fear")}</h2>

              <p>
              {i18n.t("Banner.Spread_facts_not_fear_description")}
              </p>
              <button>{i18n.t("Banner.read_our_story")}</button>
            </div>
          </div>
          <div>
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
              <h2>{i18n.t("Banner.crowdsourcing_platform")}</h2>
              <span>Struggling with data ground-truth?</span>
              <p>
              {i18n.t("Banner.let_dataset_launch")}
              </p>
            </div>
          </div>
        </Carousel>
      </BannerWapper>
      <Serveces />
      <WhyUs />
      <TrustedBby />
      <News />
      <Careers />
      <ContactSales />
      <FooterComponent />
    </div>
  );
}

export default App;
