import { withLDConsumer } from "launchdarkly-react-client-sdk";
import axios from 'axios';
import elmoFire from "./../images/elmo_fire.gif";

const selfHealingFeature = ({ flags, ldClient }) => {

  const webhook_url = "https://app.launchdarkly.com/webhook/triggers/63a61ca3f43f6511426bb441/28706181-e761-46f7-b0cb-29fa08127f2a"

  function timeout(delay) {
    return new Promise( res => setTimeout(res, delay) );
  }

  async function sendRequest(url) {
      await timeout(2000);
      const response = await axios.post(url);
      return response.data.answer;
  }

  ldClient.on('change:release-self-healing-feature', (value, previous) => {
    console.log('release-self-healing-feature changed:', value, '(' + previous + ')');
    if (value === true){
      console.log(sendRequest(webhook_url));
    }
  });

  // The React SDK automatically converts flag keys with dashes and periods to camelCase.
  // See this page for details: https://docs.launchdarkly.com/sdk/client-side/react/react-web#flag-keys
  return flags.releaseSelfHealingFeature ? (
  <div>
    <span className="self-healer">500 ERRORS!!!</span>
    <img src={elmoFire} alt="logo" />
  </div>
  ) : (
  <div>
  </div>
  );
};

export default withLDConsumer()(selfHealingFeature);

