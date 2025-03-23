"use client";

import { useState } from "react";
import Header from "@/components/Header";

export default function VolumenCono() {
  const [data, setData] = useState({ R: "", e: "", H: "" });
  const [result, setResult] = useState(null);

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/volumen-cono", {
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
        <h1>Calcula el Volumen del Cono</h1>
        <form onSubmit={handleSubmit} className="form">
          <label>
            Radio (R) (cm):
            <input
              type="number"
              name="R"
              value={data.R}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Espesor (e) (cm):
            <input
              type="number"
              name="e"
              value={data.e}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Altura (H) (cm):
            <input
              type="number"
              name="H"
              value={data.H}
              onChange={handleChange}
              required
            />
          </label>
          <button type="submit">Calcular</button>
        </form>
        {result && (
          <div className="result">
            <p>
              <strong>Volumen de la pared del cono:</strong> {result.volumen}{" "}
              cm³
            </p>
          </div>
        )}
      </main>
    </div>
  );
}
