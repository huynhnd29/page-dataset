import React from "react";
import styled from "styled-components";
import service1 from "../image/service1.png";
import service2 from "../image/service2.png";
import service3 from "../image/service3.png";
import service4 from "../image/service4.png";
import CountUp from "react-countup";
const WhyUsWapper = styled.header`
  display: flex;
  margin-top: 4em;
  padding: 0 10em;
  background-color: #f8f8f8;
  height: 470px;
  div {
    flex: 5;
    .whyus-top {
      display: flex;
      margin: 7em 2em;
      div {
        display: flex;
        .whyus-service {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: space-between;
          margin-left: 1em;
          div{
            span {
            font-size: 30px;
            font-weight: 600;
            }
          }
          a {
            text-align: start;
            color: #9a9a9a;
          }
         }
        }
      }
    }
    .whyus-right {
      background-color: black;
      height: 400px;
      margin-top: 1.5em;
      margin-right: 2em;
      margin-left: 2em;
      border-radius: 10px;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      padding-top: 2em;
      padding-left: 2em;
      padding-right: 2em;
      span {
        margin-top: 1.5em;
        color: white;
        font-size: 20px;
      }
      h2 {
        text-align: start;
        color: white;
        font-size: 35px;
      }
      a {
        text-align: start;
        color: white;
        font-size: 25px;
      }
    }
  }
`;
export const WhyUs = () => {
  return (
    <WhyUsWapper id="WhyUs">
      <div>
        <div className="whyus-top">
          <div>
            <div>
              <img src={service1} alt="" />
              <div className="whyus-service">
              <div>
                  <CountUp start={0} end={500} suffix="+" duration={2.0} />
                </div>
                <a>Daily Active Users</a>
              </div>
            </div>
            <div>
              <img src={service2} alt="" />
              <span className="whyus-service">
                <div>
                  <CountUp start={0} end={700} suffix="+" duration={2.0} />
                </div>
                <a>Members in our Crowdsourcing Community</a>
              </span>
            </div>
          </div>
        </div>
        {/*-------------------- --------------------------- */}
        <div className="whyus-top">
          <div>
            <div>
              <img src={service3} alt="" />
              <div className="whyus-service">
                <div>
                  <CountUp start={0} end={11} suffix="+" duration={2.0} />
                </div>
                <a>Strategic partners</a>
              </div>
            </div>
            <div>
              <img src={service4} alt="" />
              <div className="whyus-service">
                <div>
                  <CountUp start={0} end={15} suffix="+" duration={2.0} />
                </div>
                <a>Loyal Clients</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="whyus-right">
          <span>Why Dataset ----------</span>
          <h2>Access to a relatively inexpensive and scalable workforce</h2>
          <a>
            Our 7000 + qualified workers are ready to collect the data you need.{" "}
          </a>
        </div>
      </div>
    </WhyUsWapper>
  );
};