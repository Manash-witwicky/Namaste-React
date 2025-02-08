import { RestaurantCard } from "./RestaurantCard";
import { useEffect, useState } from "react";
import { API_URL } from "../../utils/constants";
import Shimmer from "./Shimmer";

const Body = () => {
  // const arr = useState(resList);
  // const [listOfRestaurants, setListOfRestaurants] = arr;
  // console.log(arr); array destructuring
  const [listOfRestaurants, setListOfRestaurants] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(API_URL);
      if (!response.ok) {
        throw new Error("Something went wrong!!");
      }
      const data = await response.json();
      const cards = data?.data?.cards;
      const restaurants = cards.filter((obj) =>
        obj.card.card["@type"].includes("GridWidget")
      );
      setListOfRestaurants(
        restaurants[1].card.card.gridElements.infoWithStyle.restaurants
      );
    } catch (error) {
      if (error instanceof TypeError) {
        console.log(`Network Error: ${error?.message}`);
      }
    }
  };

  const filteredRestaurants = () => {
    const filteredRestaurants = listOfRestaurants.filter(
      (res) => res?.info?.avgRating > 4.3
    );
    setListOfRestaurants(filteredRestaurants);
  };

  return !listOfRestaurants.length ? (
    <Shimmer />
  ) : (
    <div className="body-container">
      <div className="search">
        <button onClick={filteredRestaurants}>Top Rated Restaurants</button>
      </div>
      <div className="res-container">
        {listOfRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant?.info?.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;

// not using key < index < unique id
