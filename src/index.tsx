import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import "./styles/navbar.min.css";
import {
  BrowserRouter,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import routes from "./routes";
import Navbar from "./components/navbar";

const router = createBrowserRouter(routes);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(<RouterProvider router={router} />);
