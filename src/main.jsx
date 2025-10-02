import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App.jsx";
import Contador from "./excercises/Contador";
import ContadorDinamico from "./excercises/ContadorDinamico";
import ActivoInactivo from "./excercises/ActivoInactivo";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/contador" element={<Contador />} />
        <Route path="/contadordinamico" element={<ContadorDinamico />} />
        <Route path="/activoinactivo" element={<ActivoInactivo />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
