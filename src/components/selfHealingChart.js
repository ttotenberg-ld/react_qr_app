import { withLDConsumer } from "launchdarkly-react-client-sdk";
import axios from 'axios';
import { VictoryChart, VictoryLine } from 'victory';
import React, { useEffect, useState } from 'react';

// const SelfHealingChart = ({ flags, ldClient }) => {
function SelfHealingChart ({ flags, ldClient }) {

  const webhook_url = "https://app.launchdarkly.com/webhook/triggers/63bc9898d7913c12756ecdb3/c12fc007-b3ef-43b0-874a-e1a0fa1e9691"
  
  async function sendRequest(url) {
    const response = await axios.post(url);
    return response.data.answer;
  }

  const defaultValue = [
    { x: 1, y: 13 },
    { x: 2, y: 17 },
    { x: 3, y: 23 },
    { x: 4, y: 15 },
    { x: 5, y: 20 },
    { x: 6, y: 19 },
    { x: 7, y: 14 },
    { x: 8, y: 22 },
    { x: 9, y: 13 },
    { x: 10, y: 20 },
    { x: 11, y: 18 }
  ]
// Data to be updated
  const [figures, setFigures] = useState(defaultValue);

  const threshold = 60

  const thresholdData = [
    { x: 1, y: threshold },
    { x: 2, y: threshold },
    { x: 3, y: threshold },
    { x: 4, y: threshold },
    { x: 5, y: threshold },
    { x: 6, y: threshold },
    { x: 7, y: threshold },
    { x: 8, y: threshold },
    { x: 9, y: threshold },
    { x: 10, y: threshold }
  ]

  // useEffect(() => {
  //   console.log("Figures data: ",figures)
  //   console.log("Figures data length: ",figures.length)
  // }, [figures])

  function getRandomNumber(min, max) {
    return Math.random() * (max - min) + min;
  }

  // Function that updates figures
  function plot() {
    console.log("loop loop loop shoop da loop")
    const newPlotData = figures;
    const flagValue = ldClient.variation("temp-chart-self-healing", false);
    const lastItem = newPlotData.slice(-1)
    const newCount = lastItem[0].x + 1

    if (flagValue) {
      const newDataValue = lastItem[0].y + getRandomNumber(2, 7)
      if (newDataValue > threshold) {
        sendRequest(webhook_url)
      }
      newPlotData.push({ x: newCount, y: newDataValue })
      for (let i = 0; i < newPlotData.length; i++) {
        const newNumber = Number(newPlotData[i].x) - 1;
        newPlotData[i].x = newNumber;
      }
    } else {
      newPlotData.push({ x: newCount, y: getRandomNumber(13, 24) })
      for (let i = 0; i < newPlotData.length; i++) {
        const newNumber = Number(newPlotData[i].x) - 1;
        newPlotData[i].x = newNumber;
      }
    }
    return setFigures(newPlotData)
  }

  useEffect(() => {
    const chartLoop = setInterval(plot, 1000);
    return function cleanup() {
      clearInterval(chartLoop);
    };
  }, []);
  

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
            mutation: () => ({ data: figures })
            // TODO: FIGURE OUT HOW TO USE EXTERNAL MUTATIONS

          }]
        }
      }
    }]}
    >
      <VictoryLine
        name = "dataLine"
        data = {figures}
        animate={{easing: "linear"}}
      />
      <VictoryLine
        name = "thresholdLine"
        data = {thresholdData}
        style={{
          data: {
            stroke: "red",
            strokeWidth: 5
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

export default withLDConsumer()(SelfHealingChart);

