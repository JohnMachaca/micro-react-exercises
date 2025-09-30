import { Link } from "react-router-dom";

function BackToMenu() {
  return (
    <div className=" w-full  mx-auto flex bg-blue-300 p-4 justify-center items-center  mt-4">
      <div className="text-center  ">
        <Link to="/" className="text-blue-500  underline">
          Volver al menú
        </Link>
      </div>
    </div>
  );
}

export default BackToMenu;
