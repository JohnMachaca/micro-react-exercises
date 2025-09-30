import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-blue-500 text-white p-4 shadow-md ">
      <div className="container   mx-auto flex p-4 justify-between items-center ">
        <h2 className="text-2xl font-bold text-white ">Ejercicios</h2>
        <nav>
          <ul>
            <li>
              <Link className=" text-white font-bold" to="/">
                Inicio
              </Link>
            </li>
          </ul>
        </nav>
        <p className="text-lg font-bold">John Williams</p>
      </div>
    </header>
  );
};

export default Header;
