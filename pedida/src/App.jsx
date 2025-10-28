import { useState, useRef } from "react";

function App() {
  const [noPosition, setNoPosition] = useState({ top: "50%", left: "60%" });
  const [showLove, setShowLove] = useState(false);
  const noButtonRef = useRef(null);

  const moveNoButton = () => {
    const randomTop = Math.floor(Math.random() * 80) + 10; // 10–90%
    const randomLeft = Math.floor(Math.random() * 80) + 10;
    setNoPosition({ top: `${randomTop}%`, left: `${randomLeft}%` });
  };

  return (
    <div
      style={{
        textAlign: "center",
        background: "linear-gradient(135deg, #fdfbfb 0%, #ebedee 100%)",
        height: "100vh",
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "'Poppins', sans-serif",
        overflow: "hidden",
        padding: "1rem",
        boxSizing: "border-box",
        position: "relative"
      }}
    >
      {showLove ? (
        <h1
          style={{
            fontSize: "clamp(2rem, 6vw, 4rem)",
            color: "#ff4081",
            textAlign: "center",
            wordWrap: "break-word"
          }}
        >
          💞 TE AMO SHAUNNY 💞
        </h1>
      ) : (
        <>
          <h1
            style={{
              fontSize: "clamp(1.5rem, 5vw, 3rem)",
              color: "#444",
              marginBottom: "2rem",
              textAlign: "center"
            }}
          >
            ¿Quieres ser mi novia? 🌻
          </h1>

          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", justifyContent: "center" }}>
            <button
              onClick={() => setShowLove(true)}
              style={{
                padding: "12px 35px",
                fontSize: "1rem",
                border: "none",
                borderRadius: "12px",
                backgroundColor: "#4caf50",
                color: "white",
                cursor: "pointer",
                fontWeight: "bold"
              }}
            >
              Sí 💚
            </button>

            <button
              onMouseEnter={moveNoButton}
              onTouchStart={moveNoButton}
              ref={noButtonRef}
              style={{
                padding: "12px 35px",
                fontSize: "1rem",
                border: "none",
                borderRadius: "12px",
                backgroundColor: "#f44336",
                color: "white",
                position: "absolute",
                top: noPosition.top,
                left: noPosition.left,
                transition: "0.2s",
                cursor: "pointer",
                fontWeight: "bold"
              }}
            >
              No 🌻
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
