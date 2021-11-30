import logo from "./logo.svg";
import "./App.css";
import React, { useState, useEffect } from "react";
import QRCode from "./components/qrCode";
import { useFlags } from "launchdarkly-react-client-sdk";

function App() {
  const [headerStyle, setHeaderStyle] = useState("App-header");
  const [colorBoolean, setColorBoolean] = useState("");
  const { reactBackgroundColor } = useFlags();

  useEffect(() => {
    // welcomeMessage();
    setColorBoolean("");
    setHeaderStyle("App-header");
    const updateBackGroundColor = () => {
      if (reactBackgroundColor === "purple") {
        console.log("Flag is ON");
        setColorBoolean("true");
        setHeaderStyle("New-app-header");
      } else {
        console.log("Flag is off");
      }
      return reactBackgroundColor;
    };
    updateBackGroundColor();
  }, [reactBackgroundColor]);

  // const saveBtn = () => {
  //   fetch("/flag?")
  //     .then((data) => console.log(data, "check terminal for message"))
  //     .catch((err) => console.log(err));
  // };
  // const welcomeMessage = () => {
  //   fetch("/api")
  //     .then((response) => response.json())
  //     .then((data) => setData(data.message));
  // };

  return (
    <div className={headerStyle}>
      <br></br>
      <br></br>
      <QRCode />
        <img src={logo} className="App-logo" alt="logo" />
      <br></br>
      <br></br>
      <p>
        {colorBoolean ? (
          <span>The Background flag is ON!</span>
        ) : (
          <span>The Background flag is OFF!</span>
        )}
      </p>
    </div>
  );
}

export default App;
