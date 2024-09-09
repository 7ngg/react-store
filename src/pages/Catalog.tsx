import { useEffect, useRef, useState } from "react";
import { Oval, TailSpin } from "react-loader-spinner";
import { useQuery } from "react-query";
import { fetchProducts } from "../api/store";
import Checkbox from "../components/checkbox";
import Input from "../components/input";
import ItemCard from "../components/itemCard";
import Sidebar from "../components/sidebar";
import { Product } from "../Entities/product";
import { Sorting } from "../Entities/sorting";
import ErrorTable from "../components/errorTable";
import { AxiosError } from "axios";

const sorting = ["New", "Price ascending", "Price descending", "Rating"];

const Catalog = () => {
  const [currentSorting, setCurrentSorting] = useState<Sorting>(Sorting.NEW);
  const [search, setSearch] = useState<string>();
  const [filteredProducts, setFilteredProducts] = useState<Product[]>();
  const [mei, setMei] = useState<number>(0);

  const {
    data: products,
    isError,
    error,
    isLoading,
  } = useQuery({
    queryFn: fetchProducts,
    queryKey: ["products"],
  });

  useEffect(() => {
    if (products) {
      const filtered = search
        ? products.filter((p) =>
            p.name.toLowerCase().includes(search.toLowerCase())
          )
        : products;
      setFilteredProducts(filtered);

      if (filtered.length > 0) {
        const maxPriceProduct = filtered.reduce((prev, current) =>
          prev.price > current.price ? prev : current
        );
        setMei(maxPriceProduct.price);
      } else {
        setMei(0);
      }
    }
  }, [search, products]);

  const sortingHandler = (s: number) => {
    setCurrentSorting(s);
  };

  const seacrhHandler = (e: any) => {
    setSearch(e.target.value);
  };

  const clearSearch = () => {
    setSearch("");
    setFilteredProducts(products || []);
  };

  return (
    <div className="w-11/12 flex justify-between self-center my-10">
      <Sidebar max={mei} />
      <section className="w-full px-5">
        <div className="">
          <div className="flex justify-between catalog-header">
            <div className="container relative w-[300px] flex items-center">
              <Input
                placeholder="Search"
                onChange={seacrhHandler}
                className="w-full pr-6"
                type="text"
                value={search}
              />
              <button
                className="absolute right-2 text-xl outline-none"
                onClick={clearSearch}
              >
                &times;
              </button>
            </div>
            <div className="flex gap-3 catalog-sorting">
              {sorting.map((i, index) => (
                <button
                  onClick={() => sortingHandler(index)}
                  key={index}
                  className={`${
                    index === currentSorting
                      ? "bg-black text-white before:content-['✔'] before:pr-2"
                      : ""
                  } outline-none px-4 py-2 border border-black rounded hover:bg-black hover:text-white duration-150`}
                >
                  {i}
                </button>
              ))}
            </div>
          </div>
        </div>
        {isError ? (
          <div className="flex mt-20 justify-center">
            <ErrorTable error={error as AxiosError} />
          </div>
        ) : (
          ""
        )}
        {isLoading ? (
          <div className="flex mt-20 justify-center">
            <Oval color="black" />
          </div>
        ) : (
          <div className="mt-10 flex flex-wrap gap-3">
            {filteredProducts?.map((p) => (
              <ItemCard key={p.id} item={p} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
};

export default Catalog;
