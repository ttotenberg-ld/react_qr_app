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
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <QRCode />
      <br></br>
      <br></br>
      <p>
        {colorBoolean ? (
          <span>The Background flag is ON!</span>
        ) : (
          <span>The Background flag is OFF!</span>
        )}
      </p>
      <div className="card w-75">
        <div className="card-body">
          <h5 className="card-title">Backend Feature Flag Example</h5>
          <p className="card-text">
            When flag is toggled on you click it saves to database-1, when
            toggled off it saves to databse-2
          </p>
          <button
            type="button"
            // onClick={() => {
            //   saveBtn();
            // }}
            className="saveBtn btn btn-primary"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
