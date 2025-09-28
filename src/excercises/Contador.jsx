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
  };
  const reset = () => {
    setCount(0);
  };

  return (
    <>
      <Header />
      <h1>Contador</h1>
      <p>El contador actual es: {count}</p>
      <button onClick={increment}>Incrementar</button>
      <button onClick={decrement}>Decrementar</button>
      <button onClick={reset}>Resetear</button>
      <BackToMenu />
    </>
  );
}

export default Contador;
