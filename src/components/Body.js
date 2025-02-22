import RestaurantCard, { isRestaurantOpen } from "./RestaurantCard";
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

  const RestaurantOpen = isRestaurantOpen(RestaurantCard);

  if (status === false) return <h1>Looks like you are offline.</h1>;

  return !listOfRestaurants.length ? (
    <Shimmer />
  ) : (
    <div className="mx-10">
      <div className="flex items-center gap-2">
        <div className="p-2 m-2">
          <input
            className="border border-solid border-gray-500 shadow-sm rounded-md px-3 py-1.5 text-black"
            type="text"
            placeholder="Search for Restaurants"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            type="button"
            onClick={filterRestaurants}
            className="text-black bg-[#FD7A3F] m-2 rounded-md text-sm px-3 py-1.5 border border-gray-200"
          >
            Search
          </button>
        </div>

        <div className="p-2">
          <button
            type="button"
            onClick={topRatedRestaurants}
            className="text-black bg-white rounded-md text-sm px-3 py-1.5 border border-gray-800
            hover:bg-[#FD7A3F] hover:border-none"
          >
            Top Rated Restaurants
          </button>
        </div>
      </div>
      <div className="flex flex-wrap gap-4">
        {noResult ? (
          <p>No Result Found</p>
        ) : (
          filteredRestaurants.map(({ info }) => (
            <Link to={`/restaurant/${info?.id}`} key={info?.id}>
              {/* use the HOC here if restaurant is open */}
              {info?.isOpen ? (
                <RestaurantOpen resData={info} />
              ) : (
                <RestaurantCard resData={info} />
              )}
            </Link>
          ))
        )}
      </div>
    </div>
  );
};

export default Body;
