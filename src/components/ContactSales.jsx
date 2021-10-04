import React from "react";
import { useState } from "react/cjs/react.development";
import styled from "styled-components";
import i18n from "../i18n";
import contactbackGround from "../image/contactbackGround.png";
const ContactSalesWapper = styled.header`
  margin-top: 4em;
  padding: 3em 10em;
  background-color: #f8f4f4;
  display: flex;
  justify-content: center !important;
  height: 600px;
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
        padding: 1em;
        border-radius: 10px;
        box-shadow: 2px 2px 4px 4px #d8e0e2;
        input {
          padding: 1em;
          margin: 0.7em;
          border-radius: 4px;
          outline: none;
          border-color: rgb(224, 224, 224);
          border-width: 0.1px;
          font-size: 16px;
          border: 1px solid #ccc;
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
          margin-top: 5em;
        }
        div {
          display: flex;
          align-items: center;
          justify-content: center;
        }
        span {
          color: #09bb00;
          text-align: left;
          margin-left: 1em;
          margin-top: 1em;
        }
      }
    }
  }
  @media only screen and (max-width:400px){
    margin-top: 2em;
    padding: 2em 0em;
    div {
      padding: 2em 1em;
      max-width: 100vw;
      border-radius: 28px;
      .ContactSale-left {
        display: none;
      }
      form {
        width: 100vw !important;
        .view {
          width: 100% !important;
          margin-left: 0px;
          padding: 1em 0em;
          border-radius: 0px;
          box-shadow: 1px 1px 2px 2px #d8e0e2;
          input {
            width:85vw !important;
          }
          textarea {
            width:85vw !important;
          }
        }
      }
    }
  }
`;
export const ContactSales = () => {
  const [name, setName] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [emailAddress, setEmailAdress] = useState("");
  const [request, setRequest] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isShow, setIsShow] = useState(false);
  const submitContactSales = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(
        "https://getform.io/f/ccf44e3a-5798-4658-bc4b-8cc6a3399167",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: name,
            companyName: companyName,
            emailAddress: emailAddress,
            request: request,
          }),
        }
      );
      console.log(response);
      if (response.status === 200) {
        setIsShow(true);
        setTimeout(() => {
          setIsShow(false);
        }, 5000);
        setName("");
        setCompanyName("");
        setEmailAdress("");
        setRequest("");
      }
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
    }
  };
  return (
    <ContactSalesWapper id="contact">
      <div
        style={{
          backgroundImage: `url(${contactbackGround})`,
          boxShadow: "0px 3px #e2e2e2",
        }}
      >
        <div className="ContactSale-left">
          <h1>{i18n.t("ContactSales.contact_sales")}</h1>
          <p>{i18n.t("ContactSales.struggling_data_ground_truth")}</p>
          <a>{i18n.t("ContactSales.let_dataset")}</a>
        </div>
        <form
          class="form"
          action="https://getform.io/f/ccf44e3a-5798-4658-bc4b-8cc6a3399167"
          method="POST"
        >
          <div class="view">
            <input
              type="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder={i18n.t("ContactSales.your_name")}
              disabled={isLoading}
            />
            <input
              type="text"
              name="companyName"
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
              placeholder={i18n.t("ContactSales.company_name")}
              disabled={isLoading}
            />
            <input
              type="text"
              name="emailAddress"
              value={emailAddress}
              onChange={(e) => setEmailAdress(e.target.value)}
              placeholder={i18n.t("ContactSales.email_address")}
              disabled={isLoading}
            />
            <textarea
              type="text"
              name="request"
              value={request}
              onChange={(e) => setRequest(e.target.value)}
              placeholder={i18n.t("ContactSales.explain_your_request")}
              rows="4"
              cols="50"
              disabled={isLoading}
            ></textarea>
            {isShow ? <span>{i18n.t("ContactSales.status")}</span> : null}

            <button
              onClick={submitContactSales}
              type="button"
              disabled={isLoading}
            >
              {i18n.t("ContactSales.send")}
            </button>
          </div>
        </form>
      </div>
    </ContactSalesWapper>
  );
};
