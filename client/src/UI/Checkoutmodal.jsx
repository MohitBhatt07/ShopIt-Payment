import React, { useState } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import { resetCart } from "../redux/ShopItSlice";
import StripeCheckout from "react-stripe-checkout";

const Checkoutmodal = (props) => {
  const dispatch = useDispatch();
  const [isBuyPhase, setIsBuyPhase] = useState(true);

  const payment = async (token) => {
    await axios.post("http://localhost:8000/pay", {
      amount: props.total * 100,
      token: token,
    });
  };

  const buyProducts = () => {
    setIsBuyPhase(false);
    dispatch(resetCart());
  };

  return (
    <div className="bg-purple-300 z-20 shadow-2xl shadow-violet-400 p-6 flex flex-col gap-5 w-2/5 rounded-2xl absolute top-28 left-1/3">
      {isBuyPhase ? (
        <>
          <span className="text-2xl text-center">Total = ${props.total}</span>
          <button className="bg-green-400 rounded-lg p-3" onClick={buyProducts}>
            Buy
          </button>
        </>
      ) : (
        <div>
          <div className="w-full mt-6 flex items-center justify-center">
            <StripeCheckout
              stripeKey="pk_test_51LXpmzBcfNkwYgIPXd3qq3e2m5JY0pvhaNZG7KSCklYpVyTCVGQATRH8tTWxDSYOnRTT5gxOjRVpUZmOWUEHnTxD00uxobBHkc"
              name="Bazar Online Shopping"
              amount={props.total * 100}
              label="Pay Now"
              description={`Your Payment amount is $${props.total *100}`}
              token={payment}
              email={"bhattasdsa"}
            />
          </div>
          <span className="text-4xl text-center mb-3 font-bold">Bought</span>
        </div>
      )}

      <button className="bg-red-400 rounded-lg p-3" onClick={props.onClose}>
        Close
      </button>
    </div>
  );
};

export default Checkoutmodal;
