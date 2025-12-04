import "./App.css";
import data from "./data.json";

export default function App() {
  const { part1, part2, part3, part4 } = data;
  return (
    <main style={{ display: "flex", flexWrap: "wrap" }}>
      <div
        style={{
          width: "40vw",
          height: "45vh",
          backgroundColor: "red",
          position: "relative",
        }}
      >
        <span style={{ position: "absolute", left: "0", bottom: "0" }}>0</span>
        <span style={{ position: "absolute", left: "95%", bottom: "95%" }}>
          100
        </span>
      </div>
      <div
        style={{
          width: "40vw",
          height: "45vh",
          backgroundColor: "peru",
          position: "relative",
        }}
      >
        part 2
        <span style={{ position: "absolute", left: "0", bottom: "0" }}>0</span>
        <span style={{ position: "absolute", left: "95%", bottom: "95%" }}>
          100
        </span>
      </div>
      <div
        style={{
          width: "40vw",
          height: "45vh",
          backgroundColor: "blue",
          position: "relative",
        }}
      >
        {part3.map((i) => (
          <div
            style={{
              position: "absolute",
              left: i.x * 100,
              bottom: i.y * 100,
              width: i.size,
              height: i.size,
              backgroundColor: "red",
            }}
          />
        ))}
      </div>
      <div
        style={{
          width: "40vw",
          height: "45vh",
          backgroundColor: "yellow",
          position: "relative",
        }}
      >
        part 4
        <span style={{ position: "absolute", left: "0", bottom: "0" }}>0</span>
        <span style={{ position: "absolute", left: "95%", bottom: "95%" }}>
          100
        </span>
      </div>
    </main>
  );
}
