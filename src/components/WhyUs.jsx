import React from "react";
import styled from "styled-components";
import service1 from "../image/service1.png";
import service2 from "../image/service2.png";
import service3 from "../image/service3.png";
import service4 from "../image/service4.png";
import CountUp from "react-countup";
import i18n from "../i18n";
import VisibilitySensor from "react-visibility-sensor";
const WhyUsWapper = styled.header`
  display: flex;
  margin-top: 4em;
  padding: 0 10em;
  background-color: #f8f8f8;
  height: 470px;
  div {
    img{
        width: 60px;
        height: 60px;
      }
    flex: 5;
    .whyus-top {
      display: flex;
      margin: 7em 2em;
      height: 60px;
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
  
   
  @media only screen and (max-width:400px){
    display: flex;
    margin-top: 2em;
    padding: 0 0em;
    background-color: #f8f8f8;
    flex-direction: column;
    height: auto;

    div {
      img{
          width: 40px;
          height: 40px;
        }
        .whyus-right {
        padding: 1em;
        margin-top: -2em;
        width: 100vw;
        margin-right: 0em;
        margin-left: 0em;
        border-radius: 0px;
        span {
          margin-top: 1.5em;
          color: white;
          font-size: 20px;
        }
        h2 {
          text-align: start;
          color: white;
          font-size: 25px;
        }
        a {
          text-align: start;
          color: white;
          font-size: 20px;
        }
      }
      .whyus-top {
        display: flex;
        margin: 7em 2em;
        height: 60px;
        div {
          .whyus-service {
            div{
              span {
              font-size: 20px;
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
                  <CountUp start={0} end={500} redraw={true} suffix="+" duration={1.7}>
                    {({ countUpRef, start }) => (
                      <VisibilitySensor onChange={start} delayedCall>
                        <span ref={countUpRef} />
                      </VisibilitySensor>
                    )}
                  </CountUp>
                </div>
                <a>{i18n.t("WhyUs.daily_active_users")}</a>
              </div>
            </div>
            <div>
              <img src={service2} alt="" />
              <span className="whyus-service">
                <div>
                  <CountUp start={0} end={7000} redraw={true} suffix="+" duration={1.7}>
                    {({ countUpRef, start }) => (
                      <VisibilitySensor onChange={start} delayedCall>
                        <span ref={countUpRef} />
                      </VisibilitySensor>
                    )}
                  </CountUp>
                </div>
                <a>{i18n.t("WhyUs.members_crowdsourcing_community")}</a>
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
                  <CountUp start={0} end={11} redraw={true} suffix="+" duration={1.7}>
                    {({ countUpRef, start }) => (
                      <VisibilitySensor onChange={start} delayedCall>
                        <span ref={countUpRef} />
                      </VisibilitySensor>
                    )}
                  </CountUp>
                </div>
                <a>{i18n.t("WhyUs.strategic_partners")}</a>
              </div>
            </div>
            <div>
              <img src={service4} alt="" />
              <div className="whyus-service">
                <div>
                  <CountUp start={0} end={15} redraw={true} suffix="+" duration={1.7}>
                    {({ countUpRef, start }) => (
                      <VisibilitySensor onChange={start} delayedCall>
                        <span ref={countUpRef} />
                      </VisibilitySensor>
                    )}
                  </CountUp>
                </div>
                <a>{i18n.t("WhyUs.loyal_clients")}</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="whyus-right">
          <span>{i18n.t("WhyUs.why_dataset")} ----------</span>
          <h2>{i18n.t("WhyUs.access_relatively")}</h2>
          <a>{i18n.t("WhyUs.qualified_workers")} </a>
        </div>
      </div>
    </WhyUsWapper>
  );
};
