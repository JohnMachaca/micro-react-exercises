import { useState } from "react";
import BackToMenu from "../components/BackToMenu";
import Header from "../components/Header";
import "../App.css";

function Contador() {
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
      <main className="flex-grow container mx-auto bg-gray-200 p-4 flex flex-col items-center justify-center">
        <h1>Contador</h1>
        <p>El contador actual es: {count}</p>
        <div className="m-4 flex p-4">
          <button
            className="p-4 rounded-md bg-blue-500 text-white m-2"
            onClick={increment}
          >
            Incrementar
          </button>
          <button
            className="p-4 rounded-md bg-red-500 text-white m-2"
            onClick={decrement}
          >
            Decrementar
          </button>
          <button
            className="p-4 rounded-md bg-green-500 text-white m-2"
            onClick={reset}
          >
            Resetear
          </button>
        </div>
      </main>
      <BackToMenu />
    </div>
  );
}

export default Contador;
