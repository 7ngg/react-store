import { fetchProducts } from "../api/store";
import Button from "../components/button";
import ItemCard from "../components/itemCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/slider.css";

import titleVid from "../assets/intro.mp4";
import { useQuery } from "react-query";
import { ThreeDots } from "react-loader-spinner";
import ErrorTable from "../components/errorTable";
import { AxiosError } from "axios";

const Home = () => {
  const {
    data: products,
    isLoading,
    error,
    isError,
  } = useQuery({
    queryFn: fetchProducts,
    queryKey: ["products"],
  });

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    swipe: true,
    draggable: true,
    autoplay: true,
    autoplaySpeed: 3000,
    adaptiveHeight: true,
    centerMode: true,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 1780,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1460,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1160,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 780,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <>
      <main className="flex flex-col overflow-y-hidden overflow-x-hidden items-center relative">
        <div className="relative h-screen w-full">
          <video className="object-cover w-full h-full" autoPlay loop muted>
            <source src={titleVid} type="video/mp4" />
          </video>
          <div className="text-white w-[90%] max-w-[400px] h-auto p-6 rounded backdrop-blur bg-slate-950/50 flex flex-col items-center justify-center gap-2 absolute left-1/2 -translate-x-1/2 bottom-1/2 ">
            <h1 className="font-bold text-4xl md:text-6xl">Title</h1>
            <h2 className="text-xl md:text-2xl">Subtitle</h2>
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
        </div>
        {isError ? (
          <ErrorTable error={error as AxiosError} />
        ) : isLoading ? (
          <div className="flex justify-center">
            <ThreeDots color="black" />
          </div>
        ) : (
          <div className="mb-20 w-11/12">
            <Slider {...settings}>
              {products?.map((i) => (
                <ItemCard key={i.id} item={i} />
              ))}
            </Slider>
          </div>
        )}
      </main>
    </>
  );
};

export default Home;
