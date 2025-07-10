import { withLDConsumer } from "launchdarkly-react-client-sdk";

const showHeart = ({ flags }) => {
  // The React SDK automatically converts flag keys with dashes and periods to camelCase.
  // See this page for details: https://docs.launchdarkly.com/sdk/client-side/react/react-web#flag-keys
  return flags.releaseHeart ? (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" width="130" height="130" className="heart" viewBox="0 0 130 130">
        <path d="M 65,29 C 59,19 49,12 37,12 20,12 7,25 7,42 7,75 25,80 65,118 105,80 123,75 123,42 123,25 110,12 93,12 81,12 71,19 65,29 z" fill="#ff0707" />
      </svg>
    </div>
  ) : (
    <div />
  );
};

export default withLDConsumer()(showHeart);