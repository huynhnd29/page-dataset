import React from "react";
import styled from "styled-components";
import logoImg from "../image/logo.png";
import slider1 from "../image/slider1.png";
import { Link } from "react-scroll";
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
export const Header = () => {
  return (
    <HeaderWapper>
      <a href="">
        <img src={logoImg} alt="" />
      </a>
      <div className="right_header">
        <div>
          <Link to="WhyUs" smooth={true} duration={500} offset={-100} >
            About Us
          </Link>
        </div>
        <div>
          <Link to="Services" smooth={true} duration={500} offset={-200}>
            Services
          </Link>
        </div>
        <div>
          <Link to="News" smooth={true} duration={500} offset={-50}>
            News
          </Link>
        </div>
        <div>
          <Link to="Careers" smooth={true} duration={500} offset={-100}>
            Careers
          </Link>
        </div>
        <Link className="header_signup" to="contact" smooth={true} duration={500} offset={-200}>
          <a>Contact Sales</a>
        </Link>
      </div>
    </HeaderWapper>
  );
};
//ádsa