import { useState } from "react";
import { useQuery } from "react-query";
import { fetchProducts } from "../api/store";
import Checkbox from "../components/checkbox";
import Input from "../components/input";
import ItemCard from "../components/itemCard";
import { Sorting } from "../Entities/sorting";

const sorting = ["New", "Price ascending", "Price descending", "Rating"];

const Catalog = () => {
  const [currentSorting, setCurrentSorting] = useState<Sorting>(Sorting.NEW);

  const {
    data: products,
    isError,
    error,
  } = useQuery({
    queryFn: fetchProducts,
    queryKey: ["products"],
  });

  const sortingHandler = (s: number) => {
    setCurrentSorting(s);
  };

  return (
    <div className="w-11/12 flex justify-between self-center mt-10">
      <aside className="h-[700px] sticky w-1/6 min-h-5/6 p-2 border border-stone-400 rounded shadow flex flex-col gap-3">
        <div>
          <h1 className="mb-4">Keywords</h1>
          <Checkbox label="Label" description="Description" />
          <Checkbox label="Label" description="Description" />
          <Checkbox label="Label" description="Description" />
        </div>
        <div>
          <div className="flex justify-between">
            <p>Label</p>
            <p className="before:content-['$']">0-100</p>
          </div>
          <input type="range" className="w-full outline-none" />
        </div>
        <div>
          <h1 className="mb-4">Color</h1>
          <Checkbox label="Label" />
          <Checkbox label="Label" />
          <Checkbox label="Label" />
        </div>
        <div>
          <h1 className="mb-4">Size</h1>
          <Checkbox label="Label" />
          <Checkbox label="Label" />
          <Checkbox label="Label" />
        </div>
      </aside>
      <section className="w-full px-5">
        <div className="">
          <div className="flex justify-between">
            <Input placeholder="Search" className="w-[300px]" type="text" />
            <div className="flex gap-3">
              {sorting.map((i, index) => (
                <button
                  onClick={() => sortingHandler(index)}
                  key={index}
                  className={`${index === currentSorting ? "bg-stone-900 text-white" : ""} outline-none px-4 py-2 border border-black rounded hover:bg-stone-900 hover:text-white duration-150`}
                >
                  {i}
                </button>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-10 flex flex-wrap gap-3">
          {products?.map((p) => <ItemCard key={p.id} item={p} />)}
        </div>
      </section>
    </div>
  );
};

export default Catalog;
