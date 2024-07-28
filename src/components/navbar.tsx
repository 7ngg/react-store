import { Link } from "react-router-dom";
import ProfileIcon from "./icons/profileIcon";
import SettingsIcon from "./icons/settingsIcon";

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
      <div className="h-[50px] bg-stone-900 text-white flex sticky w-full items-center justify-evenly">
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
          {links.map((i, index) => (
            <Link
              key={index}
              className="nav-item py-1 px-4 rounded transition"
              to={i.path}
            >
              {i.text}
            </Link>
          ))}
        </div>
        <div className="flex gap-3">
          {/*TODO: Proper svg icons*/}
          <Link to="">
            <SettingsIcon color="white" />
          </Link>
          <Link to="/signin">
            <ProfileIcon color="white" />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
