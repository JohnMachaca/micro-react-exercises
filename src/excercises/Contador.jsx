import { useState } from "react";
import BackToMenu from "../components/BackToMenu";
import Header from "../components/Header";
import "../App.css";
import Prism from "prismjs";
import "prismjs/components/prism-jsx";
import "prismjs/themes/prism-tomorrow.css";
import { useEffect } from "react";

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
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto bg-gray-100 p-4 flex flex-col items-center justify-center">
        <h2 className="text-3xl font-bold underline">Ejercicio 1</h2>
        <p className="text-lg m-4">
          Cree un contador que tenga 3 botones: incrementar, decrementar y
          resetear. El contador debe mostrar el valor actual y no permitir
          valores negativos.
        </p>
        <h3 className="text-3xl font-bold underline">Contador</h3>
        <p className="text-2xl">El contador actual es: {count}</p>
        <div className="m-4 flex p-4">
          <button
            className="p-4 rounded-md bg-blue-500 text-white m-2 text-xl"
            onClick={increment}
          >
            Incrementar
          </button>
          <button
            className="p-4 rounded-md bg-red-500 text-white m-2 text-xl"
            onClick={decrement}
          >
            Decrementar
          </button>
          <button
            className="p-4 rounded-md bg-green-500 text-white m-2 text-xl"
            onClick={reset}
          >
            Resetear
          </button>
        </div>
        <pre>
          <code className="language-jsx">
            {`
            //esto es un comentario
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
            <p className="text-2xl">El contador actual es: {count}</p>
        <div className="m-4 flex p-4">
          <button
            className="p-4 rounded-md bg-blue-500 text-white m-2 text-xl"
            onClick={increment}
          >
            Incrementar
          </button>
          <button
            className="p-4 rounded-md bg-red-500 text-white m-2 text-xl"
            onClick={decrement}
          >
            Decrementar
          </button>
          <button
            className="p-4 rounded-md bg-green-500 text-white m-2 text-xl"
            onClick={reset}
          >
            Resetear
          </button>
        </div>
            
            `}
          </code>
        </pre>
      </main>
      <BackToMenu />
    </div>
  );
}

export default Contador;
