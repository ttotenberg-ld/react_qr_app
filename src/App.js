import logo from "./logo.svg";
import osmo from "./images/osmo_black.png";
import ldlogo from "./images/ld_logo.png";
import "./App.css";
import React, { useState, useEffect } from "react";
import QRCode from "./components/qrCode";
import { useFlags } from "launchdarkly-react-client-sdk";

function App() {
  const [headerStyle, setHeaderStyle] = useState("App-header");
  // const [colorBoolean, setColorBoolean] = useState("");
  const { reactBackgroundColor } = useFlags();

  useEffect(() => {
    // welcomeMessage();
    setHeaderStyle("gray-app-header");
    const updateBackGroundColor = () => {

      // Sets the class name to "purple-app-header", "blue-app-header", etc.
      const headerStyle = reactBackgroundColor + "-app-header";
      setHeaderStyle(headerStyle)
      
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
      <br />
      <img src={ldlogo} className="LD-logo" alt="logo" />
      <br />
      <QRCode />
      <br />
      <br />
      <img src={osmo} className="App-logo" alt="logo" />
    </div>
  );
}

export default App;
