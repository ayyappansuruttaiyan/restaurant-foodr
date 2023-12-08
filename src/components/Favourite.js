import React from "react";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  MapPinIcon,
  StarIcon,
} from "@heroicons/react/24/solid";
function Favourite() {
  const trendingMeals = [
    {
      name: "Delicious Fried Chicken",
      img: "https://www.giggsmeat.com/wp-content/uploads/2020/07/chicken-nuggets.jpg",
      address: "96, 1st Cross, Tataguni, Bangalore - 560062",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been ",
    },
    {
      name: "Tozaya Organiza",
      img: "https://www.fryingpanadventures.com/wp-content/uploads/2020/10/image-137-scaled-e1604152201367.jpeg",
      address: "15/1, 5th Cross, JP Nagar, Bangalore - 560043",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been ",
    },
  ];
  return (
    <div className="flex flex-col my-5">
      <div className="flex justify-between items-start">
        <h1 className="mb-3 font-semibold text-xl">
          Your favourite restaurants
        </h1>
        <span className="flex gap-2 mt-2 ">
          <span>
            <ChevronLeftIcon className=" font-semibold text-xl w-5 cursor-pointer border border-slate-400 rounded-full items-center  align-middle justify-center" />
          </span>
          <span>
            <ChevronRightIcon className="w-5 cursor-pointer border border-slate-400 rounded-full items-center  align-middle content-center" />
          </span>
        </span>
      </div>

      <div className="flex flex-row gap-5 ">
        {trendingMeals.map((meal) => (
          <div className=" basis-1/2 bg-slate-50 rounded-xl p-1 shadow-md">
            <img className="rounded-t-xl " src={meal.img} alt={meal.name} />
            <div className="flex flex-col p-2 gap-3">
              <h1 className="text-xl font-semibold">{meal.name}</h1>
              <span className="flex">
                <StarIcon className="w-4 text-yellow-400" />
                <StarIcon className="w-4 text-yellow-400" />
                <StarIcon className="w-4 text-yellow-400" />{" "}
                <StarIcon className="w-4 text-yellow-400" />{" "}
                <StarIcon className="w-4" />
              </span>

              <span className="flex items-center gap-2 font-base font-thin">
                <MapPinIcon className="w-4" />
                <p>{meal.address}</p>
              </span>
              <p className="text-xs font-thin">{meal.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Favourite;
