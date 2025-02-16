import { useState, useEffect } from "react";
import { useParams } from "react-router";
import {
  RESTAURANT_MENU_API,
  CORS_API_KEY,
  IMG_URL,
} from "../../utils/constants";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  const [menuInfo, setMenuInfo] = useState(null);
  const { resId } = useParams();

  useEffect(() => {
    fetchMenuItems();
  }, []);

  fetchMenuItems = async () => {
    try {
      const response = await fetch(
        `https://proxy.cors.sh/${RESTAURANT_MENU_API + resId}`,
        {
          headers: {
            "x-cors-api-key": CORS_API_KEY,
          },
        }
      );
      const data = await response.json();
      setMenuInfo(data);
    } catch (error) {
      if (error instanceof TypeError) {
        console.log(`Network Error: ${error?.message}`);
      }
    }
  };

  if (!menuInfo) return <Shimmer />;
  const {
    name,
    avgRating,
    costForTwoMessage,
    cuisines,
    totalRatingsString,
    sla,
    cloudinaryImageId,
  } = menuInfo?.data?.cards[2]?.card?.card?.info;
  return (
    <div className="res-details-card">
      <div>
        <h1>{name}</h1>
        <div className="res-info">
          <span className="bold">
            ⭐️ {avgRating} ({totalRatingsString})
          </span>
          <span className="bold">{costForTwoMessage}</span>
        </div>
        <div className="res-info-cuisines">
          <span className="cuisines">{cuisines.join(", ")}</span>
          <span className="bold">{sla?.slaString}</span>
        </div>
      </div>

      <img className="res-img-menu" src={IMG_URL + cloudinaryImageId} />
    </div>
  );
};

export default RestaurantMenu;

/**
 * Query to filter title and items
 * data.groupedCard.cardGroupMap.REGULAR.cards.filter((card) => card.card.card.title && card.card.card.itemCards).map((obj) => ({
    title: obj.card.card.title,
    itemCards: obj.card.card.itemCards
}))
 */
