import React from "react";
import styled from "styled-components";
import partner1 from "../image/partner1.png";
import partner2 from "../image/partner2.png";
import partner3 from "../image/partner3.png";
import partner4 from "../image/partner4.png";
import partner5 from "../image/unicef.png";
import partner6 from "../image/ORM.png";
import partner7 from "../image/Infore.png";
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
`;
export const TrustedBby = () => {
  return (
    <TrustByWapper>
      <h1>Trusted by</h1>
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
