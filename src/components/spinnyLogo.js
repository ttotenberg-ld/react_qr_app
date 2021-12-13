import { withLDConsumer } from "launchdarkly-react-client-sdk";
import spinnylogo from "./../images/osmo_black.png";
import oldspinnylogo from "./../images/rocketship_dark.png";

const spinnyLogo = ({ flags, ldClient /*, ...otherProps */ }) => {
  let showFeature = ldClient.variation("reactChildSpinnyLogo");
  
  return showFeature ? (
  <div>
    <img src={spinnylogo} className="App-logo" alt="logo" />
  </div>
  ) : (
  <div>
    <img src={oldspinnylogo} className="App-logo" alt="logo" />
  </div>
  );
};

export default withLDConsumer()(spinnyLogo);

