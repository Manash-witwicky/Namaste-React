import { API_URL, CORS_API_KEY } from "./constants";
import { useState, useEffect } from "react";

const useFetchRestaurant = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
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

  return {
    listOfRestaurants,
    filteredRestaurants,
    setFilteredRestaurants,
    noResult,
    setNoResult,
  };
};

export default useFetchRestaurant;
