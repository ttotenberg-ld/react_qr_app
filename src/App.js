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
    setHeaderStyle("Gray-app-header");
    const updateBackGroundColor = () => {
      if (reactBackgroundColor === "purple") {
        console.log("Background is purple");
        setHeaderStyle("Purple-app-header");

      } else if (reactBackgroundColor === "blue") {
        console.log("Background is blue");
        setHeaderStyle("Blue-app-header");

      } else if (reactBackgroundColor === "red") {
        console.log("Background is red");
        setHeaderStyle("Red-app-header");
      }
        else {
        setHeaderStyle("Gray-app-header");
        console.log("Background is gray");
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
      <span>The background color is {reactBackgroundColor}!</span>
      </p>
    </div>
  );
}

export default App;
