import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);

window.addEventListener("load", () => {
  const preloader = document.getElementById("preloader");
  const root = document.getElementById("root");
  if (preloader && root) {
    preloader.style.display = "none";
    root.style.display = "block";
    document.body.style.backgroundImage = "url('./public/bg.webp')";
  }
});
