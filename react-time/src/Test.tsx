import { useEffect, useState } from "react";

function Test() {
  const [timeStamp, setTimeStamp] = useState(Date.now());
  const [time, setTime] = useState<string[]>();

  useEffect(() => {
    const time = setInterval(() => setTimeStamp(Date.now()), 1000);
    Convert();
    return () => clearInterval(time);
  }, [timeStamp]);

  const Convert = () => {
    const timeArr = [];
    const year = new Date(timeStamp).toLocaleDateString();
    const time = new Date(timeStamp).toLocaleTimeString();
    timeArr.push(year, time);
    setTime(timeArr);
  };
  return (
    <>
      {time &&
        time.map((timeData) => (
          <div key={timeData}>
            <span>{timeData}</span>
            <br />
          </div>
        ))}
    </>
  );
}
export default Test;
