import React from "react";
import styled from "styled-components";
import i18n from "../i18n";
import serviecNew1 from "../image/serviecNew1.png";
import serviecNew2 from "../image/serviecNew2.png";
import serviecNew3 from "../image/serviecNew3.png";
const ServiceWapper = styled.header`
  margin-top: 480px;
  padding: 0 10em;
  .body-services {
    width: 100%;
    display: flex;
    justify-content: space-between;
    div {
      display: flex;
      flex-direction: column;
      width: 500px;
      margin: 0 1em;
      padding-bottom: 1em;
      box-shadow: 4px 4px 8px 8px #d8e0e2;
      border-radius: 10px;
      img {
        border-radius: 10px;
        width: 100%;
        height: auto;
      }
      a {
        text-align: start;
        color: #718096;
        padding: 0 1em;
      }
    }
  }
`;
export const Serveces = () => {
  return (
    <ServiceWapper id="Services">
      <h1>Services</h1>
      <div className="body-services">
        <div>
          <img src={serviecNew1} alt="Hotel Chile" />
          <h3>Data Collection & Creation</h3>
          <a>{i18n.t("Service.we_provide_several")}</a>
        </div>
        <div>
          <img src={serviecNew3} alt="Hotel Chile" />
          <h3>Data Labeling</h3>
          <a>
            Label objects in images and videos for Computer Vision, Natural
            Language Processing, Audio/Voice Processing, Time Series, Video
            Processing and more.
          </a>
        </div>
        <div>
          <img src={serviecNew2} alt="Hotel Chile" />
          <h3>Content Moderation</h3>
          <a>
            Make sure that contents are placed in the right category, are free
            from scams, don't include any illegal items, and much more.
          </a>
        </div>
      </div>
    </ServiceWapper>
  );
};
