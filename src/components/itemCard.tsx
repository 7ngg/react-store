import { Product } from "../Entities/product";
import Button from "./button";

interface ItemCardProps {
  item: Product;
}

const ItemCard = ({ item }: ItemCardProps) => {
  const handler = (p: Product) => {
    let data = localStorage.getItem("cart");

    if (!data) {
      const products = [p];
      localStorage.setItem("cart", JSON.stringify(products));
    } else {
      let products = JSON.parse(data) as Product[];
      products.push(p);
      localStorage.removeItem("cart");
      localStorage.setItem("cart", JSON.stringify(products));
    }

    console.log(localStorage.getItem("cart"));
  };

  return (
    <div className="cursor-pointer p-2 border border-stone-400 shadow hover:scale-[103%] w-[300px] flex flex-col gap-4 rounded duration-200 hover:shadow-xl">
      <div className="h-3/5 w-full">
        <img
          className="w-full h-full rounded object-cover"
          src={item.imgUrl}
          alt=""
        />
      </div>
      <div>
        <h1>{item.name}</h1>
        <p className="font-bold before:content-['$']">{item.price}</p>
        <button
          className="px-4 py-2 border border-stone-900 rounded"
          onClick={() => handler(item)}
        >
          Buy now
        </button>
      </div>
    </div>
  );
};

export default ItemCard;
