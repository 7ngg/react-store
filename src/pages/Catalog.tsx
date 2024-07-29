import Input from "../components/input";
import ItemCard from "../components/itemCard";

const sorting = ["New", "Price ascending", "Price descending", "Rating"];

const Catalog = () => {
  return (
    <div className="w-11/12 flex justify-between self-center mt-10">
      <aside className="w-1/6 min-h-5/6 p-2 border border-stone-400 rounded shadow">
        <h1>Keywords</h1>
        <input type="range" />
      </aside>
      <section className="w-full px-5">
        <div className="">
          <div className="flex justify-between">
            <Input placeholder="Search" className="w-[300px]" />
            <div className="flex gap-3">
              {sorting.map((i, index) => (
                <a
                  key={index}
                  href="#"
                  className="px-4 py-2 border border-black rounded hover:bg-stone-900 hover:text-white duration-150"
                >
                  {i}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-10 grid">
          <ItemCard
            title="Shawarma"
            price={3.8}
            imgUrl="https://foxeslovelemons.com/wp-content/uploads/2023/06/Chicken-Shawarma-8.jpg"
          />
        </div>
      </section>
    </div>
  );
};

export default Catalog;
