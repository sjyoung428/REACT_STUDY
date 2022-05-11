import { useEffect, useState } from "react";

function App() {
  const [timeStamp, setTimeStamp] = useState(Date.now());

  useEffect(() => {
    setInterval(() => setTimeStamp(Date.now()), 1000);
    console.log("hi");
  }, []);
  return (
    <>
      <span> {new Date(timeStamp).toLocaleDateString()} </span>
      <br />
      <span> {new Date(timeStamp).toLocaleTimeString("it-IT")} </span>
      <br />
      <hr />
    </>
  );
}
export default App;
