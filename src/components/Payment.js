import { CheckCircleIcon } from "@heroicons/react/24/solid";
import React from "react";
import { Link } from "react-router-dom";

function Payment() {
  return (
    <div className="flex flex-col border  text-sm shadow-md border-slate-200 p-5 gap-4 bg-white text-white rounded-md  text-thin font-medium">
      <div className="bg-regal-green rounded-lg py-4 px-6">
        <span className="flex justify-between items-center font-semibold ">
          <CheckCircleIcon className="w-4" />
          <Link>VISA</Link>
        </span>
        <span className="flex gap-2 my-4">
          <p>**** **** **** 4212</p>
        </span>
        <div className="flex gap-2">
          <span className=" mr-auto">
            <p className=" font-thin"> Name </p>
            <p>Ayyappan </p>
          </span>
          <span>
            <p className=" font-thin">Expires</p>
            <p>12/2045</p>
          </span>
          <span>
            <p className=" font-thin">CVV</p>
            <p>000</p>
          </span>
        </div>
      </div>
      <div className="flex justify-between text-slate-600 ">
        <p>Total</p>
        <p className=" font-bold">&#8377;567</p>
      </div>
      <button className="rounded-full bg-regal-green py-3">Checkout</button>
    </div>
  );
}

export default Payment;
