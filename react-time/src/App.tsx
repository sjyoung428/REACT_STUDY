import { useEffect, useState } from "react";
import Test from "./Test";

function App() {
  const [timeStamp, setTimeStamp] = useState(Date.now());

  useEffect(() => {
    const time = setInterval(() => setTimeStamp(Date.now()), 1000);
    console.log("App");
    return () => clearInterval(time);
  }, []);
  return (
    <>
      <span> {new Date(timeStamp).toLocaleDateString()} </span>
      <br />
      <span> {new Date(timeStamp).toLocaleTimeString("it-IT")} </span>
      <br />
      <hr />
      <Test />
    </>
  );
}
export default App;
