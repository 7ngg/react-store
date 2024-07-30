import { Outlet } from "react-router-dom";
import Navbar from "./components/navbar";

const App = () => {
  return (
    <>
      <header className="relative z-50">
        <Navbar />
      </header>
      <main className="mt-[50px]">
        <Outlet />
      </main>
    </>
  );
};

export default App;
