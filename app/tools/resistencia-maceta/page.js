"use client";

import { useState } from "react";
import Header from "@/components/Header";

export default function ResistenciaMaceta() {
  const [data, setData] = useState({
    C: "",
    H_mm: "",
    t_mm: "",
    sigma_adm: "",
  });
  const [result, setResult] = useState(null);

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(
      "http://localhost:5000/api/resistencia-maceta",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      }
    );
    const json = await response.json();
    setResult(json);
  };

  return (
    <div>
      <Header />
      <main className="main">
        <h1>Verificar Restricción de Resistencia</h1>
        <form onSubmit={handleSubmit} className="form">
          <label>
            Constante C (MPa·mm):
            <input
              type="number"
              name="C"
              value={data.C}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Altura (mm):
            <input
              type="number"
              name="H_mm"
              value={data.H_mm}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Espesor (t) (mm):
            <input
              type="number"
              name="t_mm"
              value={data.t_mm}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Resistencia admisible (MPa):
            <input
              type="number"
              name="sigma_adm"
              value={data.sigma_adm}
              onChange={handleChange}
              required
            />
          </label>
          <button type="submit">Verificar</button>
        </form>
        {result && (
          <div className="result">
            <p>
              <strong>Tensión máxima calculada:</strong> {result.sigma_max} MPa
            </p>
            <p>
              <strong>Resistencia admisible:</strong> {result.sigma_adm} MPa
            </p>
            <p>
              <strong>Resultado:</strong>{" "}
              {result.cumple
                ? "Cumple la restricción"
                : "No cumple la restricción"}
            </p>
          </div>
        )}
      </main>
    </div>
  );
}
