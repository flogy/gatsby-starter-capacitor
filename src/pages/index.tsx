import React from "react";
import { Plugins } from "@capacitor/core";
import gatsbyStartercapacitor from "../assets/gatsby-starter-capacitor.png";

export default () => {
  const displayNativeToast = async () => {
    await Plugins.Toast.show({
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
      <img src={gatsbyStartercapacitor} alt="Gatsby and Capacitor" />
      <button onClick={displayNativeToast}>Display native toast!</button>
    </div>
  );
};
