import { withLDConsumer } from "launchdarkly-react-client-sdk";

const updateBackGroundColor = ({ flags, ldClient /*, ...otherProps */ }) => {
  let showColorFeature = ldClient.variation("reactBackgroundColor");

  return showColorFeature;
};

export default withLDConsumer()(updateBackGroundColor);
