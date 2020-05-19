import React from "react";
import { Plugins } from "@capacitor/core";

export default () => {
  const displayNativeToast = async () => {
    await Plugins.Toast.show({
      text: "Hello world",
    });
  };

  return (
    <>
      <h1>Hello world</h1>
      <button onClick={displayNativeToast}>Display native toast!</button>
    </>
  );
};
