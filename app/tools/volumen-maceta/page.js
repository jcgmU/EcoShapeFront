"use client";

import { useState } from "react";
import Header from "@/components/Header";

export default function VolumenMaceta() {
  const [data, setData] = useState({ R: "", H: "", t: "" });
  const [result, setResult] = useState(null);

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Asegúrate de que la URL apunte a tu backend (puede ser localhost:5000 durante desarrollo)
    const response = await fetch("http://localhost:5000/api/volumen-maceta", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    const json = await response.json();
    setResult(json);
  };

  return (
    <div>
      <Header />
      <main className="main">
        <h1>Calcula el Volumen de la Maceta</h1>
        <form onSubmit={handleSubmit} className="form">
          <label>
            Radio externo (cm):
            <input
              type="number"
              name="R"
              value={data.R}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Altura (cm):
            <input
              type="number"
              name="H"
              value={data.H}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Espesor (t) (cm):
            <input
              type="number"
              name="t"
              value={data.t}
              onChange={handleChange}
              required
            />
          </label>
          <button type="submit">Calcular</button>
        </form>
        {result && (
          <div className="result">
            <p>
              <strong>Volumen Externo:</strong> {result.volumen_externo} cm³
            </p>
            <p>
              <strong>Volumen Interno:</strong> {result.volumen_interno} cm³
            </p>
            <p>
              <strong>Volumen de Material:</strong> {result.volumen_material}{" "}
              cm³
            </p>
          </div>
        )}
      </main>
    </div>
  );
}
