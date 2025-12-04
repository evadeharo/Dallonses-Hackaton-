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
        {part1.map((p, i) => (
          <div
            key={i}
            style={{
              position: "absolute",
              left: `${p.x * 100}%`,
              top: `${p.y * 100}%`,
              width: p.size,
              height: p.size,
              backgroundColor: "black",
              borderRadius: "50%",
              transform: "translate(-50%, -50%)",
            }}
          >
            {""}
          </div>
        ))}
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
        <div
        style={{
          width: "40vw",
          height: "45vh",
          backgroundColor: "peru",
          position: "relative",
        }}
      >
        {data.part2.map((i) => 
          <span
          key={i.y}
            style={{ position: "absolute", left: i.x *100, bottom: i.y*100, width: i.size, height: i.size, backgroundColor: "black", borderRadius: "50%" }}
         />
        )}

        <span style={{ position: "absolute", left: "0", bottom: "0" }}>0</span>
        <span style={{ position: "absolute", left: "95%", bottom: "95%" }}>
          100
        </span>
      </div>
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
        part 3
        <span style={{ position: "absolute", left: "0", bottom: "0" }}>0</span>
        <span style={{ position: "absolute", left: "95%", bottom: "95%" }}>
          100
        </span>
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
