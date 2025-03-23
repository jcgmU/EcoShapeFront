"use client";
import { useState } from "react";

export default function CardResistenciaMaceta() {
  const [showForm, setShowForm] = useState(false);
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
    try {
      const response = await fetch(
        "http://localhost:5001/api/resistencia-maceta",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          mode: "cors",
          credentials: "include",
          body: JSON.stringify(data),
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const json = await response.json();
      setResult(json);
    } catch (error) {
      console.error("Error:", error);
      alert("Error al procesar la solicitud");
    }
  };

  return (
    <div className="w-full bg-[#f2f3f7] rounded-xl transition-all duration-200 ease-in-out shadow-[1em_1em_1em_#d8dae0b1,-0.75em_-0.75em_1em_#ffffff] border-[1.5px] border-[#f2f3f7] hover:bg-[#d3ddf1]">
      <div className="m-5 flex flex-col gap-3">
        <div className="flex flex-col gap-1 text-gray-800">
          <h2 className="text-xl font-bold mb-2">Resistencia Maceta</h2>
          <p className="text-gray-600 mb-4">
            Verifica si el espesor de la maceta es suficiente para soportar la
            tensión.
          </p>
        </div>

        {!showForm ? (
          <button
            onClick={() => setShowForm(true)}
            className="text-[#1677ff] font-semibold hover:underline"
          >
            Verificar
          </button>
        ) : (
          <div className="mt-4">
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="grid grid-cols-1 gap-4">
                <label className="flex flex-col">
                  <span className="text-sm text-gray-600 mb-1">
                    Constante C (MPa·mm):
                  </span>
                  <input
                    type="number"
                    name="C"
                    value={data.C}
                    onChange={handleChange}
                    required
                    className="p-2 border rounded focus:ring-2 focus:ring-[#1677ff]"
                  />
                </label>
                <label className="flex flex-col">
                  <span className="text-sm text-gray-600 mb-1">
                    Altura (mm):
                  </span>
                  <input
                    type="number"
                    name="H_mm"
                    value={data.H_mm}
                    onChange={handleChange}
                    required
                    className="p-2 border rounded focus:ring-2 focus:ring-[#1677ff]"
                  />
                </label>
                <label className="flex flex-col">
                  <span className="text-sm text-gray-600 mb-1">
                    Espesor (mm):
                  </span>
                  <input
                    type="number"
                    name="t_mm"
                    value={data.t_mm}
                    onChange={handleChange}
                    required
                    className="p-2 border rounded focus:ring-2 focus:ring-[#1677ff]"
                  />
                </label>
                <label className="flex flex-col">
                  <span className="text-sm text-gray-600 mb-1">
                    Resistencia admisible (MPa):
                  </span>
                  <input
                    type="number"
                    name="sigma_adm"
                    value={data.sigma_adm}
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
                  Verificar
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
                  <strong>Tensión máxima calculada:</strong> {result.sigma_max}{" "}
                  MPa
                </p>
                <p className="text-sm">
                  <strong>Resistencia admisible:</strong> {result.sigma_adm} MPa
                </p>
                <p className="text-sm">
                  <strong>Resultado:</strong>{" "}
                  {result.cumple
                    ? "✅ Cumple la restricción"
                    : "❌ No cumple la restricción"}
                </p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
