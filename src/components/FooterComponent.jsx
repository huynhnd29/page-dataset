import React from "react";
import styled from "styled-components";
import logoImg from "../image/logo.jpg";

const FooterComponentWapper = styled.header`
  margin-top: 4em;
  text-align: start;
  padding: 0em 10em;
  color: #6A6A6A;
  img {
    max-width: 180px;
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
        li:first-child{
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
              We have brought organizations closer to our stakeholders, laying
              the groundwork for new ways of collaborating and creating value
              together like never before.
            </p>
            <div class="ficon">
              <a href="https://www.facebook.com/dataset.vn">
                <i class="fab fa-facebook-f"></i>
              </a>
              <a href="https://www.facebook.com/dataset.vn">
                <i class="fab fa-linkedin"></i>{" "}
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
                <a >Products & Services</a>
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
                  A. Floor 3, Golden Land Bulding,
                  275 Nguyen Trai, Thanh Xuan, Hanoi
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
