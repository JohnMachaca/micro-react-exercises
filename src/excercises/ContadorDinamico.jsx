import { useState } from "react";
import BackToMenu from "../components/BackToMenu";
import Header from "../components/Header";
import "../App.css";

function Contador() {
  const [count, setCount] = useState(0);
  const [aumentar, setAumentar] = useState(0);

  const increment = () => {
    setCount(count + aumentar);
  };

  const decrement = () => {
    setCount(count - aumentar);
  };
  const reset = () => {
    setCount(0);
  };
  const handleChange = (e) => {
    const newNumber = parseInt(e.target.value);
    setAumentar(isNaN(newNumber) ? 0 : newNumber);
  };
  return (
    <>
      <Header />
      <h1>Contador Dinámico</h1>
      <input type="number" value={aumentar} onChange={handleChange} />
      <p>El contador actual es: {count}</p>
      <button className="p-2  bg-blue-500 text-white" onClick={increment}>
        Incrementar
      </button>
      <button className="p-2 bg-red-500 text-white" onClick={decrement}>
        Decrementar
      </button>
      <button className="p-2 bg-green-500 text-white" onClick={reset}>
        Resetear
      </button>
      <BackToMenu />
    </>
  );
}

export default Contador;
