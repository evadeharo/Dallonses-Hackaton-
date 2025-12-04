import { useState } from "react";
import "./App.css";

export default function App() {
  const [firstNumber, setFirstNumber] = useState<number | undefined>(undefined);
  const [secondNumber, setSecondNumber] = useState<number | undefined>(
    undefined
  );
  const [percentage, setPercentage] = useState<boolean>(false);

  const getRandomInt = (max: number) => {
    return Math.floor(Math.random() * max);
  };

  const startRoulette = () => {
    if (firstNumber === undefined) {
      setFirstNumber(getRandomInt(9));
    } else if (firstNumber !== undefined && secondNumber === undefined) {
      setSecondNumber(getRandomInt(9));
    }
    if (firstNumber !== undefined && secondNumber !== undefined) {
      const percentageVal = getRandomInt(10);
      if (percentageVal > 8) {
        setPercentage(true);
      } else {
        setPercentage(false);
        setFirstNumber(undefined);
        setSecondNumber(undefined);
      }
    }
  };

  const audio = document.querySelector("audio");
  if (!audio) return;

  audio.volume = 0.9;
  audio.controls = false;

  return (
    <>
      <h1>{firstNumber}</h1>
      <div className="card">
        <button onClick={startRoulette}>Random number</button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        {firstNumber ?? 0} - {secondNumber ?? 0} {percentage ? "%" : ""}
      </p>
      <div style={{ width: "100%", height: "100%" }}>
        <audio controls>
          <source
            src="https://media.dallonses.com/hackaton/dimoni.mp3"
            type="audio/mpeg"
          />
        </audio>
        <div style={{ display: "flex", flexDirection: "row", gap: "1rem" }}>
          <div style={{ width: 100, height: 200, backgroundColor: "red" }} />
          <div style={{ width: 100, height: 200, backgroundColor: "blue" }} />
          <div style={{ width: 100, height: 200, backgroundColor: "green" }} />
        </div>
      </div>
    </>
  );
}
