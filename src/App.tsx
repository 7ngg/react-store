import { Outlet } from "react-router-dom";
import Footer from "./components/footer";
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
      <footer className="relative z-50">
        <Footer />
      </footer>
    </>
  );
};

export default App;
