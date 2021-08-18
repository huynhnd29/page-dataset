import React from "react";
import styled from "styled-components";
import logoImg from "../image/logo.jpg";
import falink from "../image/falink.png";
import lnIcon from "../image/lnIcon.png";
import fbIcon from "../image/fbIcon.png";

const FooterComponentWapper = styled.header`
  margin-top: 4em;
  text-align: start;
  padding: 0em 10em;
  color: #6a6a6a;
  margin-bottom: 4em;
  img {
    max-width: 180px;
  }
  p {
    margin-left: 12px;
    margin-bottom: 2em;
  }
  .icon{
    margin-right: 1em;
  }
  .container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    .lfooter {
      width: 75%;
    }
    .rfooter {
      margin-left: -6em;
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 30px;
      ul {
        list-style-type: none;
        padding-top: 30px;
        li:first-child {
          margin-bottom: 2em;
        }
        li {
          margin-bottom: 10px;
        }
      }
    }
  }
`;
export const FooterComponent = () => {
  return (
    <FooterComponentWapper>
      <footer class="footer">
        <div class="container">
          <div class="lfooter">
            <img src={logoImg} alt="" />
            <p>
              Let Dataset launch your challenge to our network of more than 7000
              workers and receive proposed solutions quickly and effectively for
              all types of data processing services.
            </p>
            <div class="ficon">
              <a className="icon" href="https://www.facebook.com/dataset.vn">
                <img src={fbIcon} alt="" />
              </a>
              <a href="https://www.linkedin.com/company/dataset-vn/about/">
                <img src={lnIcon} alt="" />
              </a>
            </div>
          </div>
          <div class="rfooter">
            <ul>
              <li>Company</li>
              <li>
                <a>About us</a>
              </li>
              <li>
                <a>Services</a>
              </li>
              <li>
                <a>News</a>
              </li>
              <li>
                <a>Careers</a>
              </li>
            </ul>
            <ul>
              <li>Support</li>
              <li>
                <a>FAQs</a>
              </li>
              <li>
                <a>Privacy Policy</a>
              </li>
              <li>
                <a>Help</a>
              </li>
            </ul>
            <ul>
              <li>Contact Us</li>
              <li>
                <a>E. info@dataset.vn</a>
              </li>
              <li>
                <a>
                  A. Floor 3, Golden Land Bulding, 275 Nguyen Trai, Thanh Xuan,
                  Hanoi
                </a>
              </li>
              <li>
                <a>P. (+84) 0984420826</a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </FooterComponentWapper>
  );
};
