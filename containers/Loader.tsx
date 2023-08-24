"use client";
import "@/styles/loader.scss";
import { RootState } from "@/store";
import { useSelector } from "react-redux";

const Loader = (): JSX.Element => {
  const headerLoad = useSelector((state: RootState) => state.header.headerLoad);

  return (
    <div className={"loader " + (!!headerLoad ? "loader_false" : "")}>
      <div className="loader-wrap">
        <div className={"lds-ring"}>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <p className="text">
          Градус
          <br />
          Хаус&deg;
        </p>
      </div>
    </div>
  );
};

export default Loader;
