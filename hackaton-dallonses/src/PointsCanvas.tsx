// src/PointsCanvas.tsx

export default function PointsCanvas({ points }) {
  return (
    <div style={{ position: "relative", width: "100%", height: "100%" }}>
      {points.map((p, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            left: `${p.x * 100}%`,
            top: `${p.y * 100}%`,
            width: p.size,
            height: p.size,
            backgroundColor: "red",
            borderRadius: "50%",
            transform: "translate(-50%, -50%)",
          }}
        />
      ))}
    </div>
  );
}
