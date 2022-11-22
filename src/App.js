import "./App.css";
import React, { useState, useEffect } from "react";
import { useFlags } from "launchdarkly-react-client-sdk";
// CHATBOT STUFF
import { addResponseMessage } from 'react-chat-widget';
// END CHATBOT STUFF
import Chatbot from "./components/chatbot";
import QRCode from "./components/qrCode";
import HeaderLDLogo from "./components/headerLogo";
import Heart from "./components/heart";
import CustomerLogo from "./components/customerLogo";
import Toggle from "./components/toggle";

function App() {
  const [headerStyle, setHeaderStyle] = useState("gray-app-header");
  const { reactBackgroundColor } = useFlags();

  useEffect(() => {
    setHeaderStyle("gray-app-header");
    const updateBackGroundColor = () => {
      // Sets the className to "purple-app-header", "blue-app-header", etc.
      const headerStyle = reactBackgroundColor + "-app-header";
      setHeaderStyle(headerStyle);

      return reactBackgroundColor;
    };
    updateBackGroundColor();
  }, [reactBackgroundColor]);


  // CHATBOT STUFF
  useEffect(() => {
    addResponseMessage('Welcome to this **awesome** chat!');
  }, []);

  // END CHATBOT STUFF

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
        <Toggle />
        <div className="chatbot">
          <Chatbot />
        </div>
      </div>
    </div>
  );
}

export default App;
