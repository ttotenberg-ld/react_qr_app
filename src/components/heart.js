import { withLDConsumer } from "launchdarkly-react-client-sdk";
import heart from "./../images/heart.svg";

const showHeart = ({ flags }) => {

  // The React SDK automatically converts flag keys with dashes and periods to camelCase.
  // See this page for details: https://docs.launchdarkly.com/sdk/client-side/react/react-web#flag-keys
  return flags.releaseHeart ? (
  <div>
    <img src={heart} className="heart" alt="heart" />
  </div>
  ) : (
  <div />
  );
};

export default withLDConsumer()(showHeart);