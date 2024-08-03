import { useMutation, useQuery, useQueryClient } from "react-query";
import { Product } from "../Entities/product";
import { useAppDispatch, useAppSelector } from "../hooks";
import { clear, removeItem } from "../store/slices/cartSlice";
import Button from "./button";
import TrashIcon from "./icons/trashIcon";

const Cart = () => {
  const dispatch = useAppDispatch();

  const items = useAppSelector((state) => state.cart.list);

  return (
    <div className="h-[400px] flex flex-col justify-between">
      {items.length <= 0 && (
        <div>
          <h1>Your cart is empty</h1>
        </div>
      )}
      <div className="flex flex-col gap-2 overflow-scroll overflow-x-hidden">
        {items.map((p, index) => (
          <div key={p.id} className="cart-item">
            <h1>{p.name}</h1>
            <div className="flex items-center gap-4">
              <p className="before:content-['$']">{p.price}</p>
              <button
                className="outline-none"
                onClick={() => dispatch(removeItem(index))}
              >
                <TrashIcon color="black" />
              </button>
            </div>
          </div>
        ))}
      </div>
      {items.length > 0 && (
        <div className="flex flex-col gap-4">
          <div className="mt-5 flex px-2 justify-between">
            <h1 className="font-bold">Total:</h1>
            <p className="before:content-['$']">
              {items.reduce((total, item) => total + item.price, 0).toFixed(2)}
            </p>
          </div>
          <Button
            text="Proceed to checkout"
            type={undefined}
            className="w-full hover:bg-stone-900 hover:text-white duration-200"
            onClick={() => dispatch(clear())}
          />
        </div>
      )}
    </div>
  );
};

export default Cart;
