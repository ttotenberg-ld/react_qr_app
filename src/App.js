import osmo from "./images/osmo_black.png";
import ldlogo from "./images/ld_logo_white.png";
import toggle from "./images/toggle.png"
import "./App.css";
import React, { useState, useEffect } from "react";
import QRCode from "./components/qrCode";
import { useFlags } from "launchdarkly-react-client-sdk";

function App() {
  const [headerStyle, setHeaderStyle] = useState("gray-app-header");
  const { reactBackgroundColor } = useFlags();

  useEffect(() => {
    setHeaderStyle("gray-app-header");
    const updateBackGroundColor = () => {

      // Sets the className to "purple-app-header", "blue-app-header", etc.
      const headerStyle = reactBackgroundColor + "-app-header";
      setHeaderStyle(headerStyle)
      
      return reactBackgroundColor;
    };
    updateBackGroundColor();
  }, [reactBackgroundColor]);

  return (
    <div className={headerStyle}>
      <div className="black-header">
        <img src={ldlogo} className="LD-logo" alt="logo" />
      </div>
      {/* <br /> */}
      <div className={headerStyle}>
        <QRCode />
        <br />
        <br />
        <img src={osmo} className="App-logo" alt="logo" />
        <br />
        <br />
        <img src={toggle} className="toggle-logo" alt="toggle" />
      </div>
    </div>

  );
}

export default App;
