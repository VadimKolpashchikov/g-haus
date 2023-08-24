"use client";
import { useDispatch } from "react-redux";
import { initFavorite } from "@/store/favoritesSlice";
import { initBasket } from "@/store/basketSlice";
import { useEffect } from "react";

const ClientData: React.FC<any> = (): JSX.Element => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      initFavorite(JSON.parse(localStorage.getItem("gradusFavorites") ?? "{}"))
    );
    dispatch(
      initBasket(JSON.parse(localStorage.getItem("gradusBasket") ?? "{}"))
    );
  }, []);
  return <></>;
};

export default ClientData;
