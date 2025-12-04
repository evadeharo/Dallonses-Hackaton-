import "./App.css";

function App() {
  const audio = document.querySelector("audio");
  if (!audio) return;

  audio.volume = 0.9;
  audio.controls = false;

  return (
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
  );
}

export default App;
