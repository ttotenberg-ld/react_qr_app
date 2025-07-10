import "./App.css";
import React, { useState, useEffect } from "react";
import { useFlags } from "launchdarkly-react-client-sdk";
import QRCode from "./components/qrCode";
import HeaderLDLogo from "./components/headerLogo";
import Heart from "./components/heart";
import CustomerLogo from "./components/customerLogo";
import Astronaut from "./components/astronaut";

function App() {
  const [headerStyle, setHeaderStyle] = useState("gray-app-header");
  const { configBackgroundColor } = useFlags();

  useEffect(() => {
    setHeaderStyle("gray-app-header");
    const updateBackGroundColor = () => {
      // Sets the className to "purple-app-header", "blue-app-header", etc.
      const headerStyle = configBackgroundColor + "-app-header";
      setHeaderStyle(headerStyle);

      return configBackgroundColor;
    };
    updateBackGroundColor();
  }, [configBackgroundColor]);

  return (
    <div className={headerStyle}>
      <div className="black-header">
        <HeaderLDLogo />
      </div>
      
      <div className={headerStyle}>
        <Heart />
        <CustomerLogo />
        <QRCode />
        <br />
        <Astronaut />
      </div>
    </div>
  );
}

export default App;
