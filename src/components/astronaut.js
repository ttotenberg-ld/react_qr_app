import { withLDConsumer } from "launchdarkly-react-client-sdk";
import astronaut from "./../images/astronaut.png";
import oldastronaut from "./../images/astronaut_old.png";

const astronautLogo = ({ flags, ldClient /*, ...otherProps */ }) => {
  
  // The React SDK automatically converts flag keys with dashes and periods to camelCase.
  // See this page for details: https://docs.launchdarkly.com/sdk/client-side/react/react-web#flag-keys
  return flags.releaseAstronaut ? (
  <div>
    <img src={astronaut} className="astronaut-logo" alt="logo" />
  </div>
  ) : (
  <div>
    <img src={oldastronaut} className="astronaut-logo" alt="logo" />
  </div>
  );
};

export default withLDConsumer()(astronautLogo);

