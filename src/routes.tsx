import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SingIn";
import Error from "./pages/Error";

const routes = [
  {
    path: "/",
    element: <Home />,
    errorElement: <Error />,
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
