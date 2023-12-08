import React from "react";

function CartList() {
  return (
    <div className="flex flex-col text-sm border shadow-md border-slate-200 p-5 gap-4 bg-white rounded-md  text-thin">
      <div className="flex justify-between ">
        <img
          className=" w-10"
          src="https://www.giggsmeat.com/wp-content/uploads/2020/07/chicken-nuggets.jpg"
          alt="list1"
        />

        <span className="flex flex-col gap-3 ">
          <p>Noodle Salad</p>
          <span className=" border w-2/3 flex rounded-full items-center justify-between px-1 text-sm">
            <button>-</button>1<button>+</button>
          </span>
        </span>
        <span className="flex flex-col gap-3 ">
          <p className="text-sm font-thin">250g</p>
          <p className=" font-bold text-sm">&#8377;349</p>
        </span>
      </div>
      <div className="flex justify-between ">
        <img
          className=" w-10"
          src="https://www.giggsmeat.com/wp-content/uploads/2020/07/chicken-nuggets.jpg"
          alt="list1"
        />

        <span className="flex flex-col gap-3 ">
          <p>Spanish Salad</p>
          <span className=" border w-2/3 flex rounded-full items-center justify-between px-1 text-sm">
            <button>-</button>1<button>+</button>
          </span>
        </span>
        <span className="flex flex-col gap-3 ">
          <p className="text-sm font-thin">250g</p>
          <p className=" font-bold text-sm">&#8377;299</p>
        </span>
      </div>
      <div className="flex justify-between ">
        <img
          className=" w-10"
          src="https://www.giggsmeat.com/wp-content/uploads/2020/07/chicken-nuggets.jpg"
          alt="list1"
        />

        <span className="flex flex-col gap-3 ">
          <p>Cheese Burger</p>
          <span className=" border w-2/3 flex rounded-full items-center justify-between px-1 text-sm">
            <button>-</button>1<button>+</button>
          </span>
        </span>
        <span className="flex flex-col gap-3 ">
          <p className="text-sm font-thin">250g</p>
          <p className=" font-bold text-sm">&#8377;639</p>
        </span>
      </div>
    </div>
  );
}

export default CartList;
