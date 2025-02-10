import { RestaurantCard } from "./RestaurantCard";
import { useState, useEffect } from "react";
import { API_URL, CORS_API_KEY } from "../../utils/constants";
import Shimmer from "./Shimmer";

const Body = () => {
  // const arr = useState(resList);
  // const [listOfRestaurants, setListOfRestaurants] = arr;
  // console.log(arr); array destructuring
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [noResult, setNoResult] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    try {
      const response = await fetch(`https://proxy.cors.sh/${API_URL}`, {
        headers: {
          "x-cors-api-key": CORS_API_KEY,
        },
      });
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
      setFilteredRestaurants(
        restaurants[1].card.card.gridElements.infoWithStyle.restaurants
      );
    } catch (error) {
      if (error instanceof TypeError) {
        console.log(`Network Error: ${error?.message}`);
      }
    }
  };

  const topRatedRestaurants = () => {
    const topRatedRestaurants = listOfRestaurants.filter(
      (res) => res?.info?.avgRating > 4.3
    );
    setListOfRestaurants(topRatedRestaurants);
  };

  const filterRestaurants = () => {
    // When searchText is an empty string,
    // the includes method will always return true for any string,
    // because every string contains an empty substring.
    // so, filter method returns all the restaurants
    const data = searchText
      ? listOfRestaurants.filter((res) =>
          res?.info?.name.toLowerCase().includes(searchText.toLowerCase())
        )
      : listOfRestaurants;
    if (!searchText) setNoResult(false);
    if (!data.length) setNoResult(true);
    setFilteredRestaurants(data);
  };

  return !listOfRestaurants.length ? (
    <Shimmer />
  ) : (
    <div className="body-container">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            placeholder="Search for Restaurants"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button onClick={filterRestaurants}>Search</button>
        </div>
        <button className="top-res" onClick={topRatedRestaurants}>
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {noResult ? (
          <p>No Result Found</p>
        ) : (
          filteredRestaurants.map((restaurant) => (
            <RestaurantCard key={restaurant?.info?.id} resData={restaurant} />
          ))
        )}
      </div>
    </div>
  );
};

export default Body;

// not using key < index < unique id
