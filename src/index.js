import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { asyncWithLDProvider } from "launchdarkly-react-client-sdk";
import { deviceType, osName } from "react-device-detect";
import getUserId from "./util/getUserId";
import getClientKey from "./util/getClientKey";
import KeyForm from "./components/keyForm";

// const CLIENTKEY = "63ea528ee871791399779bc8"; // let's update this to be stored in git in the future
const CLIENT_KEY = getClientKey();

let id = getUserId();

(async () => {

  if (!CLIENT_KEY) {
    ReactDOM.render(
      <div>
        <KeyForm/>
      </div>,
      document.getElementById("root")
    );    
  } else {
    const LDProvider = await asyncWithLDProvider({
      clientSideID: CLIENT_KEY,
      user: {
        key: id,
        //dynamically set these custom attributes using the deviceType and osName selectors from the npm package
        custom: {
          device: deviceType,
          operatingSystem: osName,
        },
      },
    });

    ReactDOM.render(
      <LDProvider>
        <App />
      </LDProvider>,
      document.getElementById("root")
    );
  }
})();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
