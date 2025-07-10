import QRCode from "react-qr-code";
import { withLDConsumer } from "launchdarkly-react-client-sdk";

// Get current page URL dynamically
const QRURL = window.location.href;

const qrCodeHome = ({ flags }) => {

    // The React SDK automatically converts flag keys with dashes and periods to camelCase.
    // See this page for details: https://docs.launchdarkly.com/sdk/client-side/react/react-web#flag-keys
    return flags.showQrCode ? (
    <div>
      <br />
      <span style={{ color: 'black' }}><center>Scan me!</center></span>
      <div className="qr-wrapper">
        <QRCode value={QRURL} />
      </div>
    </div>
  ) : (
    <div></div>
  );
};

export default withLDConsumer()(qrCodeHome);