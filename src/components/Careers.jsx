import React from "react";
import styled from "styled-components";
import i18n from "../i18n";
import career1 from "../image/career1.png";
import career2 from "../image/career2.png";
import career3 from "../image/career3.png";
import career4 from "../image/career4.png";
import career5 from "../image/career5.png";

const CareersWapper = styled.header`
  margin-top: 4em;
  padding: 0 10em;
  /* background-color: #f8f8f8; */
  h1{
    padding-top: 2em;
  }
  .careers-top {
    display: flex;
    justify-content:space-between;
    .careers-top-left {
      flex: 6;
      margin: 1em 1em;
      border-radius: 10px;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 30px;
      align-items: center;
      padding-right: 3em;
      cursor: pointer;
      img {
        width: 100%;
        height: auto;
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
      flex: 3;
      border-radius: 10px;
      margin-top: 1em;
      margin-left: 1em;
      margin-bottom: 1em;
      cursor: pointer;
      margin-right: 1em;
      img {
        border-radius: 10px;
        width: 100%;
        height: auto;
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
      box-shadow: 3px 3px 8px 8px #ecf0f1;
      background-color: white;
    }
    .careers-top-left:hover  {
      box-shadow: 3px 3px 8px 8px #ecf0f1;
      background-color: white;
    }
  }
  .careers-bottom {
    display: flex;
    justify-content:space-between;
    .careers-bottom-right {
      flex: 3;
      cursor: pointer;
      /* height: 320px; */
      justify-content: center;
      border-radius: 10px;
      margin: 1em 1em;
      img {
        border-radius: 10px;
        width: 100%;
        height: auto;
      }
      div {
        display: flex;
        flex-direction: column;
        /* text-align: start; */
        padding: 1em 1.5em;
        a {
          font-size: 22px;
        }
      }
    }
    .careers-bottom-right:hover {
      background-color: white;
      box-shadow: 3px 3px 8px 8px #ecf0f1;
    }
  }
  @media only screen and (max-width:400px){
    margin-top: -2em;
    padding: 0 0em;
    .careers-top {
      display: flex;
      flex-direction: column;
      .careers-top-left {
        display: flex;
        flex-direction: column;
        margin: 0em 0em;
        border-radius: 0px;
        align-items: center;
        padding-right: 0em;
        cursor: pointer;
        img {
          border-radius: 0px;
        }
        div {
          padding: 0.5em 0.5em;
          margin-top: -2em;
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
        width: 100%;
        border-radius: 0px;
        margin-top: 1em;
        margin-left: 0em;
        margin-bottom: 1em;
        cursor: pointer;
        img {
          border-radius: 0px;
        }
        div {
          padding: 0.5em 0.5em;
        }
      }
      .careers-top-right:hover {
        box-shadow: 3px 3px 8px 8px #ecf0f1;
        background-color: white;
      }
      .careers-top-left:hover  {
        box-shadow: 3px 3px 8px 8px #ecf0f1;
        background-color: white;
      }
    }
    
    .careers-bottom {
      display: flex;
      flex-direction: column;
      .careers-bottom-right {
        border-radius: 0px;
        margin: 0.5em 0em;
        img {
          border-radius: 0px;
        }
        div {
          display: flex;
          flex-direction: column;
          padding: 1em 1.5em;
          a {
            font-size: 22px;
          }
        }
      }
      .careers-bottom-right:hover {
        background-color: white;
        box-shadow: 3px 3px 8px 8px #ecf0f1;
      }
    }
  }
`;
export const Careers = () => {
  return (
    <CareersWapper id="Careers">
      <h1>{i18n.t("Careers.careers")}</h1>
      <div className="careers-top">
        <div className="careers-top-left">
          <img src={career1} alt="" />
          <div>
            <h3>{i18n.t("Careers.dataset_summer_internship_program")}</h3>
            <a>
            {i18n.t("Careers.dataset_seeking")}
            </a>
          </div>
        </div>
        <div className="careers-top-right">
          <img src={career2} alt="" />
          <div>
            <a>{i18n.t("Careers.department_business")}</a>
            <a>{i18n.t("Careers.development_partnerships")}</a>
          </div>
        </div>
      </div>

      <div className="careers-bottom">
        <div className="careers-bottom-right">
          <img src={career3} alt="" />
          <div>
            <a>{i18n.t("Careers.department_product")}</a>
          </div>
        </div>
        <div className="careers-bottom-right">
          <img src={career4} alt="" />
          <div>
            <a>{i18n.t("Careers.department_crowdsourcing")}</a>
          </div>
        </div>
        <div className="careers-bottom-right">
          <img src={career5} alt="" />
          <div style={{ alignItems: "center" }}>
            <a>{i18n.t("Careers.internship")}</a>
          </div>
        </div>
      </div>
    </CareersWapper>
  );
};
