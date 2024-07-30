import { Link } from "react-router-dom";
import ProfileIcon from "./icons/profileIcon";
import SettingsIcon from "./icons/settingsIcon";
import { useState } from "react";
import Cart from "./Cart";

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
  const [isCartOpened, setIsCartOpened] = useState<boolean>(false);

  return (
    <>
      <div className="relative">
        <div className="fixed top-0 h-[50px] bg-stone-900 text-white flex w-full items-center justify-evenly z-50">
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
            <Link to="">
              <SettingsIcon color="white" />
            </Link>
            <Link to="/signin">
              <ProfileIcon color="white" />
            </Link>
            <a className="h-8" onClick={() => setIsCartOpened(!isCartOpened)}>
              <img
                className="h-full w-full cursor-pointer"
                src="https://i.ibb.co/SKt9XVj/icons8-shopping-cart-64.png"
                alt="cart-img"
              />
            </a>
          </div>
        </div>
      </div>
      {isCartOpened && <Cart />}
    </>
  );
};

export default Navbar;
