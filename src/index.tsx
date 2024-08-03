import ReactDOM from "react-dom/client";
import "./styles/index.css";
import "./styles/navbar.min.css";
import "./styles/footer.min.css";
import "./styles/scrollbar.css";
import "./styles/cart.min.css";
import "./styles/sidebar.min.css";
import "./styles/animations.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import routes from "./routes";
import { QueryClient, QueryClientProvider } from "react-query";
import { ModalState } from "./contexts/modalContext";
import { Provider } from "react-redux";
import store from "./store";

const router = createBrowserRouter(routes);
const queryClient = new QueryClient();

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);
root.render(
  <QueryClientProvider client={queryClient}>
    <ModalState>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </ModalState>
  </QueryClientProvider>,
);
