"use client";
import { useState } from "react";

export default function CardVolumenMaceta() {
  const [showForm, setShowForm] = useState(false);
  const [data, setData] = useState({ R: "", H: "", t: "" });
  const [result, setResult] = useState(null);

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5001/api/volumen-maceta", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    const json = await response.json();
    setResult(json);
  };

  return (
    <div className="w-full bg-[#f2f3f7] rounded-xl transition-all duration-200 ease-in-out shadow-[1em_1em_1em_#d8dae0b1,-0.75em_-0.75em_1em_#ffffff] border-[1.5px] border-[#f2f3f7] hover:bg-[#d3ddf1]">
      <div className="m-5 flex flex-col gap-3">
        <div className="flex flex-col gap-1 text-gray-800">
          <h2 className="text-xl font-bold mb-2">Volumen Maceta</h2>
          <p className="text-gray-600 mb-4">
            Calcula el volumen de material de una maceta cilíndrica.
          </p>
        </div>

        {!showForm ? (
          <button
            onClick={() => setShowForm(true)}
            className="text-[#1677ff] font-semibold hover:underline"
          >
            Calcular
          </button>
        ) : (
          <div className="mt-4">
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="grid grid-cols-1 gap-4">
                <label className="flex flex-col">
                  <span className="text-sm text-gray-600 mb-1">
                    Radio externo (cm):
                  </span>
                  <input
                    type="number"
                    name="R"
                    value={data.R}
                    onChange={handleChange}
                    required
                    className="p-2 border rounded focus:ring-2 focus:ring-[#1677ff]"
                  />
                </label>
                <label className="flex flex-col">
                  <span className="text-sm text-gray-600 mb-1">
                    Altura (cm):
                  </span>
                  <input
                    type="number"
                    name="H"
                    value={data.H}
                    onChange={handleChange}
                    required
                    className="p-2 border rounded focus:ring-2 focus:ring-[#1677ff]"
                  />
                </label>
                <label className="flex flex-col">
                  <span className="text-sm text-gray-600 mb-1">
                    Espesor (cm):
                  </span>
                  <input
                    type="number"
                    name="t"
                    value={data.t}
                    onChange={handleChange}
                    required
                    className="p-2 border rounded focus:ring-2 focus:ring-[#1677ff]"
                  />
                </label>
              </div>

              <div className="flex gap-2">
                <button
                  type="submit"
                  className="bg-[#1677ff] text-white px-4 py-2 rounded hover:bg-[#4096ff]"
                >
                  Calcular
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setShowForm(false);
                    setResult(null);
                  }}
                  className="text-gray-600 hover:text-gray-800"
                >
                  Cerrar
                </button>
              </div>
            </form>

            {result && (
              <div className="mt-4 p-4 bg-white rounded-lg">
                <h3 className="font-bold mb-2">Resultados:</h3>
                <p className="text-sm">
                  <strong>Volumen Externo:</strong> {result.volumen_externo} cm³
                </p>
                <p className="text-sm">
                  <strong>Volumen Interno:</strong> {result.volumen_interno} cm³
                </p>
                <p className="text-sm">
                  <strong>Volumen Material:</strong> {result.volumen_material}{" "}
                  cm³
                </p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
