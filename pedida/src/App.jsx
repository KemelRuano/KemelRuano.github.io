import { useState } from "react";

function App() {
  const [noPosition, setNoPosition] = useState({ top: "50%", left: "60%" });
  const [yesClicked, setYesClicked] = useState(false);

  const moveNoButton = () => {
    const randomTop = Math.floor(Math.random() * 80) + 10; // 10–90%
    const randomLeft = Math.floor(Math.random() * 80) + 10;
    setNoPosition({ top: `${randomTop}%`, left: `${randomLeft}%` });
  };

  const sayYes = () => {
    setYesClicked(true);
  };

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(135deg, #ffdee9, #b5fffc)",
        fontFamily: "Poppins, sans-serif",
        overflow: "hidden",
      }}
    >
      {!yesClicked ? (
        <>
          <h1
            style={{
              fontSize: "2.5rem",
              color: "#ff4081",
              marginBottom: "2rem",
              textShadow: "1px 1px 4px rgba(0,0,0,0.2)",
            }}
          >
            💖 ¿Quieres ser mi novia?
          </h1>

          <div style={{ position: "relative", width: "320px", height: "220px" }}>
            <button
              onClick={sayYes}
              style={{
                padding: "12px 35px",
                fontSize: "1.1rem",
                borderRadius: "25px",
                border: "none",
                backgroundColor: "#ff69b4",
                color: "white",
                cursor: "pointer",
                boxShadow: "0 4px 10px rgba(255,105,180,0.4)",
                transition: "transform 0.2s",
              }}
              onMouseEnter={(e) => (e.target.style.transform = "scale(1.1)")}
              onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
            >
              Sí 💕
            </button>

            <button
              onMouseEnter={moveNoButton}
              style={{
                position: "absolute",
                top: noPosition.top,
                left: noPosition.left,
                padding: "12px 35px",
                fontSize: "1.1rem",
                borderRadius: "25px",
                border: "none",
                backgroundColor: "#fff176",
                cursor: "pointer",
                transition: "top 0.2s, left 0.2s",
                boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
              }}
            >
              🌻 No
            </button>
          </div>
        </>
      ) : (
        <h1
          style={{
            fontSize: "3rem",
            color: "#ff1493",
            textShadow: "2px 2px 10px rgba(255,20,147,0.6)",
            animation: "pop 1s ease forwards",
          }}
        >
          💞 TE AMO SHAUNNY 💞
        </h1>
      )}
    </div>
  );
}

export default App;
