import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DJPage from "./pages/DJPage.jsx";
import MixPage from "./pages/MixPage.jsx";
import PageNotFound from "./pages/PageNotFound.jsx";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/dj/:id", element: <DJPage /> },
  { path: "/mix/:id", element: <MixPage /> },
  { path: "*", element: <PageNotFound /> }, // Catch-all route
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

window.addEventListener("load", () => {
  const preloader = document.getElementById("preloader");
  const root = document.getElementById("root");
  if (preloader && root) {
    preloader.style.display = "none";
    root.style.display = "block";
    document.body.style.backgroundImage = "url('/bg.webp')";
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundPosition = "center";
    document.body.style.backgroundRepeat = "no-repeat";
  }
});
