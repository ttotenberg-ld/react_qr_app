import { withLDConsumer } from "launchdarkly-react-client-sdk";
import ldlogo from "./../images/ld_logo_white.png";
import oldldlogo from "./../images/ld_logo_white_old.png";

const headerLogo = ({ flags, ldClient /*, ...otherProps */ }) => {
  let showFeature = ldClient.variation("reactChildHeaderLogo");
  
  return showFeature ? (
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

