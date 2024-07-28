import { Outlet } from "react-router-dom";
import Navbar from "./components/navbar";

const App = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default App;
