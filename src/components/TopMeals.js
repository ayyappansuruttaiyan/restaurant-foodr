import React from "react";
import { StarIcon } from "@heroicons/react/24/solid";

function TopMeals() {
  const topMeals = [
    {
      name: "Spanish Salad",
      img: "https://www.giggsmeat.com/wp-content/uploads/2020/07/chicken-nuggets.jpg",
      price: 299,
      ratings: 5,
    },
    {
      name: "Noodle Salad",
      img: "https://www.foodandwine.com/thmb/DI29Houjc_ccAtFKly0BbVsusHc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/crispy-comte-cheesburgers-FT-RECIPE0921-6166c6552b7148e8a8561f7765ddf20b.jpg",
      price: 349,
      ratings: 5,
    },
    {
      name: "Cheese Burger",
      img: "https://www.giggsmeat.com/wp-content/uploads/2020/07/chicken-nuggets.jpg",
      price: 639,
      ratings: 5,
    },
    {
      name: "Strawberry Pie",
      img: "https://www.fryingpanadventures.com/wp-content/uploads/2020/10/image-137-scaled-e1604152201367.jpeg",
      price: 599,
      ratings: 5,
    },
  ];
  return (
    <div className="flex flex-col my-5">
      <h1 className="mb-3 font-semibold text-xl">Top meals this week</h1>
      <div className="flex flex-row gap-5 ">
        {topMeals.map((meal) => (
          <div className=" basis-1/4 bg-slate-50 rounded-xl p-1 shadow-md relative">
            <img
              className="rounded-t-xl min-h-[60%]"
              src={meal.img}
              alt={meal.name}
            />
            <div className="p-2 ">
              <p className="absolute top-5 py-1 px-2 text-slate-100 rounded-md bg-regal-green">
                &#8377;{meal.price}
              </p>
              <h1 className="text-base font-semibold ">{meal.name}</h1>
              <span className="flex my-1 font-base font-thin">
                <StarIcon className="w-4 text-yellow-400" />
                <StarIcon className="w-4 text-yellow-400" />
                <StarIcon className="w-4 text-yellow-400" />{" "}
                <StarIcon className="w-4 text-yellow-400" />{" "}
                <StarIcon className="w-4" />
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TopMeals;
