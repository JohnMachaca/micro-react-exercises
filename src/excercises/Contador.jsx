import { useState } from "react";
import BackToMenu from "../components/BackToMenu";
import Header from "../components/Header";
import "../App.css";
import Prism from "prismjs";
import "prismjs/components/prism-jsx";
import "prismjs/themes/prism-tomorrow.css";
import { useEffect } from "react";
//todo ok
function Contador() {
  useEffect(() => {
    Prism.highlightAll();
  }, []);
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
    if (count <= 0) {
      setCount(0);
    }
  };
  const reset = () => {
    setCount(0);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 bg-gray-100 p-2 sm:p-4 lg:p-6 flex flex-col items-center justify-center max-w-full">
        <div className="w-full max-w-4xl mx-auto px-2 sm:px-4">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold underline text-center mb-4">
            Ejercicio 1
          </h2>
          <p className="text-sm sm:text-base lg:text-lg mb-6 text-center px-2">
            Cree un contador que tenga 3 botones: incrementar, decrementar y
            resetear. El contador debe mostrar el valor actual y no permitir
            valores negativos.
          </p>
          <h3 className="text-lg sm:text-xl lg:text-2xl font-bold underline text-center mb-4">
            Contador
          </h3>
          <p className="text-lg sm:text-xl lg:text-2xl text-center mb-6">
            El contador actual es: {count}
          </p>

          {/* Botones responsive - vertical en móvil, horizontal en desktop */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-6">
            <button
              className="w-full sm:w-auto px-4 py-3 sm:px-6 sm:py-4 rounded-md bg-blue-500 hover:bg-blue-600 text-white text-sm sm:text-base lg:text-lg font-medium transition-colors"
              onClick={increment}
            >
              Incrementar
            </button>
            <button
              className="w-full sm:w-auto px-4 py-3 sm:px-6 sm:py-4 rounded-md bg-red-500 hover:bg-red-600 text-white text-sm sm:text-base lg:text-lg font-medium transition-colors"
              onClick={decrement}
            >
              Decrementar
            </button>
            <button
              className="w-full sm:w-auto px-4 py-3 sm:px-6 sm:py-4 rounded-md bg-green-500 hover:bg-green-600 text-white text-sm sm:text-base lg:text-lg font-medium transition-colors"
              onClick={reset}
            >
              Resetear
            </button>
          </div>
          {/* Bloque de código responsive */}
          <div className="w-full bg-gray-800 rounded-lg p-3 sm:p-4 overflow-x-auto">
            <pre className="text-xs sm:text-sm">
              <code className="language-jsx text-green-400">
                {`// Código del contador
const [count, setCount] = useState(0);

const increment = () => {
  setCount(count + 1);
};

const decrement = () => {
  setCount(count - 1);
  if (count <= 0) {
    setCount(0);
  }
};

const reset = () => {
  setCount(0);
};

// JSX del contador
<p>El contador actual es: {count}</p>
<div className="flex flex-col sm:flex-row gap-3">
  <button onClick={increment}>
    Incrementar
  </button>
  <button onClick={decrement}>
    Decrementar
  </button>
  <button onClick={reset}>
    Resetear
  </button>
</div>`}
              </code>
            </pre>
          </div>
        </div>
      </main>
      <BackToMenu />
    </div>
  );
}

export default Contador;
