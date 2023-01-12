import { useState, useEffect } from 'react';

function Clock(){
  // Data to be updated
  const [date, setDate] = useState(new Date());
  
//   Function to update the data
  function refreshClock() {
    setDate(new Date());
  }

// UseEffect loop to run the function
  useEffect(() => {
    const timerId = setInterval(refreshClock, 1000);
    return function cleanup() {
      clearInterval(timerId);
    };
  }, []);
  
  return (
    <span>
      {date.toLocaleTimeString()}
    </span>
  );
}
export default Clock;