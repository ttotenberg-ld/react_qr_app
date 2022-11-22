
import { withLDConsumer } from "launchdarkly-react-client-sdk";
import { Widget, addResponseMessage } from 'react-chat-widget';
import 'react-chat-widget/lib/styles.css';



const chatbot = ({ flags, ldClient /*, ...otherProps */ }) => {
  let showFeature = ldClient.variation("chatbot-feature");

  //Change url to the URL where you'll be hosting this app
  const url = 'https://fxbft3m9yf.execute-api.us-east-2.amazonaws.com/default/answer?question='

  function sendRequest(url) {
    console.log('my url is ' + url);
    // TRY AXIOS INSTEAD
    fetch(url)
      .then(response => {
        if (!response.ok) {
          return('Uh oh! Something went wrong!' + String(response))
        }
        console.log('heres the response:', response.body);
        return JSON.stringify(response)
      })
  }

  function URLify(string) {
    const question = string.trim().replace(/\s/g, '%20');
    return url + question
  }

  const handleNewUserMessage = (newMessage) => {
    console.log(`New message incoming! ${newMessage}`);
    // Now send the message throught the backend API
    addResponseMessage('The URL should be: ' + URLify(newMessage));
    addResponseMessage(String(sendRequest(URLify(newMessage))));
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