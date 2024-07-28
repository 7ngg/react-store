import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
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
  {
    path: "/signup",
    element: <SignUp />,
  },
];

export default routes;
