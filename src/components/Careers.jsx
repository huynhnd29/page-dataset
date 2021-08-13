import React from "react";
import styled from "styled-components";
import career1 from "../image/career1.png";
import career2 from "../image/career2.png";
import career3 from "../image/career3.png";
import career4 from "../image/career4.png";
import career5 from "../image/career5.png";

const CareersWapper = styled.header`
  margin-top: 4em;
  padding: 0 10em;
  background-color: #f8f8f8;
  .careers-top {
    display: flex;
    .careers-top-left {
      margin: 1em 1em;
      border-radius: 10px;
      display: grid;
     grid-template-columns: repeat(2, 1fr);
     gap: 30px;
     margin-right:3em;
     cursor: pointer;
      img {
        width: 350px;
        height: 320px;
        border-radius: 10px;
      }
      div {
        padding: 0.5em 0.5em;
        text-align: start;
        h3 {
          font-size: 32px;
        }
        a {
          font-size: 16px;
          line-height: 26px;
          padding-right: 1em;
          color: #9a9a9a;
        }
      }
    }
    .careers-top-right {
      height: 320px;
      border-radius: 10px;
      margin: 1em 1em;
      cursor: pointer;
      img {
        border-radius: 10px;
      }
      div {
        display: flex;
        flex-direction: column;
        text-align: start;
        padding: 1em 1.5em;
        a {
          font-size: 22px;
        }
      }
    }
    .careers-top-right:hover {
      box-shadow: 2px 2px 4px #ecf0f1;
      background-color: white;
    }
    .careers-top-left:hover  {
      box-shadow: 2px 2px 4px #ecf0f1;
      background-color: white;
    }
  }
  .careers-bottom {
    display: grid;
     grid-template-columns: repeat(3, 1fr);
     gap: 30px;
    }
    .careers-bottom-right {
      cursor: pointer;
      height: 320px;
      border-radius: 10px;
      margin: 1em 1em;
      img {
        border-radius: 10px;
      }
      div {
        display: flex;
        flex-direction: column;
        text-align: start;
        padding: 1em 1.5em;
        a {
          font-size: 22px;
        }
      }
    }
    .careers-bottom-right:hover {
      background-color: white;
      box-shadow: 2px 2px 4px #ecf0f1;
        
    }
  }
`;
export const Careers = () => {
  return (
    <CareersWapper id='Careers'>
      <h1>Careers</h1>
      <div className="careers-top">
        <div className="careers-top-left">
          <img src={career1} alt="" />
          <div>
            <h3>Dataset’s 2021 Summer Internship Program</h3>
            <a>
              Dataset is seeking highly qualified people for the position of
              AI/ML Engineer and AI/ML Researcher. The team pursues research &
              development in the areas... See more
            </a>
          </div>
        </div>
        <div className="careers-top-right">
          <img src={career2} alt="" />
          <div>
            <a>Department of Business</a>
            <a>Development and Partnerships</a>
          </div>
        </div>
      </div>

      <div className="careers-bottom">
        <div className="careers-bottom-right">
          <img src={career3} alt="" />
          <div>
            <a>Department of Product</a>
            <a>Development</a>
          </div>
        </div>
        <div className="careers-bottom-right">
          <img src={career4} alt="" />
          <div>
            <a>Department of Crowdsourcing</a>
          </div>
        </div>
        <div className="careers-bottom-right">
          <img src={career5} alt="" />
          <div style={{ alignItems: "center" }}>
            <a>Internship</a>
          </div>
        </div>
      </div>
    </CareersWapper>
  );
};