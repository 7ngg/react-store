import Home from "./pages/Home";
import Error from "./pages/Error";
import About from "./pages/About";
import App from "./App";
import News from "./pages/News";
import Catalog from "./pages/Catalog";
import Cart from "./pages/Cart";

const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/news", element: <News /> },
      { path: "/catalog", element: <Catalog /> },
      { path: "/cart", element: <Cart /> },
    ],
  },
];

export default routes;
