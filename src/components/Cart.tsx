import { useMutation, useQuery, useQueryClient } from "react-query";
import { Product } from "../Entities/product";

const Cart = () => {
  const queryClient = useQueryClient();

  const fetchCart = (): Product[] => {
    const data = localStorage.getItem("cart");
    return data ? (JSON.parse(data) as Product[]) : [];
  };

  const { data: items = [] } = useQuery<Product[]>({
    queryFn: fetchCart,
    queryKey: "items",
  });

  const remove = async (index: number): Promise<Product[]> => {
    const updatedItems = [...items];
    updatedItems.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(updatedItems));
    return updatedItems;
  };

  const { mutateAsync: removeItem } = useMutation({
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
                  onClick={() => {
                    removeItem(index);
                  }}
                >
                  &times;
                </button>
              </div>
            </div>
          ))}
        </div>
        {items.length > 0 && (
          <div className="mt-5 flex px-2 justify-between">
            <h1 className="font-bold">Total:</h1>
            <p>
              {items.reduce((total, item) => total + item.price, 0).toFixed(2)}
            </p>
          </div>
        )}
      </div>
    </>
  );
};

export default Cart;
