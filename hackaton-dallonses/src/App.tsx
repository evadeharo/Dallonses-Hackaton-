import { useEffect, useState } from "react";
import "./App.css";

export default function App() {
  const [firstNumber, setFirstNumber] = useState<number | undefined>(undefined);
  const [firstNumberLoading, setFirstNumberLoading] = useState<boolean>(true);
  const [secondNumberLoading, setSecondNumberLoading] =
    useState<boolean>(false);
  const [secondNumber, setSecondNumber] = useState<number | undefined>(
    undefined
  );
  const [percentage, setPercentage] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const getRandomInt = (max: number) => {
    return Math.floor(Math.random() * max);
  };

  useEffect(() => {
    while (firstNumberLoading) {
      setTimeout(() => {
        setFirstNumber(getRandomInt(9));
      }, 300);
    }
  }, [firstNumberLoading]);

  useEffect(() => {
    while (secondNumberLoading) {
      setTimeout(() => {
        setSecondNumber(getRandomInt(9));
      }, 300);
    }
  }, [secondNumberLoading]);

  const startRoulette = () => {
    if (firstNumberLoading) {
      setFirstNumberLoading(false);
      setSecondNumberLoading(true);
      return;
    }
    if (secondNumberLoading) {
      setSecondNumberLoading(false);
      setFirstNumberLoading(false);
      return;
    }

    if (!secondNumberLoading && !firstNumberLoading) {
      const randomVal = getRandomInt(10);
      if (randomVal > 8) {
        setPercentage(true);
      } else {
        setPercentage(false);
      }
      setFirstNumberLoading(true);
      setSecondNumberLoading(false);
    }
  };

  // const audio = document.querySelector("audio");
  // if (!audio) return;

  // audio.volume = 0.9;
  // audio.controls = false;

  return (
    <div style={{ width: "100%", height: "100%" }}>
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

      <audio controls>
        <source
          src="https://media.dallonses.com/hackaton/dimoni.mp3"
          type="audio/mpeg"
        />
      </audio>
      <div style={{ display: "flex", flexDirection: "row", gap: "1rem" }}>
        <div
          style={{
            width: 100,
            height: 200,
            backgroundColor: "red",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {firstNumber ?? 0}
        </div>
        <div
          style={{
            width: 100,
            height: 200,
            backgroundColor: "blue",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {secondNumber ?? 0}
        </div>
        <div
          style={{
            width: 100,
            height: 200,
            backgroundColor: "green",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {percentage ? "%" : ""}
        </div>
      </div>
    </div>
  );
}
