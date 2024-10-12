import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart, updateQuantity } from "../redux/cartSlice";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import Payment from "./Payment";

function Cart() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const handleQuantityChange = (id, quantity) => {
    if (quantity >= 1) {
      dispatch(updateQuantity({ id, quantity }));
    }
  };

  return (
    <div className="mt-36">
      <div className="flex gap-1 bg-[#F6F7F8] items-center justify-center text-[14px] py-4">
        <span className="text-[#33A0FF]">Home</span>

        <span className="text-[8px] text-[#C1C8CE]">/</span>

        <span>Hot Deal</span>

        <span className="text-[8px] text-[#C1C8CE]">/</span>

        <span>Nike Airmax 270 React</span>
      </div>

      <div className="flex items-center justify-center px-28">
        <table className="text-left mt-8 mb-20 w-full">
          <thead>
            <tr className="border-b-2 border-b-[#F6F7F8]">
              <th className="py-4 pr-4"></th>

              <th className="p-4 font-medium">PRODUCT</th>

              <th className="p-4 font-medium">PRICE</th>

              <th className="p-4 font-medium">QTY</th>

              <th className="py-4 pl-4 font-medium">UNIT PRICE</th>
            </tr>
          </thead>

          <tbody>
            {cartItems.map((item) => (
              <tr key={item.id} className="border-b-2 border-b-[#F6F7F8]">
                <td className="py-4 pr-4 text-center">
                  <button
                    className="text-red-500 text-[14px] bg-[#F6F7F8] py-1 px-3 rounded-full"
                    onClick={() => dispatch(removeFromCart(item.id))}
                  >
                    x
                  </button>
                </td>

                <td className="p-4 flex items-center py-10">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="ml-3 size-28 mr-5 bg-[#F6F7F8] p-4 rounded-md"
                  />

                  <span className="">{item.title}</span>
                </td>

                <td className="p-4">
                  <span>${(item.price * item.quantity).toFixed(2)}</span>
                </td>

                <td>
                  <div className="flex items-center justify-center gap-x-4 px-4 py-2 rounded-md bg-[#F6F7F8] w-fit">
                    <button
                      onClick={() =>
                        handleQuantityChange(item.id, item.quantity - 1)
                      }
                      className="py-1 text-[#03A9F4] font-semibold"
                    >
                      -
                    </button>

                    <span className="text-[14px]">{item.quantity}</span>

                    <button
                      onClick={() =>
                        handleQuantityChange(item.id, item.quantity + 1)
                      }
                      className="py-1 text-[#03A9F4] font-semibold"
                    >
                      +
                    </button>
                  </div>
                </td>

                <td className="pl-4 py-4">
                  <span className="">${item.price.toFixed(2)}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex items-start justify-between px-36 pb-28 flex-wrap gap-y-10">
        <div>
          <form className="border-2 border-[#F1F3F4] rounded-md w-[370px] flex">
            <input
              type="text"
              name="search"
              placeholder="Voucher code"
              className="w-[250px] pl-5 py-3 outline-none"
            />

            <button className="py-3 px-7 bg-[#33A0FF] text-white">
              Redeem
            </button>
          </form>
        </div>

        <div>
          <div className="flex justify-between items-start pb-4 text-[14px] gap-60">
            <span>Subtotal</span>

            <span>${totalPrice.toFixed(2)}</span>
          </div>

          <div className="flex justify-between items-start pb-4 text-[14px]">
            <span>Shipping fee</span>

            <span>$20</span>
          </div>

          <div className="flex justify-between items-start pb-4 text-[14px] border-b-2 border-[#F6F7F8]">
            <span>Coupon</span>

            <span>No</span>
          </div>

          <div className="flex justify-between items-start py-4 font-medium text-[18px] text-[#262626]">
            <span>TOTAL</span>

            <span>${(totalPrice + 20).toFixed(2)}</span>
          </div>

          <Popup
            trigger={
              <button className="bg-[#33A0FF] text-white rounded-md px-32 py-3">
                Check out
              </button>
            }
            modal
            nested
            contentStyle={{ borderRadius: "8px" }}
          >
            {(close) => <Payment onClose={close} />}
          </Popup>
        </div>
      </div>
    </div>
  );
}

export default Cart;
