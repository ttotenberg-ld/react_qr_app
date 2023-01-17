import { withLDConsumer } from "launchdarkly-react-client-sdk";
import axios from 'axios';
import { VictoryChart, VictoryLine, VictoryLabel, VictoryAxis, VictoryArea } from 'victory';
import React, { useEffect, useState } from 'react';

// Flag trigger address used to killswitch, and put data back to stable state
const webhook_url = "https://app.launchdarkly.com/webhook/triggers/63a61ca3f43f6511426bb441/67ffee07-d84f-4380-b69a-f933e72f02b0"

// Function to send the webhook. Used in plot()
async function sendRequest(url) {
  const response = await axios.post(url);
  return response.data.answer;
}

// Core component
function SelfHealingChart ({ flags, ldClient }) {
  const label = ldClient.variation("config-chart-label", "Error Rate");

  // Chart data controlled by a flag
  const defaultValue = [
    { x: 1, y: 15 },
    { x: 2, y: 17 },
    { x: 3, y: 16 },
    { x: 4, y: 15 },
    { x: 5, y: 18 },
    { x: 6, y: 19 },
    { x: 7, y: 21 },
    { x: 8, y: 22 },
    { x: 9, y: 16 },
    { x: 10, y: 15 },
    { x: 11, y: 14 },
    { x: 12, y: 17 },
    { x: 13, y: 19 },
    { x: 14, y: 20 },
    { x: 15, y: 18 },
    { x: 16, y: 21}
  ]

  const [figures, setFigures] = useState(defaultValue);

  // Static red chart threshold line data
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
    { x: 10, y: threshold },
    { x: 11, y: threshold },
    { x: 12, y: threshold },
    { x: 13, y: threshold },
    { x: 14, y: threshold },
    { x: 15, y: threshold }
  ]

  // Used to tell the chart to rerender
  const defaultMutation = [{
    externalMutations: [
      {
        childName: "dataLine",
        target: "parent",
        eventKey: "all",
        mutation: () => ({ data: figures }),
        
      }
  ]}]

  const [mutateChart, setMutateChart] = useState(defaultMutation)

  function getRandomNumber(min, max) {
    return Math.random() * (max - min) + min;
  }

  // Function used to update 'figures' with new data
  function plot() {
    const newPlotData = figures;
    const flagValue = ldClient.variation("release-self-healing-feature", false);
    const lastItem = newPlotData.slice(-1)
    const newCount = lastItem[0].x + 1

    if (flagValue) {
      const newDataValue = lastItem[0].y + getRandomNumber(3, 8)
      if (newDataValue > threshold) {
        sendRequest(webhook_url)
      }
      newPlotData.push({ x: newCount, y: newDataValue })
      for (let i = 0; i < newPlotData.length; i++) {
        const newNumber = Number(newPlotData[i].x) - 1;
        newPlotData[i].x = newNumber;
      }
    } else {
      newPlotData.push({ x: newCount, y: getRandomNumber(14, 21) })
      for (let i = 0; i < newPlotData.length; i++) {
        const newNumber = Number(newPlotData[i].x) - 1;
        newPlotData[i].x = newNumber;
      }
    }

    setFigures(newPlotData)
    setMutateChart([{
      externalMutations: [
        {
          childName: "dataLine",
          target: "parent",
          eventKey: "all",
          mutation: () => ({ data: figures }),
          
        }
    ]}])
  }

  // Core loop to repeatedly create new data
  useEffect(() => {
    const chartLoop = setInterval(plot, 2000);
    return function cleanup() {
      clearInterval(chartLoop);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  

  // The React SDK automatically converts flag keys with dashes and periods to camelCase.
  // See this page for details: https://docs.launchdarkly.com/sdk/client-side/react/react-web#flag-keys
  return flags.showMonitoringChart ? (
    <div>
    <VictoryChart
    domain={{ x: [1, 15], y:[0, 100]}}
    externalEventMutations={mutateChart}
    >
      <VictoryLabel 
        text="System Monitor" 
        x={225} 
        y={30} 
        textAnchor="middle"
        style = {[
          { fill: "black", fontSize: 30 }
        ]} 
      />
      <VictoryLabel 
        text={label}
        x={12} 
        y={150} 
        textAnchor="middle" 
        angle={-90}
        style = {[
          { fill: "black", fontSize: 20 }
        ]}
      />
      <VictoryAxis 
        tickFormat={[
          ""
        ]}
      />
      <VictoryAxis dependentAxis/>
      <VictoryArea
        name = "dataLine"
        data = {figures}
        interpolation="monotoneX"
        animate={{easing: "linear", duration: 1000}}
        style={{
          data: {
            fill: "#405BFF", fillOpacity: 0.8, strokeWidth: 3
          },
        }}
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