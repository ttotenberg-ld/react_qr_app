import { withLDConsumer } from "launchdarkly-react-client-sdk";
import ldlogo from "./../images/ld_logo_white.png";
import oldldlogo from "./../images/ld_logo_white_old.png";

const headerLogo = ({ flags }) => {

  // The React SDK automatically converts flag keys with dashes and periods to camelCase.
  // See this page for details: https://docs.launchdarkly.com/sdk/client-side/react/react-web#flag-keys
  return flags.releaseHeaderLogo ? (
  <div>
    <img src={ldlogo} className="LD-logo" alt="logo" />
  </div>
  ) : (
  <div>
    <img src={oldldlogo} className="LD-logo" alt="logo" />
  </div>
  );
};

export default withLDConsumer()(headerLogo);

