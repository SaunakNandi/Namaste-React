import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemsList";
import { clearCart } from "../utlis/cartSlice";
import React from "react";
export const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((store) => store.cart.items);
  return (
    <>
      <div className="text-center m-4 p-4">
        <h1 className="text-2xl font-bold">Cart</h1>
        <div className="w-1/2 mx-auto">
          <button
            className="bg-blue-300 font-black p-2 border-2
                     border-sky-950 rounded-lg mb-4 mt-4"
            onClick={() => dispatch(clearCart())}
          >
            Clear Cart
          </button>
          {cartItems.length === 0 && (
            <h2 className="text-2xl font-semibold">
              OOps cart is empty. Please add some item to cart
            </h2>
          )}
          <ItemList items={cartItems} display={false}></ItemList>
        </div>
      </div>
    </>
  );
};
