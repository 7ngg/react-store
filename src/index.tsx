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
import store, { persistor } from "./store";
import { PersistGate } from "redux-persist/integration/react";

const router = createBrowserRouter(routes);
const queryClient = new QueryClient();

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <QueryClientProvider client={queryClient}>
    <ModalState>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <RouterProvider router={router} />
        </PersistGate>
      </Provider>
    </ModalState>
  </QueryClientProvider>
);
