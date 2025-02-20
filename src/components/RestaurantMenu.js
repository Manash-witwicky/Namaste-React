import { useParams } from "react-router";
import { IMG_URL } from "../../utils/constants";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const menuInfo = useRestaurantMenu(resId);

  if (!menuInfo) return <Shimmer />;
  const {
    name,
    avgRating,
    costForTwoMessage,
    cuisines,
    totalRatingsString,
    sla,
    cloudinaryImageId,
  } = menuInfo?.cards[2]?.card?.card?.info;
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
 * create accordion for menu items
 * Query to filter title and items
 * data.groupedCard.cardGroupMap.REGULAR.cards.filter((card) => card.card.card.title && card.card.card.itemCards).map((obj) => ({
    title: obj.card.card.title,
    itemCards: obj.card.card.itemCards
}))
 */
