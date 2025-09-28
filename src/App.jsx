import "./App.css";
import { Link } from "react-router-dom";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />

      <h1 className="text-3xl font-bold underline">Ejercicios de React</h1>
      <ul>
        <li>
          <Link to="/contador">Contador</Link>
        </li>
      </ul>
    </>
  );
}

export default App;
