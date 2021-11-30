import QRCode from "react-qr-code";

import { withLDConsumer } from "launchdarkly-react-client-sdk";

const qrCodeHome = ({ flags, ldClient /*, ...otherProps */ }) => {
  let showFeature = ldClient.variation("reactQRCode");

  return showFeature ? (
    <QRCode value="https://nfinnegan.github.io/react_node_ff/" />
  ) : (
    <div></div>
  );
};

export default withLDConsumer()(qrCodeHome);
