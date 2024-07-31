import { useMutation, useQuery, useQueryClient } from "react-query";
import { Product } from "../Entities/product";
import TrashIcon from "./icons/trashIcon";

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
    <div className="h-[400px] flex flex-col justify-between">
      {items.length <= 0 && (
        <div>
          <h1>Your cart is empty</h1>
        </div>
      )}
      <div className="flex flex-col gap-2 overflow-scroll overflow-x-hidden">
        {items.map((p, index) => (
          <div
            key={index}
            className="cart-item"
          >
            <h1>{p.name}</h1>
            <div className="flex items-center gap-4">
              <p className="before:content-['$']">{p.price}</p>
              <button
                className="outline-none"
                onClick={() => {
                  removeItem(index);
                }}
              >
                <TrashIcon color="black" />
              </button>
            </div>
          </div>
        ))}
      </div>
      {items.length > 0 && (
        <div className="mt-5 flex px-2 justify-between">
          <h1 className="font-bold">Total:</h1>
          <p className="before:content-['$']">
            {items.reduce((total, item) => total + item.price, 0).toFixed(2)}
          </p>
        </div>
      )}
    </div>
  );
};

export default Cart;
