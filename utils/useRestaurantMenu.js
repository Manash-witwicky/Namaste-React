import { useEffect, useState } from "react";
import { RESTAURANT_MENU_API, CORS_API_KEY } from "./constants";

const useRestaurantMenu = (resId) => {
  const [menuInfo, setMenuInfo] = useState(null);

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
      setMenuInfo(data?.data);
    } catch (error) {
      if (error instanceof TypeError) {
        console.log(`Network Error: ${error?.message}`);
      }
    }
  };
  return menuInfo;
};

export default useRestaurantMenu;
