import { useEffect, useState } from "react";
import { Product } from "../Entities/product";
import { useMutation, useQuery, useQueryClient } from "react-query";

// function remove(arr: Product[], item: Product) {
//   const result: Product[] = [];
//   let temp: Product;

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i].id !== item.id) {
//       result.push(arr[i]);
//     } else {
//       temp = arr[i];
//     }
//   }

//   result.push(temp);
// }

const Cart = () => {
  // const [items, setItems] = useState<Product[]>([]);
  const queryClient = useQueryClient();
  const fetchCart = () => {
    const data = localStorage.getItem("cart");

    if (data) {
      return JSON.parse(data) as Product[];
    }

    return [];
  };

  const remove = (index: number) => {
    items?.splice(index, 1);
  };

  const { data: items } = useQuery({
    queryFn: fetchCart,
    queryKey: "items",
  });

  const { mutate: mutate } = useMutation({
    mutationFn: remove,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["items"] });
    },
  });

  return (
    <>
      <div className="fixed bg-black/50 top-0 right-0 left-0 bottom-0" />
      <div className="w-[500px] p-5 rounded bg-white absolute top-10 left-1/2 -translate-x-1/2">
        <h1 className="mb-5 rounded">Cart</h1>
        <div className="flex flex-col gap-2">
          {items.map((p, index) => (
            <div
              key={index}
              className="flex items-center justify-between h-8 border px-2"
            >
              <h1>{p.name}</h1>
              <div className="flex items-center gap-4">
                <p className="before:content-['$']">{p.price}</p>
                <button
                  className="rounded w-6 h-6 hover:bg-stone-900 hover:text-white"
                  onClick={(e) => {
                    items.splice(index, 1);
                  }}
                >
                  &times;
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-5 flex px-2">
          <h1 className="font-bold">Total:</h1>
          <p>{}</p>
        </div>
      </div>
    </>
  );
};

export default Cart;
