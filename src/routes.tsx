import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SingIn";
import Error from "./pages/Error";
import About from "./pages/About";
import App from "./App";

const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/signin", element: <SignIn /> },
      { path: "/signup", element: <SignUp /> },
      { path: "/about", element: <About /> },
    ],
  },
];

export default routes;
