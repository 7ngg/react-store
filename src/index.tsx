import ReactDOM from "react-dom/client";
import "./styles/index.css";
import "./styles/navbar.min.css";
import "./styles/footer.min.css";
import {
  BrowserRouter,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import routes from "./routes";
import { QueryClient, QueryClientProvider } from "react-query";

const router = createBrowserRouter(routes);
const queryClient = new QueryClient();

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <QueryClientProvider client={queryClient}>
    <RouterProvider router={router} />
  </QueryClientProvider>
);
