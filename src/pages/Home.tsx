import { fetchProducts } from "../api/store";
import Button from "../components/button";
import ItemCard from "../components/itemCard";
import { useEffect, useState } from "react";
import { Product } from "../Entities/product";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/slider.css";

const Home = () => {
  const [carouselData, setCarouselData] = useState<Product[]>([]);

  useEffect(() => {
    console.log("a");
    fetchProducts().then((r) => setCarouselData(r));
  }, []);

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
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <main className="flex flex-col overflow-y-hidden overflow-x-hidden items-center">
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
        <div className="mb-20 w-11/12">
          <Slider {...settings}>
            {carouselData.map((i) => (
              <ItemCard key={i.id} item={i} />
            ))}
          </Slider>
        </div>
      </main>
    </>
  );
};

export default Home;
