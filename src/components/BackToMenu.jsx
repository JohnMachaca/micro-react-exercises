import { Link } from "react-router-dom";

function BackToMenu() {
  return (
    <div className="container mx-auto flex bg-blue-300 p-4 justify-center items-center ">
      <div>
        <Link to="/" className="text-blue-500 underline">
          Volver al menú
        </Link>
      </div>
    </div>
  );
}

export default BackToMenu;
