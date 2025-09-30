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
    <>
      <Header />
      <h1>Contador</h1>
      <p>El contador actual es: {count}</p>
      <div className="m-4">
        <button className="p-2 bg-blue-500 text-white" onClick={increment}>
          Incrementar
        </button>
        <button className="p-2 bg-red-500 text-white" onClick={decrement}>
          Decrementar
        </button>
        <button className="p-2 bg-green-500 text-white" onClick={reset}>
          Resetear
        </button>
      </div>
      <BackToMenu />
    </>
  );
}

export default Contador;
