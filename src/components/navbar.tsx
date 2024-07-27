import { Link } from "react-router-dom";

const links = [
  {
    text: "Home",
    path: "/",
  },
  {
    text: "Catalog",
    path: "/catalog",
  },
  {
    text: "News",
    path: "/news",
  },
  {
    text: "About Us",
    path: "/about",
  },
];

const Navbar = () => {
  return (
    <>
      <div className="h-[50px] bg-stone-900 text-white flex fixed w-full items-center justify-evenly">
        <div className="flex gap-1">
          <img
            className="h-8"
            src="https://i.imgur.com/ZaphNEd.png"
            alt="logo"
          />
          <Link to="/" className="text-2xl font-bold text-stone-500">
            E-commerce
          </Link>
        </div>
        <div className="flex gap-5 text-xl h-full">
          {links.map((i) => (
            <Link
              // TODO: Underline animation on hover
              className="nav-item py-1 px-4 rounded transition"
              to={i.path}
            >
              {i.text}
            </Link>
          ))}
        </div>
        <div className="flex gap-3">
          {/*TODO: Proper svg icons*/}
          <img
            className="h-8"
            src="https://i.imgur.com/PNwk7qd.png"
            alt="settings-icon"
          />
          <Link to="/signin">
            <img
              className="h-8 bg-blue"
              src="https://i.imgur.com/tgQ8cgF.png"
              alt="user-icon"
            />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
