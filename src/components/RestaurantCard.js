import { IMG_URL } from "../../utils/constants";

export const RestaurantCard = (props) => {
  // console.log(props); ---> it returns as a JS object
  // const { name, cuisines } = props;
  // console.log(resData);
  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo } =
    resData?.info;

  return (
    <div className="res-card">
      <img className="res-img" src={IMG_URL + cloudinaryImageId} />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>Rating: {avgRating}</h4>
      <h4>{resData?.info?.sla?.deliveryTime} minutes</h4>
      <h4>{costForTwo}</h4>
    </div>
  );
};
