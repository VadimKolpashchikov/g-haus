import { useState, useEffect } from "react";
import { RootState } from "@/store";
import { useDispatch, useSelector } from "react-redux";
import { headerLoaded } from "@/store/headerSlice";

export default function useWindowWidth(maxWidth: number): boolean {
  const [windowWidth, setWindowWidth] = useState<boolean>(true);
  const dispatch = useDispatch();
  const headerLoad = useSelector((state: RootState) => state.header.headerLoad);

  useEffect(() => {
    setWindowWidth(window.innerWidth > maxWidth ? false : true);
    const width = window.matchMedia(`(max-width: ${maxWidth}px)`);
    const handleWidth = () => {
      setWindowWidth(width.matches);
    };

    width.addListener(handleWidth);
    if (!headerLoad) {
      dispatch(headerLoaded(true));
    }
    return () => {
      width.removeListener(handleWidth);
    };
  }, []);

  // if (typeof window !== "undefined") {

  // }

  return windowWidth;
}
