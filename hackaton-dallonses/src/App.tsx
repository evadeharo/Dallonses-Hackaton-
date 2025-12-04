import "./App.css";
import data from "./data.json";

export default function App() {
  const { part1, part2, part3, part4 } = data;

  return (
    <main style={{ display: "flex", flexWrap: "wrap" }}>
      <div
        style={{
          width: "90vw",
          height: "90vh",
          position: "relative",
          marginTop: "5%",
        }}
      >
        {part1.map((p, i) => (
          <div
            key={i}
            style={{
              position: "absolute",
              left: `${p.x * 100}%`,
              bottom: `${p.y * 90}%`,
              width: p.size,
              height: p.size,
              backgroundColor: "green",
              borderRadius: "50%",
            }}
          >
            {""}
          </div>
        ))}
        {part2.map((p, i) => (
          <div
            key={i}
            className="pulse"
            style={{
              position: "absolute",
              left: `${p.x * 100}%`,
              bottom: `${p.y * 100}%`,
              width: p.size,
              height: p.size,
              color: "#FFD700",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            ★
          </div>
        ))}

        {part3.map((p, i) => (
          <div
            key={i}
            className="bola"
            style={{
              position: "absolute",
              left: `${p.x * 100}%`,
              bottom: `${p.y * 90}%`,
              width: p.size,
              height: p.size,
              animationDelay: `${i * 0.2}s`, // cada bola se mueve en tiempos distintos
            }}
          />
        ))}

        {part4.map((p, i) => (
          <div
            key={i}
            style={{
              position: "absolute",
              left: `${p.x * 100}%`,
              bottom: `${p.y * 90}%`,
              width: p.width,
              height: p.height,
              backgroundColor: "#6E260E",
              borderRadius: "50%",
            }}
          >
            {""}
          </div>
        ))}
      </div>
    </main>
  );
}
