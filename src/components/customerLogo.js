import { withLDConsumer } from "launchdarkly-react-client-sdk";
import heart from "./../images/heart.svg";

const customerLogo = ({ flags, ldClient /*, ...otherProps */ }) => {
  let showFeature = ldClient.variation("reactShowCustomerLogo");
  let logo = ldClient.variation("reactCustomerLogo");

  return showFeature ? (
  <div>
    <img src={logo} className="customer-logo" alt="customerLogo" />
  </div>
  ) : (
  <div />
  );
};

export default withLDConsumer()(customerLogo);