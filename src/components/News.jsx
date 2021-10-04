import React, { useState } from "react";
import styled from "styled-components";
import sliderIndicator1 from "../image/sliderIndicator1.png";
import sliderIndicator2 from "../image/sliderIndicator2.png";
import sliderIndicator3 from "../image/sliderIndicator3.png";
import sliderIndicator4 from "../image/sliderIndicator4.png";
import sliderIndicator from "../image/sliderIndicator.png";

import newImg from "../image/new.png";
import newImg1 from "../image/new1.png";
import newImg2 from "../image/new2.png";
import newImg3 from "../image/new3.png";
import newImg4 from "../image/new4.png";
import i18n from "../i18n";

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
      width: 90%;
      height: 80%;
      /* max-height: 600px; */
    }
  }
  .news-left {
    margin-top: 2em;
    margin-right: 3em;

    div {
      display: flex;
      flex-direction: column;
      height: 400px;
      justify-content: space-around;
      div {
        p {
          font-weight: bold;
          font-size: 23px;
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
          text-decoration: none;
          font-family: Inter;
          font-style: normal;
          font-weight: normal;
          font-size: 18px;
          line-height: 22px;

          color: #718096;
        }
      }
    }
    img {
      margin-right: 6em;
      width: unset;
      height: 160px;
    }
  }
  @media only screen and (max-width:400px){
    margin-top: 2em;
    padding: 0 1em;
    height: auto;
    h1 {
    padding-top: 2em;
    }
    span {
      font-size: 20px;
      font-weight: 600;
    }
    div {
      display: flex;
      justify-content: space-between;
      
      img {
        border-radius: 10px;
        margin-bottom: 4em;
        width: 0%;
        height: 0%;
        display: block;
      }
    }
    .news-left {
    margin-top: 2em;
    margin-right: 3em;
    height: auto;
    div {
      display: flex;
      flex-direction: column;
      height: auto;
      justify-content: space-around;
      div {
        p {
          font-weight: bold;
          font-size: 20px;
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
          text-decoration: none;
          font-family: Inter;
          font-style: normal;
          font-weight: normal;
          font-size: 18px;
          line-height: 22px;

          color: #718096;
        }
      }
    }
    img {
      margin-right: 2em;

      width: unset;
      height: 160px;
    }
  }
  }
`;
export const News = () => {
  const string = i18n.t("News.dataset_internship_program_description");

  const string2 = i18n.t("News.what_data_labeling_description");
  const string3 = i18n.t("News.COVID19_innovation_challenges_description");
  const string4 = i18n.t("News.COVID19_news_update_description");
  const [num, setNum] = useState(0);
  const [newShow, setNewShow] = useState(newImg4);
  const setNumBer = (num2) => {
    if (num2 !== num) {
      setNum(num2);
      if (num2 === 1) {
        setImgShow(sliderIndicator1);
        setNewShow(newImg1);
      } else if (num2 === 2) {
        setImgShow(sliderIndicator2);
        setNewShow(newImg2);
      } else if (num2 === 3) {
        setImgShow(sliderIndicator3);
        setNewShow(newImg3);
      } else if (num2 === 4) {
        setImgShow(sliderIndicator4);
        setNewShow(newImg4);
      }
    } else {
      setNum(0);
      setImgShow(sliderIndicator);
    }
  };
  const [imgShow, setImgShow] = useState(sliderIndicator);

  return (
    <NewsWapper id="News">
      <h1>{i18n.t("News.news")}</h1>
      <span>{i18n.t("News.news_events_insights")}</span>
      <div>
        <div className="news-left">
          <img src={imgShow} />
          <div>
            <div>
              <p onClick={() => setNumBer(1)}>
                {i18n.t("News.dataset_internship_program")}
              </p>
              {num === 1 ? (
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.facebook.com/dataset.vn/posts/441735040596717/"
                >
                  {string}
                </a>
              ) : null}
            </div>
            <div>
              <p onClick={() => setNumBer(2)}>
                {i18n.t("News.what_data_labeling")}
              </p>
              {num === 2 ? (
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.facebook.com/dataset.vn/posts/410424937061061/"
                >
                  {string2}
                </a>
              ) : null}
            </div>
            <div>
              <p onClick={() => setNumBer(3)}>
                {i18n.t("News.COVID19_innovation_challenges")}
              </p>
              {num === 3 ? (
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.facebook.com/dataset.vn/posts/442449677191920/"
                >
                  {string3}
                </a>
              ) : null}
            </div>
            <div>
              <p onClick={() => setNumBer(4)}>
                {i18n.t("News.COVID19_news_update")}
              </p>
              {num === 4 ? (
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://ncov.moh.gov.vn/"
                >
                  {string4}
                </a>
              ) : null}
            </div>
          </div>
        </div>
        <div>
          <img src={newShow} />
        </div>
      </div>
    </NewsWapper>
  );
};
