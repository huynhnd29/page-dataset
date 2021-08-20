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
      width:90%;
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
    "Vào thứ 7 vừa rồi, DATASET chào đón 22 thực tập sinh đầu tiên của năm đến từ trường Đại học Thủy Lợi. Các bạn đều là những bạn trẻ rất năng động, vui tính và ham học hỏi.....See more";
  const string2 =
    'Một trong những câu hỏi thường gặp của nhân sự Dataset khi giới thiệu với mọi người xung quanh về công việc đang làm tại công ty chính là "Dán Nhãn Dữ Liệu Là Làm Gì". Nhưng kể từ hôm nay mỗi khi được hỏi, thay vì đưa ra những câu trả lời dài đầy tính chuyên môn, các bạn có thể đơn giản tag ngay người bạn của mình vào post này nhé!....See more';
  const string3 = 'Tháng 6/2021, số ca nhiễm COVID-19 mới tại Việt Nam đạt mức kỷ lục 400-500 ca mỗi ngày, và có nguy cơ bùng phát diện rộng ở một số tỉnh thành. Cả nước đang gồng hết sức để chống dịch, và một trong những hình ảnh thường thấy nhất là các y bác sĩ mặc đồ bảo hộ kín mít, giữa trời nắng 40 độ, để lấy mẫu xét nghiệm cho hàng ngàn người. Liệu có cách nào để thực hiện việc này hiệu quả hơn?....See more'
  const string4 ='In Viet Nam, from 3 January 2020 to 6:47pm CEST, 13 August 2021, there have been 246.568 confirmed cases of COVID-19 with 4.813 deaths, reported to WHO. As of 5 August 2021, a total of 8.061.116 vaccine doses have been administered.....See more'
  const [num, setNum] = useState(0);
  const [newShow,setNewShow]=useState(newImg4)
  const setNumBer = (num2) => {
    if (num2 !== num) {
      setNum(num2);
      if (num2 === 1) {
        setImgShow(sliderIndicator1);
        setNewShow(newImg1)
      } else if (num2 === 2) {
        setImgShow(sliderIndicator2);
        setNewShow(newImg2)
      } else if (num2 === 3) {
        setImgShow(sliderIndicator3);
        setNewShow(newImg3)
      } else if (num2 === 4) {
        setImgShow(sliderIndicator4);
        setNewShow(newImg4)
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
              <p>What is data labeling?</p>
              {num === 2 ? <a>{string2}</a> : null}
            </div>
            <div onClick={() => setNumBer(3)}>
              <p>COVID19 Innovation Challenges</p>
              {num === 3 ? <a>{string3}</a> : null}
            </div>
            <div onClick={() => setNumBer(4)}>
              <p>COVID19’S NEWS UPDATE</p>
              {num === 4 ? <a>{string4}</a> : null}
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
