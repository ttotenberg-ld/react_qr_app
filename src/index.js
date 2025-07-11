import React from "react";
import { render } from "react-dom";
import "./index.css";
import App from "./App";
import { asyncWithLDProvider } from "launchdarkly-react-client-sdk";
import { deviceType, osName } from "react-device-detect";
import getUserId from "./util/getUserId";

const CLIENTKEY = "609ead905193530d7c28647b";

let user_id = getUserId();


const ldContext = {
  kind: 'multi',
  user: {
    key: user_id,
    name: 'Anna',
    role: 'doctor'
  },
  device: {
    key: 'device-key-123abc',
    os: osName,
    deviceType: deviceType,
  }
};

(async () => {
  const LDProvider = await asyncWithLDProvider({
    clientSideID: CLIENTKEY,
    context: ldContext,
  });

  render(
    <LDProvider>
      <App />
    </LDProvider>,
    document.getElementById('root'),
  );
})();