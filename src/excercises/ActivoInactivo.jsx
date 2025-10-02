import React from "react";
import { useState } from "react";

function ActivoInactivo() {
  const [activo, setActivo] = useState(false);
  const handle = () => {
    setActivo(!activo);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold mb-4">Activo/Inactivo</h1>
      <button
        onClick={handle}
        className="p-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
      >
        {activo ? "Activo" : "Inactivo"}
      </button>
      {/* Bloque de código responsive */}
      <div className="max-w-md bg-gray-800 rounded-lg p-3 sm:p-4 overflow-x-auto">
        <h2 className="text-lg sm:text-xl lg:text-2xl font-bold underline text-center mb-4 text-white">
          Solución
        </h2>
        <pre className="text-xs sm:text-sm">
          <code className="language-jsx text-green-400">
            {`import { useState } from 'react';
export function App(props) {
  const [activo, setActivo] = useState(false);
  const handle = () => {
    setActivo(!activo);
  };

  return (
    <div className='App'>
      <h1>Activo/inactivo</h1>
      <button onClick={handle}>{activo ? 'Activo' : 'Inactivo'}</button>
    </div>
  );
}
`}
          </code>
        </pre>
      </div>
    </div>
  );
}
export default ActivoInactivo;
