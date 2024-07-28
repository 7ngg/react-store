import Button from "../components/button";
import Navbar from "../components/navbar";
import { Carousel } from "react-responsive-carousel";

const Home = () => {
  return (
    <>
      <main>
        <div className="h-[700px] bg-stone-300 flex flex-col items-center justify-center gap-2">
          <h1 className="font-bold text-6xl">Title</h1>
          <h2 className="text-2xl">Subtitle</h2>
          <div className="flex gap-2">
            <Button
              text="Button 1"
              className="hover:bg-black hover:text-white"
              type={undefined}
            />
            <Button
              text="Button 2"
              className="bg-black text-white hover:bg-transparent hover:text-black"
              type={undefined}
            />
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
