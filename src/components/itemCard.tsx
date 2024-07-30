import { Product } from "../Entities/product";

interface ItemCardProps {
  item: Product;
}

const ItemCard = ({ item }: ItemCardProps) => {
  return (
    <div className="cursor-pointer p-2 border border-stone-400 shadow hover:scale-[103%] w-[300px] flex flex-col gap-4 rounded duration-200 hover:shadow-xl">
      <div className="h-3/5 w-full">
        <img className="w-full h-full rounded object-cover" src={item.imgUrl} alt="" />
      </div>
      <div>
        <h1>{item.name}</h1>
        <p className="font-bold before:content-['$']">{item.price}</p>
      </div>
    </div>
  );
};

export default ItemCard;
