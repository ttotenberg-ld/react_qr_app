import { withLDConsumer } from "launchdarkly-react-client-sdk";
// import axios from 'axios';
import { VictoryChart, VictoryLine } from 'victory';
import React, { useState } from 'react';

const SelfHealingFeature = ({ flags, ldClient }) => {

  // const webhook_url = "https://app.launchdarkly.com/webhook/triggers/63bc9898d7913c12756ecdb3/2affd5aa-6df0-443f-b2d1-d42fb7f0878c"

  // function timeout(delay) {
  //   return new Promise( res => setTimeout(res, delay) );
  // }

  // async function sendRequest(url) {
  //     await timeout(2000);
  //     const response = await axios.post(url);
  //     return response.data.answer;
  // }


  // function chartLoop() {
  //   await timeout(1000);

  // }
  

  const [figures, setFigures] = useState([
    { x: 1, y: 21 },
    { x: 2, y: 32 },
    { x: 3, y: 53 },
    { x: 4, y: 42 },
    { x: 5, y: 75 },
    { x: 6, y: 22 },
    { x: 7, y: 31 },
    { x: 8, y: 40 },
    { x: 9, y: 52 },
    { x: 10, y: 78 }
  ]);

  const threshold = [
    { x: 2, y: 60 },
    { x: 3, y: 60 },
    { x: 4, y: 60 },
    { x: 1, y: 60 },
    { x: 5, y: 60 },
    { x: 6, y: 60 },
    { x: 7, y: 60 },
    { x: 8, y: 60 },
    { x: 9, y: 60 },
    { x: 10, y: 60 }
  ]

  function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  }

  function randomLowNumber() {
    var num = getRandomArbitrary(13, 24);
    return num
  }

  function plot(plotData) {
    console.log("Figures data:")
    console.log({figures})
    console.log("Data before:")
    console.log(plotData)
    let flagValue = ldClient.variation("temp-chart-self-healing", false);
    let lastItem = plotData.slice(-1)
    let newCount = lastItem[0].x + 1

    if (flagValue) {
      plotData.push({ x: newCount, y: 80 })
      for (let i = 0; i < plotData.length; i++) {
        let newNumber = Number(plotData[i].x) - 1;
        plotData[i].x = newNumber;
      }
    } else {
      plotData.push({ x: newCount, y: randomLowNumber() })
      for (let i = 0; i < plotData.length; i++) {
        let newNumber = Number(plotData[i].x) - 1;
        plotData[i].x = newNumber;
      }
    }
    console.log("Data after:")
    console.log(plotData)
    return setFigures(plotData)
  }

  // The React SDK automatically converts flag keys with dashes and periods to camelCase.
  // See this page for details: https://docs.launchdarkly.com/sdk/client-side/react/react-web#flag-keys
  return flags.showMonitoringChart ? (
    <div>
    <span className="chart">System Monitor</span>  
    <VictoryChart
    domain={{ x: [1, 10], y:[0, 100]}}
    events={[{
      target: "parent",
      eventHandlers: {
        onClick: () => {
          
          return [{
            childName: "dataLine",
            mutation: () => ({ data: plot(figures) })
            // TODO: FIGURE OUT HOW TO USE EXTERNAL MUTATIONS

          }]
        }
      }
    }]}
    >
      <VictoryLine
        name = "dataLine"
        data = {figures}
      />
      <VictoryLine
        name = "thresholdLine"
        data = {threshold}
        style={{
          data: {
            stroke: "red",
            strokeWidth: 5
          },
          labels: {
            fontSize: 15,
            fill: ({ datum }) => datum.x === 3 ? "#000000" : "#c43a31"
          }
        }}
      />
    </VictoryChart>
    </div>
  ) : (
  <div>
  </div>
  );
};

export default withLDConsumer()(SelfHealingFeature);

