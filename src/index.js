import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

setTimeout(() => {
  setInterval(() => {
    const clock = document.getElementById("clock");
    if (clock) {
      clock.innerText = new Date().toLocaleTimeString();
    }
  }, 1000);
}, 0);

const root = ReactDOM.createRoot(document.getElementById("root"));
document.body.style.backgroundImage = `url("/Brown Aesthetic Desktop Wallpaper.png")`;
document.body.style.backgroundSize = "cover";
document.body.style.backgroundRepeat = "no-repeat";
document.body.style.backgroundPosition = "center";
document.body.style.margin = "0";
document.body.style.minHeight = "100vh";

root.render(
  <React.StrictMode>
    <div
      className='card'
      style={{
        padding: "2rem",
        borderRadius: "20px",
        maxWidth: "400px",
        margin: "50px auto",
        color: "white",
        textAlign: "center",
        backgroundColor: "transparent", 
        boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
      }}
    >
      <img
        src='react-logo@3x.svg'
        alt='React Logo'
        style={{ width: "100px", marginBottom: "1rem" }}
      />
      <h2>React Workshop</h2>
      <p>
        <strong>Description:</strong> Learn React basics in this hands-on
        workshop.
      </p>
      <p>
        <strong>Event Date:</strong> April 20, 2025
      </p>
      <p>
        <strong>Event Time:</strong> 4:00 PM
      </p>
      <p>
        <strong>Current Time:</strong> <span id='clock'>Loading...</span>
      </p>
      <h2
        style={{
          color: "#2E294E	",
          fontSize: "1rem",
          marginTop: "2rem",
          fontWeight: "500",
          letterSpacing: "1px",
          fontStyle: "italic",
          textShadow: "1px 1px 1px rgba(255,255,255,0.1)",
        }}
      >
        Made by Viraj
      </h2>
    </div>
  </React.StrictMode>
);

reportWebVitals();
