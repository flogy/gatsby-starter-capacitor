import React from "react";
import { Toast } from "@capacitor/toast";
import gatsbyStartercapacitor from "../assets/gatsby-starter-capacitor.png";

export default () => {
  const displayNativeToast = async () => {
    await Toast.show({
      text: "Hello world",
    });
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h1>gatsby-starter-capacitor</h1>
      <img
        style={{ width: "100%" }}
        src={gatsbyStartercapacitor}
        alt="Gatsby and Capacitor"
      />
      <button onClick={displayNativeToast}>Display native toast!</button>
    </div>
  );
};
