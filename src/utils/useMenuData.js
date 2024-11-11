import React, { useEffect, useState } from "react";
import { RES_API_URL_1 } from "./constants";
const useMenuData = (resId) => {
  const [menuData, setMenuData] = useState(null);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch(RES_API_URL_1 + resId);
    const toJson = await response.json();
    setMenuData(toJson.data);
    console.log(toJson);
  };
  return menuData;
};

export default useMenuData;
