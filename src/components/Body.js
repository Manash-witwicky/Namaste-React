import { RestaurantCard } from "./RestaurantCard";
import { useState } from "react";
import { Link } from "react-router";
import Shimmer from "./Shimmer";
import useFetchRestaurant from "../../utils/useFetchRestaurant";

const Body = () => {
  const [searchText, setSearchText] = useState("");

  const {
    listOfRestaurants,
    filteredRestaurants,
    setFilteredRestaurants,
    noResult,
    setNoResult,
  } = useFetchRestaurant();

  const topRatedRestaurants = () => {
    const topRatedRestaurants = listOfRestaurants.filter(
      (res) => res?.info?.avgRating > 4.3
    );
    setFilteredRestaurants(topRatedRestaurants);
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
            <Link
              to={`/restaurant/${restaurant?.info?.id}`}
              key={restaurant?.info?.id}
            >
              <RestaurantCard resData={restaurant} />
            </Link>
          ))
        )}
      </div>
    </div>
  );
};

export default Body;
