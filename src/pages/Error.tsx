import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="bg-stone-300 flex flex-col gap-10 p-5 justify-center items-center w-full h-screen border border-black shadow">
      <div>
        <h1 className="font-bold text-4xl">Oops...</h1>
        <p>Looks like this page does not exist</p>
      </div>
      <Link
        to="/"
        className="px-4 py-2 border border-black rounded hover:bg-black hover:text-white active:scale-95 duration-200"
      >
        Home
      </Link>
    </div>
  );
};

export default Error;
