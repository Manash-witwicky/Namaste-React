import { IMG_URL } from "../../utils/constants";

export const RestaurantCard = (props) => {
  // console.log(props); ---> it returns as a JS object
  // const { name, cuisines } = props;
  // console.log(resData);
  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo } = resData;

  return (
    <div className="res-card uniform-height">
      <img className="res-img" src={IMG_URL + cloudinaryImageId} />
      <h3>{name}</h3>
      <div className="res-info">
        <span>Rating: {avgRating}</span>
        <span className="bold">{resData?.info?.sla?.deliveryTime} minutes</span>
      </div>

      <span className="cuisines">{cuisines.join(", ")}</span>
      {/* <span>{costForTwo}</span> */}
    </div>
  );
};
