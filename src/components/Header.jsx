import React from "react";
import styled from "styled-components";
import logoImg from "../image/logo.png";
import slider1 from "../image/slider1.png";
import vietnam from "../image/vietnam.png";
import unitedStates from "../image/unitedStates.png";
import menuIcon from "../image/menu.png";

import { Link } from "react-scroll";
import i18n, { Language } from "../i18n";
import { useState } from "react/cjs/react.development";
import { useCountUp } from "react-countup";
const HeaderWapper = styled.header`
    top: 0;
    z-index: 10;
    height: 80px;
    right: 0;
    left: 0;
    padding: 0.3em 12em;
    position: fixed;
    background-color: white;
    .right-header-reponsive{
      display: none;
    }
    .pc-view{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    .menu-icon{
      display: none;
    }
    .right_header {
      display: flex;
      flex-direction: row;
      div {
        padding: 0.7em 1em;
      }
      a {
        font-weight: bold;
        cursor: pointer;
      }
      .header_login {
        margin-left: 4em;
        a {
          color: #858585;
          text-decoration: none;
        }
      }
      .header_signup {
        padding: 0.7em 2.5em;
        background-color: black;
        border-radius: 10px;
        margin-left: 2em;
        a {
          color: white;
          text-decoration: none;
        }
      }
    }
    img {
      width: 8em;
      height: 8em;
    }
    button {
      background-color: transparent;
      border: none;
      border: 0;
      margin-left: 3em;
      cursor: pointer;
      img {
        width: 35px;
        height: 35px;
      }
    }
  }
  
  @media only screen and (max-width:400px){
    padding: 0em 0.5em;
    height: auto;
    .right-header-reponsive{
      width: 100%;
      display: flex;
      flex-direction: column;
      div {
        padding: 0.3em 1em;
      }
      a {
        font-weight: bold;
        cursor: pointer;
      }
      button {
      background-color: transparent;
      border: none;
      border: 0;
      cursor: pointer;
      padding: 1em 0em;
      img {
        width: 35px;
        height: 35px;
      }
    }
    }
    .pc-view{
      .menu-icon{
      display: initial;
    }
      .right_header{
        display: none;
      }
      .menu-icon{
        width: 1.8em;
        height: 1.8em;
        img{
          width: 100%;
          height: 100%;
        }
      }
      img {
        width: 5em;
        height: 5em;
      }
    }
   
  }
`;
export const Header = ({ aboutUsFunction }) => {
  const changLangueLandingpage = async () => {
    console.log("change langue", i18n.languages[0]);
    if (i18n.languages[0] == Language.EN) {
      i18n.changeLanguage(Language.VN);
    } else {
      i18n.changeLanguage(Language.EN);
    }
    window.location.reload();
  };
  const [isShow, setIsShow] = useState(false);
  return (
    <HeaderWapper>
      <div className="pc-view">
        <a>
          <img src={logoImg} alt="" />
        </a>
        <div className="right_header">
          <div>
            <Link
              to="banner"
              smooth={true}
              duration={500}
              offset={-100}
              onClick={aboutUsFunction}
            >
              {i18n.t("Header.about_us")}
            </Link>
          </div>
          <div>
            <Link to="Services" smooth={true} duration={500} offset={-200}>
              {i18n.t("Header.service")}
            </Link>
          </div>
          <div>
            <Link to="News" smooth={true} duration={500} offset={-50}>
              {i18n.t("Header.news")}
            </Link>
          </div>
          <div>
            <Link to="Careers" smooth={true} duration={500} offset={-100}>
              {i18n.t("Header.careers")}
            </Link>
          </div>
          <Link
            className="header_signup"
            to="contact"
            smooth={true}
            duration={500}
            offset={-200}
          >
            <a>{i18n.t("Header.contact_sales")}</a>
          </Link>
          <button onClick={changLangueLandingpage}>
            {/* <img
        src={i18n.languages[0] === "vi" ? unitedStates : vietnam}
        width="90"
        height="50"
        alt="submit"
      /> */}
            {i18n.languages[0] === "vi" ? "EN" : "VI"}
          </button>
        </div>
        <div className='menu-icon' onClick={()=>setIsShow(!isShow)}>
          <img src={menuIcon} alt="" />
        </div>

      </div>
      {isShow ? <div className="right-header-reponsive">
        <div>
          <Link
            to="banner"
            smooth={true}
            duration={500}
            offset={-100}
            onClick={aboutUsFunction}
          >
            {i18n.t("Header.about_us")}
          </Link>
        </div>
        <div>
          <Link to="Services" smooth={true} duration={500} offset={-200}>
            {i18n.t("Header.service")}
          </Link>
        </div>
        <div>
          <Link to="News" smooth={true} duration={500} offset={-50}>
            {i18n.t("Header.news")}
          </Link>
        </div>
        <div>
          <Link to="Careers" smooth={true} duration={500} offset={-100}>
            {i18n.t("Header.careers")}
          </Link>
        </div>
        <Link
          className="header_signup"
          to="contact"
          smooth={true}
          duration={500}
          offset={-200}
        >
          <a>{i18n.t("Header.contact_sales")}</a>
        </Link>
        <button onClick={changLangueLandingpage}>
          {i18n.languages[0] === "vi" ? "EN" : "VI"}
        </button>
      </div> : null}
    </HeaderWapper>
  );
};
//ádsa
