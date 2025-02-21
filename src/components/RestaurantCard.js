import { IMG_URL } from "../../utils/constants";

export const RestaurantCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo } = resData;

  return (
    <div
      className="w-[240px] h-[320px] bg-[#161618] flex flex-col justify-between p-2.5 m-2 rounded-md shadow-md
    hover:cursor-pointer hover:transform hover:transition hover:duration-500 hover:ease-out hover:scale-75"
    >
      <img
        className="w-full h-[200px] object-cover rounded-md"
        src={IMG_URL + cloudinaryImageId}
      />
      <h3 className="font-semibold">{name}</h3>
      <div className="flex items-center gap-2.5 mb-2.5 font-light">
        <span>Rating: {avgRating}</span>
        <span className="bold">{resData?.info?.sla?.deliveryTime} minutes</span>
      </div>

      <span className="font-normal text-sm text-[#ff9800] text-ellipsis overflow-hidden whitespace-normal">
        {cuisines.join(", ")}
      </span>
      {/* <span>{costForTwo}</span> */}
    </div>
  );
};
