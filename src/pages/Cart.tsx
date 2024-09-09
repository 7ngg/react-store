import React from "react";
import CartForm from "../components/Cart";

const Cart: React.FC = () => {
  return (
    <div className="container my-8 flex justify-center bg-white w-9/12 h-[80vh] rounded border border-black">
      <CartForm />
    </div>
  );
};

export default Cart;
