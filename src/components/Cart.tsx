import { useAppDispatch, useAppSelector } from "../hooks";
import { clear, removeItem } from "../store/slices/cartSlice";
import Button from "./button";
import TrashIcon from "./icons/trashIcon";

const CartForm = () => {
  const dispatch = useAppDispatch();

  let items = useAppSelector((state) => state.cart.list);

  return (
    <div className="w-9/12 h-full mt-4 flex flex-col justify-between py-4">
      {items.length <= 0 && (
        <div className="h-full w-full flex items-center justify-center text-2xl font-bold">
          <h1>Your cart is empty...</h1>
        </div>
      )}
      <div className="flex flex-col gap-2 overflow-scroll overflow-x-hidden">
        {items.map((p) => (
          <div key={p.uuid} className="cart-item">
            <h1>{p.name}</h1>
            <div className="flex items-center gap-4">
              <p className="before:content-['$']">{p.price}</p>
              <button
                className="outline-none"
                onClick={() => dispatch(removeItem(p.uuid))}
              >
                <TrashIcon color="black" />
              </button>
            </div>
          </div>
        ))}
      </div>
      {items.length > 0 && (
        <div className="flex flex-col gap-4 mb-4">
          <div className="mt-5 flex px-2 justify-between">
            <h1 className="font-bold">Total:</h1>
            <p className="before:content-['$']">
              {items.reduce((total, item) => total + item.price, 0).toFixed(2)}
            </p>
          </div>
          <Button
            text="Proceed to checkout"
            type={undefined}
            className="w-full hover:bg-black hover:text-white duration-200"
            onClick={() => dispatch(clear())}
          />
        </div>
      )}
    </div>
  );
};

export default CartForm;
