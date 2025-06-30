import React, { useState } from 'react';
import { useCart } from '../../../context/CartContext';
import PaystackCheckout from '../../../components/PaystackCheckout';
import { Link } from 'react-router-dom';
import { FaTrash } from 'react-icons/fa';
import { IoIosArrowRoundBack } from 'react-icons/io';

const Cart = () => {
  const [email, setEmail] = useState('');
  const {
    cartItems,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
  } = useCart();

  const totalAmount = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <section className="py-12 px-4 md:mt-20 min-h-screen bg-[#71a117]">
      <div className="max-w-4xl mx-auto">

        <h2 className="text-3xl font-bold mb-8 text-center text-white">Your Cart</h2>
        {cartItems.length > 0 && (
          <Link
            to="/shop"
            className=" text-white transition flex items-center gap-2 text-md py-2 "
          >
            <IoIosArrowRoundBack /> Continue Shopping
          </Link>
        )}


        {cartItems.length === 0 ? (
          <p className="text-center text-white text-lg">Your cart is empty.</p>
        ) : (
          <>
            <div className="space-y-6">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex flex-col md:flex-row items-center justify-between gap-4 bg-white p-4 rounded-lg shadow"
                >
                  <div className="flex items-center gap-4 w-full md:w-1/2">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-24 h-24 object-cover rounded-md border"
                    />
                    <div>
                      <h2 className='font-bold text-2xl'>{item.name}</h2>
                      <p className="text-gray-600 text-sm">₵{item.price} each</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <button
                      onClick={() => decreaseQuantity(item.id)}
                      className="px-2 py-1 bg-gray-100 rounded text-lg font-bold"
                    >
                      -
                    </button>
                    <span className="font-semibold border px-2">{item.quantity}</span>
                    <button
                      onClick={() => increaseQuantity(item.id)}
                      className="px-2 py-1 bg-gray-100 rounded text-lg font-bold"
                    >
                      +
                    </button>
                  </div>

                  <div>
                    <p className="text-green-700  font-bold text-xl">
                      ₵{item.price * item.quantity}
                    </p>
                  </div>

                  <div className="">

                    <button
                      onClick={() => {
                        const confirmed = window.confirm('Are you sure you want to delete this item?')
                        if(confirmed) {
                          removeFromCart(item.id)
                        }
                        }}
                      className="text-red-600 text-lg hover:underline"
                    >
                      <FaTrash />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Summary + Paystack */}
            <div className="mt-10 bg-white shadow-md p-6 rounded-md text-center">
              <h3 className="text-2xl font-bold mb-4">Total: ₵{totalAmount}</h3>

              <input
                type="email"
                placeholder="Enter your email before paying"
                className="border px-4 py-2 rounded-md w-full md:w-1/2 mb-4"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              {email ? (
                <PaystackCheckout
                  email={email}
                  amount={totalAmount}
                  productName="Cart Purchase"
                />
              ) : (
                <p className="text-red-500 mb-4">Enter your email to proceed</p>
              )}


            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default Cart;
