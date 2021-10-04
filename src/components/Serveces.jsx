import React from "react";
import styled from "styled-components";
import i18n from "../i18n";
import serviecNew1 from "../image/serviecNew1.png";
import serviecNew2 from "../image/serviecNew2.png";
import serviecNew3 from "../image/serviecNew3.png";
const ServiceWapper = styled.header`
  margin-top: 480px;
  padding: 0 10em;
  .body-services {
    width: 100%;
    display: flex;
    justify-content: space-between;
    div {
      display: flex;
      flex-direction: column;
      width: 500px;
      margin: 0 1em;
      padding-bottom: 1em;
      box-shadow: 2px 2px 4px 4px #d8e0e2;
      border-radius: 10px;
      img {
        border-radius: 10px;
        width: 100%;
        height: auto;
      }
      a {
        text-align: start;
        color: #718096;
        padding: 0 1em;
      }
    }
  }
  @media only screen and (max-width:400px){
    margin-top: 400px;
    padding: 0;
    .body-services {
    display: flex;
    flex-direction: column;
    div {
      margin-top: 1em !important;
      display: flex;
      flex-direction: column;
      width: 100vw;
      margin: 0 0em;
      padding-bottom: 1em;
      box-shadow: 1px 1px 2px 2px #d8e0e2;
      border-radius: 10px;
      img {
        border-radius: 8px;
        width: 100%;
        height: auto;
      }
      a {
        text-align: start;
        color: #718096;
        padding: 0 1em;
      }
    }
  }
  }
  
`;
export const Serveces = () => {
  return (
    <ServiceWapper id="Services">
      <h1>{i18n.t("Service.services")}</h1>
      <div className="body-services">
        <div>
          <img src={serviecNew1} alt="Hotel Chile" />
          <h3>{i18n.t("Service.data_collection_creation")}</h3>
          <a>{i18n.t("Service.we_provide_several")}</a>
        </div>
        <div>
          <img src={serviecNew3} alt="Hotel Chile" />
          <h3>{i18n.t("Service.data_labeling")}</h3>
          <a>{i18n.t("Service.label_objects_in_images")}</a>
        </div>
        <div>
          <img src={serviecNew2} alt="Hotel Chile" />
          <h3>{i18n.t("Service.content_moderation")}</h3>
          <a>{i18n.t("Service.make_sure_that_contents")}</a>
        </div>
      </div>
    </ServiceWapper>
  );
};
