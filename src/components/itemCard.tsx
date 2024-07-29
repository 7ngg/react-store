interface ItemCardProps {
  imgUrl: string;
  title: string;
  price: number;
}

const ItemCard = (props: ItemCardProps) => {
  return (
    <div className="cursor-pointer p-2 border border-stone-400 shadow hover:scale-[103%] w-[200px] h-[300px] flex flex-col gap-4 rounded duration-200 hover:shadow-xl">
      <div className="h-3/5 w-full object-cover">
        <img className="w-full h-full rounded" src={props.imgUrl} alt="" />
      </div>
      <div>
        <h1>{props.title}</h1>
        <p className="font-bold before:content-['$']">{props.price}</p>
      </div>
    </div>
  );
};

export default ItemCard;
