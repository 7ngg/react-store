import Home from "./pages/Home";
import SignIn from "./pages/SingIn";

const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/signin",
    element: <SignIn />,
  },
];

export default routes;
