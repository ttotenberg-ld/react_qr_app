
import { withLDConsumer } from "launchdarkly-react-client-sdk";
import { Widget, addResponseMessage } from 'react-chat-widget';
import 'react-chat-widget/lib/styles.css';

//Change QRURL to the URL where you'll be hosting this app
// const QRURL = "https://ttotenberg-ld.github.io/react_qr_app/";

const chatbot = ({ flags, ldClient /*, ...otherProps */ }) => {
  let showFeature = ldClient.variation("chatbot-feature");

  const handleNewUserMessage = (newMessage) => {
    console.log(`New message incoming! ${newMessage}`);
    // Now send the message throught the backend API
    addResponseMessage('you typed a message!');
  };
  
  return showFeature ? (
    <div>
      <Widget 
        handleNewUserMessage={handleNewUserMessage}
        title="Chatbot 9000"
        subtitle="Ask me anything!"
      />
    </div>
  ) : (
    <div></div>
  );
};

export default withLDConsumer()(chatbot);