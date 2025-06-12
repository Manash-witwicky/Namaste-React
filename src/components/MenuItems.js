import { useDispatch } from "react-redux";
import { IMG_URL } from "../../utils/constants";
import { addItem } from "../../utils/cartSlice";

const MenuItems = ({ items }) => {
  const dispatch = useDispatch();
  const handleAddItem = (e, item) => {
    e.stopPropagation();
    dispatch(addItem(item));
  };

  return (
    <div>
      {items.map((item) => (
        <div
          className="p-2 my-2 border-b-2 border-gray-700 flex justify-between"
          key={item?.card?.info?.id}
        >
          <div className="w-9/12">
            <div className="flex flex-col mb- gap-2">
              <span className="font-medium">{item?.card?.info?.name}</span>
              <span className="text-sm">
                ₹
                {item?.card?.info?.defaultPrice
                  ? item?.card?.info?.defaultPrice / 100
                  : item?.card?.info?.price / 100}
              </span>
            </div>
            <div className=" my-[20px]">
              <span className="text-xs text-gray-400">
                {item?.card?.info?.description}
              </span>
            </div>
          </div>
          <div className="w-3/12 ml-4 ">
            <div className="absolute mx-[60px] mt-[110px]">
              <button
                className=" bg-gray-300 text-teal-600 rounded-lg p-3"
                onClick={(e) => handleAddItem(e, item)}
              >
                ADD
              </button>
            </div>

            <img
              src={IMG_URL + item?.card?.info?.imageId}
              className="w-[120px] h-[100px] object-cover rounded-lg mt-6 m-auto"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default MenuItems;

// onClick={handleAddItem} -- just pass the click event to handler
// onClick={() => handleAddItem(item)} - when we neeed to pass extra
// args to handler, we need to use callback fn
