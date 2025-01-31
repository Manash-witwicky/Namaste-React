import { RestaurantCard } from "./RestaurantCard";
import resList from "../../utils/mockData";
import { useState } from "react";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState(resList);

  const filteredRestaurants = () => {
    const filteredRestaurants = listOfRestaurants.filter(
      (res) => res?.card?.card?.info?.avgRating > 4.1
    );
    setListOfRestaurants(filteredRestaurants);
  };
  return (
    <div className="body-container">
      <div className="search">
        <button onClick={filteredRestaurants}>Top Rated Restaurants</button>
      </div>
      <div className="res-container">
        {listOfRestaurants.map((restaurant) => (
          <RestaurantCard
            key={restaurant?.card?.card?.info?.id}
            resData={restaurant}
          />
        ))}
      </div>
    </div>
  );
};

export default Body;

// not using key < index < unique id
