
import { withLDConsumer } from "launchdarkly-react-client-sdk";
import { Widget, addResponseMessage } from 'react-chat-widget';
import 'react-chat-widget/lib/styles.css';
import axios from 'axios';
import niceRobot from "./../images/happyRobot.png";
import meanRobot from "./../images/meanRobot.png";
import pirateRobot from "./../images/pirateRobot.png";


const chatbot = ({ flags, ldClient }) => {
  let personality = ldClient.variation("config-chatbot-personality");

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
      return 'Stack Overflow Bot'
    } else {
      return 'Answerbot'
    }
  }

  function changeSubtitle() {
    if (personality === 'pirate') {
      return 'Here there be answers'
    } else if (personality === 'mean') {
      return 'Did you google it first?'
    } else {
      return 'e.g. How big is the Earth?'
    }
  }

  const url = 'https://fxbft3m9yf.execute-api.us-east-2.amazonaws.com/default/answer?question='

  async function sendRequest(url) {
    if (personality === 'placeholder') {
      return "Error: Bot not found."
    } else {
      const response = await axios.get(url);
      return response.data.answer;
    }
    
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
  
  return flags.showChatbot ? (
    <div>
      <Widget 
        handleNewUserMessage={handleNewUserMessage}
        title={changeTitle()}
        subtitle={changeSubtitle()}
        titleAvatar={changeAvatar()}
        senderPlaceHolder='Ask a question'
      />
    </div>
  ) : (
    <div></div>
  );
};

export default withLDConsumer()(chatbot);