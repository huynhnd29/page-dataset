import React from "react";
import styled from "styled-components";
import logoImg from "../image/logo.jpg";
import falink from "../image/falink.png";
import lnIcon from "../image/lnIcon.png";
import fbIcon from "../image/fbIcon.png";
import i18n from "../i18n";

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
  .icon {
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
            <p>{i18n.t("Footer.let_dataset_launch")}</p>
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
              <li>{i18n.t("Footer.Company")}</li>
              <li>
                <a>{i18n.t("Footer.About_us")}</a>
              </li>
              <li>
                <a>{i18n.t("Footer.Services")}</a>
              </li>
              <li>
                <a>{i18n.t("Footer.News")}</a>
              </li>
              <li>
                <a>{i18n.t("Footer.Careers")}</a>
              </li>
            </ul>
            <ul>
              <li>{i18n.t("Footer.Support")}</li>
              <li>
                <a>{i18n.t("Footer.FAQs")}</a>
              </li>
              <li>
                <a>{i18n.t("Footer.Privacy_Policy")}</a>
              </li>
              <li>
                <a>{i18n.t("Footer.Help")}</a>
              </li>
            </ul>
            <ul>
              <li>{i18n.t("Footer.Contact_Us")}</li>
              <li>
                <a>E. info@dataset.vn</a>
              </li>
              <li>
                <a>
                {i18n.t("Footer.Adress")}
                </a>
              </li>
              <li>
                <a>P. (+84) 98 442 0826</a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </FooterComponentWapper>
  );
};
