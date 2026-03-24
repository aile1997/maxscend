import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import { WishScreen } from "./screens/WishScreen";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/:slug" element={<WishScreen />} />
        <Route path="/" element={<App />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
