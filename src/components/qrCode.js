import QRCode from "react-qr-code";

import { withLDConsumer } from "launchdarkly-react-client-sdk";

const qrCodeHome = ({ flags, ldClient /*, ...otherProps */ }) => {
  let showFeature = ldClient.variation("reactQRCode");

  return showFeature ? (
    <QRCode value="www.launchdarkly.com" />
  ) : (
    <div>Flag off</div>
  );
};

export default withLDConsumer()(qrCodeHome);
