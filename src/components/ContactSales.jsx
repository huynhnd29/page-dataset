import React from "react";
import styled from "styled-components";
import contactbackGround from "../image/contactbackGround.png";
const ContactSalesWapper = styled.header`
  margin-top: 4em;
  padding: 3em 10em;
  background-color: #f8f4f4;
  align-items: center !important;
  div {
    display: flex;
    padding: 2em 1em;
    /* box-shadow: 0px 3px #e2e2e2; */
    max-width: 1180px;
    border-radius: 28px;

    .ContactSale-left {
      flex: 5;
      text-align: start;
      padding: 0 3em;
      padding-right: 4em;
      display: flex;
      flex-direction: column;
      background-image: ;
      p {
        margin-top: 5em;
        font-size: 35px;
      }
      a {
        font-size: 20px;
        color: #222831;
      }
    }
    form {
      flex: 5;
      .view {
        display: flex;
        flex-direction: column;
        margin-left: 20px;
        margin-right: 30px;
        background-color: #ffffff;
        padding: 1em ;
        border-radius: 10px;
        filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
        input {
          padding: 1em;
          margin: 0.7em;
          border-radius: 4px;
          outline: none;
          border-color: rgb(224, 224, 224);
          border-width: 0.1px;
          font-size: 16px;
        }
        textarea {
          padding: 1em;
          margin: 0.7em;
          border-radius: 4px;
          outline: none;
          border-color: rgb(224, 224, 224);
          font-size: 16px;
          font-family: Arial, Helvetica, sans-serif;
        }
        button {
          padding: 0.5em;
          margin: 0.7em;
          width: 100px;
          border-radius: 10px;
          outline: none;
          background-color: rgb(0, 0, 0);
          color: #ecf0f1;
        }
        div {
          display: flex;
          align-items: center;
          justify-content: center;
          
        }
      }
    }
  }
`;
export const ContactSales = () => {
  return (
    <ContactSalesWapper id="contact">
      <div
        style={{    
          backgroundImage:`url(${contactbackGround})`,
          boxShadow: "0px 3px #e2e2e2"
        }}
      >
        <div className="ContactSale-left">
          <h1>Contact Sales</h1>
          <p>Struggling with data ground truth?</p>
          <a>
            Let Dataset launch your challenge to our network of more than 7000
            workers and receive proposed solutions quickly and effectively for
            all types of data processing services.
          </a>
        </div>
        <form class="form">
          <div class="view">
            <input type="text" value="" placeholder="Your Name" />
            <input type="text" value="" placeholder="Conpany Name" />
            <input type="text" value="" placeholder="Email Address" />
            <textarea
              type="text"
              value=""
              placeholder="Please explain your request in detail."
              rows="4"
              cols="50"
            ></textarea>
            <div>
              <input name="box" id="box" type="checkbox" />
              <label for="box">I agree to the Privacy Policy</label>
            </div>
            <button>SEND</button>
          </div>
        </form>
      </div>
    </ContactSalesWapper>
  );
};
