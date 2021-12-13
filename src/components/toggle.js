import { withLDConsumer } from "launchdarkly-react-client-sdk";
import toggle from "./../images/toggle.png";
import oldtoggle from "./../images/toggle_old.png";

const toggleLogo = ({ flags, ldClient /*, ...otherProps */ }) => {
  let showFeature = ldClient.variation("reactChildToggle");
  
  return showFeature ? (
  <div>
    <img src={toggle} className="toggle-logo" alt="logo" />
  </div>
  ) : (
  <div>
    <img src={oldtoggle} className="toggle-logo" alt="logo" />
  </div>
  );
};

export default withLDConsumer()(toggleLogo);

