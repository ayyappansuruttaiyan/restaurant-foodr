import React from "react";

function TrendingMeals() {
  const trendingMeals = [
    {
      name: "Pizza & Pasta",
      img: "https://www.giggsmeat.com/wp-content/uploads/2020/07/chicken-nuggets.jpg",
      availableAt: 12,
    },
    {
      name: "Ham Burger",
      img: "https://www.foodandwine.com/thmb/DI29Houjc_ccAtFKly0BbVsusHc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/crispy-comte-cheesburgers-FT-RECIPE0921-6166c6552b7148e8a8561f7765ddf20b.jpg",
      availableAt: 8,
    },
    {
      name: "Chicken",
      img: "https://www.giggsmeat.com/wp-content/uploads/2020/07/chicken-nuggets.jpg",
      availableAt: 18,
    },
    {
      name: "Chinesse Food",
      img: "https://www.fryingpanadventures.com/wp-content/uploads/2020/10/image-137-scaled-e1604152201367.jpeg",
      availableAt: 5,
    },
  ];
  return (
    <div className="flex flex-col my-5">
      <h1 className="mb-3 font-semibold text-xl">What would you eat today?</h1>
      <div className="flex flex-row gap-5 ">
        {trendingMeals.map((meal) => (
          <div className=" basis-1/4 bg-slate-50 rounded-xl p-1 shadow-md">
            <img
              className="rounded-t-xl min-h-[60%]"
              src={meal.img}
              alt={meal.name}
            />
            <div className="p-2">
              <h1 className="text-base font-semibold">{meal.name}</h1>
              <p className="font-base font-thin">
                {meal.availableAt} restaurants
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TrendingMeals;
