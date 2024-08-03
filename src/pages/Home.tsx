import { fetchProducts } from "../api/store";
import Button from "../components/button";
import ItemCard from "../components/itemCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/slider.css";

import titleVid from "../assets/title_vid.mp4";
import { useQuery } from "react-query";
import { ThreeDots } from "react-loader-spinner";

const Home = () => {
  const { data: products, isLoading } = useQuery({
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
        <video autoPlay loop muted>
          <source src={titleVid} type="video/mp4" />
        </video>
        <div className="text-white h-[350px] w-[400px] rounded backdrop-blur bg-slate-950/50 flex flex-col items-center justify-center gap-2 absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-[180%]">
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
        {isLoading ? (
          <div className="flex justify-center">
            <ThreeDots color="black" />
          </div>
        ) : (
          <div className="mb-20 w-11/12">
            <Slider {...settings}>
              {products?.map((i) => <ItemCard key={i.id} item={i} />)}
            </Slider>
          </div>
        )}
      </main>
    </>
  );
};

export default Home;
