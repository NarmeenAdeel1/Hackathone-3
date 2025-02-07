'use client'

import { Product } from "@/sanity/type/product"; 
import React, { useEffect, useState } from "react";
import {
  getCartItems,
  removeFromCart,
  updateCartQuantity,
} from "../actions/actions";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation"
import Header from "../../components/header";




const Cart = () => {

  const [cartItems, setCartItems] = useState<Product[]>([]);

  useEffect(() => {
    setCartItems(getCartItems());
  }, []);

  const handleRemove = (id: string) => {
  Swal.fire({
  title: "Are You Sure?",
  text: "You Will Not Able To Recover This Item!",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Yes! Remove It",

  }).then((result)=> {
    if (result.isConfirmed){
      removeFromCart(id)  
      setCartItems(getCartItems())
      Swal.fire("Removed!", "Items Has Been Removed.", "success");
    }
  })}


const handleQuantityChange =(id : string, quantity : number) => {
  updateCartQuantity(id, quantity);
  setCartItems(getCartItems())
}


const handleIncrement = (id: string) => {
  const product= cartItems.find((item) => item._id === id);
  if (product && product.inventory > 1)
    handleQuantityChange(id, product.inventory + 1 )
}


const handleDecrement = (id: string) => {
  const product = cartItems.find((item) => item._id === id);
  if (product && product.inventory > 1) {
    handleQuantityChange(id, product.inventory - 1);
  }
};

const calculatedTotal = () => {
  return cartItems.reduce((total, item) => total + item.price + item.inventory ,0) 
};


const router = useRouter()


const handledProceed = () => {
  Swal.fire({
    title: "Proceed to CheckOut",
    text: "Please Review your Cart before Chechout",
    icon: "question",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes Proceed!"  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire("success", "Your Order has been Succesfully Proceed", "success")
      router.push("/checkout")
        setCartItems([])
    }
  });
}


return (
  
  <div className="p-6 bg-gray-100 min-h-screen">
    <h1 className="text-2xl font-bold mb-6 text-gray-800">Shopping Cart</h1>

    <div className="space-y-6">
      {cartItems.length > 0 ? (
        cartItems.map((item) => (
          <div
            key={item._id}
            className="flex items-center justify-between bg-white p-4 rounded-lg shadow-md"
          >
            <div className="flex items-center">
              {item.image && (
                <Image
                  src={urlFor(item.image).url()}
                  className="w-16 h-16 object-cover rounded-lg"
                  alt="image"
                  width={500}
                  height={500}
                />
              )}
              <div className="ml-4">
                <h2 className="text-lg font-semibold">{item.productName}</h2>
                <p className="text-gray-500">Price: ${item.price}</p>
                <div className="flex items-center mt-2">
                  <button
                    onClick={() => handleDecrement(item._id)}
                    className="px-2 py-1 bg-gray-300 rounded-md hover:bg-gray-400"
                  >
                    -
                  </button>
                  <span className="mx-2">{item.inventory}</span>
                  <button
                    onClick={() => handleIncrement(item._id)}
                    className="px-2 py-1 bg-gray-300 rounded-md hover:bg-gray-400"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
            <div className="flex items-center">
              <button
                onClick={() => handleRemove(item._id)}
                className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
              >
                Remove
              </button>
            </div>
          </div>
        ))
      ) : (
        <p className="text-gray-600 text-center">Your cart is empty.</p>
      )}
    </div>

    {cartItems.length > 0 && (
      <div className="mt-8 bg-white p-4 rounded-lg shadow-md">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold">Total:</h2>
          <p className="text-xl font-bold text-gray-800">
            ${calculatedTotal().toFixed(2)}
          </p>
        </div>
        <button
          onClick={handledProceed}
          className="mt-4 w-full px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
        >
          Proceed
        </button>
      </div>
    )}
        
     
    
  </div>
);
};



// export default Cart;



export default function Home() {
  return (
    <div>
      <Header /> {/* Header ko yahan render karein */}
      <Cart /> {/* Cart ko yahan render karein */}
    </div>
  )}
