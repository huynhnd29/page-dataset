import React, { useState } from "react";
import styled from "styled-components";
import sliderIndicator1 from "../image/sliderIndicator1.png";
import sliderIndicator2 from "../image/sliderIndicator2.png";
import sliderIndicator3 from "../image/sliderIndicator3.png";
import sliderIndicator4 from "../image/sliderIndicator4.png";
import sliderIndicator from "../image/sliderIndicator.png";

import newImg from "../image/new.png";
const NewsWapper = styled.header`
  margin-top: 4em;
  padding: 0 10em;
  background-color: #f8f4f4;
  text-align: start;
  h1 {
    padding-top: 2em;
  }
  span {
    font-size: 25px;
    font-weight: 600;
  }
  div {
    display: flex;
    justify-content: space-between;
    div {
      flex: 5;
    }
    img {
      border-radius: 10px;
      margin-bottom: 4em;
    }
  }
  .news-left {
    margin-top: 2em;
    div {
      display: flex;
      flex-direction: column;
      height: 300px;
      justify-content: space-around;
      div {
        p {
          font-weight: bold;
          cursor: pointer;
        }
        a {
          cursor: pointer;
          margin-left: 1em;
          margin-right: 1em;
          left: 17.43%;
          right: 53.96%;
          top: 52.39%;
          bottom: 45.8%;

          font-family: Inter;
          font-style: normal;
          font-weight: normal;
          font-size: 18px;
          line-height: 22px;

          color: #718096;

          text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        }
      }
    }
    img {
      margin-right: 6em;
      width: unset;
      height: 160px;
    }
  }
`;
export const News = () => {
  const string =
    "New cases of COVID-19 are increasing rapidly at astonishing rates globally. Dataset has started to help in processing the data into the spread and control of this virus.....See more";
  const [num, setNum] = useState(0);
  const setNumBer = (num2) => {
    if (num2 !== num) {
      setNum(num2);
      if (num2 === 1) {
        setImgShow(sliderIndicator1);
      } else if (num2 === 2) {
        setImgShow(sliderIndicator2);
      } else if (num2 === 3) {
        setImgShow(sliderIndicator3);
      } else if (num2 === 4) {
        setImgShow(sliderIndicator4);
      }
    } else {
      setNum(0);
      setImgShow(sliderIndicator);
    }
  };
  const [imgShow, setImgShow] = useState(sliderIndicator);

  return (
    <NewsWapper id="News">
      <h1>News</h1>
      <span>News, events and insights for you</span>
      <div>
        <div className="news-left">
          <img src={imgShow} />
          <div>
            <div onClick={() => setNumBer(1)}>
              <p>Dataset’s 2021 Internship Program</p>
              {num === 1 ? <a>{string}</a> : null}
            </div>
            <div onClick={() => setNumBer(2)}>
              <p>Crowdsourcing vs. Managed Teams</p>
              {num === 2 ? <a>{string}</a> : null}
            </div>
            <div onClick={() => setNumBer(3)}>
              <p>COVID19’S NEWS UPDATE</p>
              {num === 3 ? <a>{string}</a> : null}
            </div>
            <div onClick={() => setNumBer(4)}>
              <p>COVID-19 Situation reports in Vietnam</p>
              {num === 4 ? <a>{string}</a> : null}
            </div>
          </div>
        </div>
        <div>
          <img src={newImg} />
        </div>
      </div>
    </NewsWapper>
  );
};
