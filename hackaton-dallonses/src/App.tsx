import { useEffect, useState } from "react";
import "./App.css";

export default function App() {
  const [firstNumber, setFirstNumber] = useState<number | undefined>(undefined);
  const [secondNumber, setSecondNumber] = useState<number | undefined>(
    undefined
  );

  const [firstNumberLoading, setFirstNumberLoading] = useState<boolean>(true);
  const [secondNumberLoading, setSecondNumberLoading] =
    useState<boolean>(false);

  const [percentage, setPercentage] = useState<boolean>(false);

  const getRandomInt = (max: number) => {
    return Math.floor(Math.random() * max); // 0..max-1
  };

  // Spin first number while firstNumberLoading is true
  useEffect(() => {
    if (!firstNumberLoading) return;

    const intervalId = setInterval(() => {
      setFirstNumber(getRandomInt(10)); // 0..9
    }, 300);

    return () => clearInterval(intervalId);
  }, [firstNumberLoading]);

  // Spin second number while secondNumberLoading is true
  useEffect(() => {
    if (!secondNumberLoading) return;

    const intervalId = setInterval(() => {
      setSecondNumber(getRandomInt(10)); // 0..9
    }, 300);

    return () => clearInterval(intervalId);
  }, [secondNumberLoading]);

  const startRoulette = () => {
    // 1st click: stop first, start second
    if (firstNumberLoading) {
      setFirstNumberLoading(false);
      setSecondNumberLoading(true);
      return;
    }

    // 2nd click: stop second
    if (secondNumberLoading) {
      setSecondNumberLoading(false);
      return;
    }

    // 3rd click (both stopped): decide percentage and restart first
    if (!firstNumberLoading && !secondNumberLoading) {
      const randomVal = getRandomInt(10); // 0..9
      setPercentage(randomVal > 8); // 10% chance

      // start again with first spinning
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
