import { RestaurantCard } from "./RestaurantCard";
import { useState } from "react";
import { Link } from "react-router";
import Shimmer from "./Shimmer";
import useFetchRestaurant from "../../utils/useFetchRestaurant";
import useOnlineStatus from "../../utils/useOnlineStatus";

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
      ({ info }) => info?.avgRating > 4.3
    );
    setFilteredRestaurants(topRatedRestaurants);
  };

  const filterRestaurants = () => {
    // When searchText is an empty string,
    // the includes method will always return true for any string,
    // because every string contains an empty substring.
    // so, filter method returns all the restaurants
    const data = searchText
      ? listOfRestaurants.filter(({ info }) =>
          info?.name.toLowerCase().includes(searchText.toLowerCase())
        )
      : listOfRestaurants;
    if (!searchText) setNoResult(false);
    if (!data.length) setNoResult(true);
    setFilteredRestaurants(data);
  };

  const status = useOnlineStatus();

  if (status === false) return <h1>Looks like you are offline.</h1>;

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
          filteredRestaurants.map(({ info }) => (
            <Link to={`/restaurant/${info?.id}`} key={info?.id}>
              <RestaurantCard resData={info} />
            </Link>
          ))
        )}
      </div>
    </div>
  );
};

export default Body;
