import "./App.css";
import { Link } from "react-router-dom";
import Header from "./components/Header";

function App() {
  return (
    <div className="">
      <Header />
      <div className="flex flex-col items-center m-10 min-h-screen">
        <h1 className="text-3xl font-bold underline">Ejercicios de React</h1>
        <ul>
          <li>
            <Link to="/contador">Contador</Link>
          </li>
          <li>
            <Link to="/contadordinamico">Contador Dinámico</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default App;
