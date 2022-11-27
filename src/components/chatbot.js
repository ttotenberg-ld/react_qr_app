
import { withLDConsumer } from "launchdarkly-react-client-sdk";
import { Widget, addResponseMessage } from 'react-chat-widget';
import 'react-chat-widget/lib/styles.css';
import axios from 'axios';
import niceRobot from "./../images/happyRobot.png";
import meanRobot from "./../images/meanRobot.png";
import pirateRobot from "./../images/pirateRobot.png";



const chatbot = ({ flags, ldClient /*, ...otherProps */ }) => {
  let showFeature = ldClient.variation("chatbot-feature");
  let personality = ldClient.variation("chatbot-personality");
  console.log(personality);

  function changeAvatar() {
    if (personality === 'pirate') {
      return pirateRobot
    } else if (personality === 'mean') {
      return meanRobot
    } else {
      return niceRobot
    }
  }

  function changeTitle() {
    if (personality === 'pirate') {
      return 'ARRRRobot'
    } else if (personality === 'mean') {
      return 'Skynet'
    } else {
      return 'Nice Robot'
    }
  }

  function changeSubtitle() {
    if (personality === 'pirate') {
      return 'Here there be answers'
    } else if (personality === 'mean') {
      return 'Go ask Google instead'
    } else {
      return 'e.g. How big is the Earth?'
    }
  }

  const url = 'https://fxbft3m9yf.execute-api.us-east-2.amazonaws.com/default/answer?question='

  async function sendRequest(url) {
    const response = await axios.get(url);
    return response.data.answer;
  }

  function URLify(string) {
    const question = string.trim().replace(/\s/g, '%20');
    return url + question
  }

  const handleNewUserMessage = async (newMessage) => {
    console.log(`New message incoming! ${newMessage}`);
    // Now send the message throught the backend API
    const message = await sendRequest(URLify(newMessage));
    addResponseMessage(message);
  };
  
  return showFeature ? (
    <div>
      <Widget 
        handleNewUserMessage={handleNewUserMessage}
        // TO DO: Hook up the title and subtitle to personality flags
        // Example: For mean robot it can be labeled Evil Robot with a subtitle "warning: it's spicy"
        title={changeTitle()}
        subtitle={changeSubtitle()}
        profileAvatar={changeAvatar()}
      />
    </div>
  ) : (
    <div></div>
  );
};

export default withLDConsumer()(chatbot);