import { withLDConsumer } from "launchdarkly-react-client-sdk";

const customerLogo = ({ flags, ldClient }) => {
  // When using the underlying Javascript SDK, flag keys with dashes and periods are used normally
  let logo = ldClient.variation("config-customer-logo");

  // The React SDK automatically converts flag keys with dashes and periods to camelCase.
  // See this page for details: https://docs.launchdarkly.com/sdk/client-side/react/react-web#flag-keys
  return flags.showCustomerLogo ? (
  <div>
    <img src={logo} className="customer-logo" alt="customerLogo" />
  </div>
  ) : (
  <div />
  );
};

export default withLDConsumer()(customerLogo);