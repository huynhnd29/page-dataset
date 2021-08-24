import React from "react";
import styled from "styled-components";
import logoImg from "../image/logo.png";
import slider1 from "../image/slider1.png";
import { Link } from "react-scroll";
import i18n from "../i18n";
const HeaderWapper = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  top: 0;
  z-index: 10;
  height: 80px;
  right: 0;
  left: 0;
  align-items: center;
  padding: 0.3em 12em;
  position: fixed;
  background-color: white;
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
      padding: 0.7em 1em;
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
`;
export const Header = ({ aboutUsFunction }) => {
  return (
    <HeaderWapper>
      <a>
        <img src={logoImg} alt="" />
      </a>
      <div className="right_header">
        <button
          onClick={() => {
            console.log("change langue", i18n.languages[0]);
            if (i18n.languages[0] == "en") {
              i18n.changeLanguage("vi");
            }else{
              i18n.changeLanguage("en");
            }
          }}
        >
          change langue
        </button>
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
      </div>
    </HeaderWapper>
  );
};
//ádsa
