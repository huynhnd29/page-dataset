import React from "react";
import styled from "styled-components";
import partner1 from "../image/partner1.png";
import partner2 from "../image/partner2.png";
import partner3 from "../image/partner3.png";
import partner4 from "../image/partner4.png";
import partner5 from "../image/unicef.png";
import partner6 from "../image/ORM.png";
import partner7 from "../image/Infore.png";
import i18n from "../i18n";
const TrustByWapper = styled.header`
  margin-top: 4em;
  padding: 0 10em;
  h1 {
    color: #6e6a6b;
  }
  img {
    width: unset;
    height: unset;
  }
  .trusted-top {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin-top: 3em;
  }
  @media only screen and (max-width:400px){
    margin-top: 2em;
    padding: 0 0em;
    img {
    width: 100%;
    height: unset;
  }
    .trusted-top {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      margin-top: 1em;
      align-items: center;
      div {
        margin-top: 2em;
        width: 150px;
        height: auto;
      }
    }
  }

`;
export const TrustedBby = () => {
  return (
    <TrustByWapper>
      <h1>{i18n.t("TrustedBy.trusted_by")}</h1>
      <div className="trusted-top">
        <div>
          <img src={partner1} alt="" />
        </div>
        <div>
          <img src={partner2} alt="" />
        </div>
        <div>
          <img src={partner3} alt="" />
        </div>
        <div>
          <img src={partner4} alt="" />
        </div>
      </div>
      <div className="trusted-top">
        <div>
          <img src={partner6} alt="" />
        </div>
        <div>
          <img src={partner5} alt="" />
        </div>
        <div>
          <img src={partner7} alt="" />
        </div>
      </div>
    </TrustByWapper>
  );
};
