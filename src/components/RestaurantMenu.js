import { useParams } from "react-router";
import { IMG_URL } from "../../utils/constants";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../../utils/useRestaurantMenu";
import MenuAccordion from "./MenuAccordion";
import { useState } from "react";

const RestaurantMenu = () => {
  const [showIndex, setShowIndex] = useState(null);
  const { resId } = useParams();

  const menuInfo = useRestaurantMenu(resId);

  const categories = menuInfo?.cards[4].groupedCard.cardGroupMap.REGULAR.cards
    .filter((card) => card.card.card.title && card.card.card.itemCards)
    .map((obj) => ({
      title: obj.card.card.title,
      itemCards: obj.card.card.itemCards,
    }));

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
    <>
      <div
        className="w-1/2 m-auto p-2.5 mt-6 shadow-lg rounded-md
        border border-solid border-slate-400 bg-[#161618] flex items-center justify-between"
      >
        <div>
          <p className="text-2xl font-semibold">{name}</p>
          <div className="flex items-center gap-2.5 mb-2.5 my-4">
            <span className="font-light text-sm">
              ⭐️ {avgRating} ({totalRatingsString})
            </span>
            <span className="font-light text-sm">{costForTwoMessage}</span>
          </div>
          <div className="flex flex-col gap-4 mb-2.5">
            <span className="font-normal text-sm text-[#ff9800] overflow-hidden text-ellipsis">
              {cuisines.join(", ")}
            </span>
            <span className="font-light text-sm">{sla?.slaString}</span>
          </div>
        </div>

        <img
          className="rounded-lg w-[120px] h-[120px] object-cover"
          src={IMG_URL + cloudinaryImageId}
        />
      </div>
      <div>
        {categories.map((category, index) => {
          return (
            <MenuAccordion
              data={category}
              key={index}
              showItems={index === showIndex ? true : false}
              setShowIndex={() =>
                setShowIndex(index === showIndex ? null : index)
              }
            />
          );
        })}
      </div>
    </>
  );
};
export default RestaurantMenu;

/**
 * const [showIndex, setShowIndex] = useState(null);
 * showIndex holds the index of the currently open accordion.
 * If it's null, all accordions are closed.
 * When mapping over categories, you pass two props to each MenuAccordion:
 * showItems={index === showIndex ? true : false}
 * This means only the accordion whose index matches showIndex will be open.
 *
 * setShowIndex={() => setShowIndex(index === showIndex ? null : index)}
 * This function toggles the accordion:
 * If you click an already open accordion (index === showIndex), it sets showIndex to null (closes it).
 * If you click a closed accordion, it sets showIndex to that index (opens it).
 */
