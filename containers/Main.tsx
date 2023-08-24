"use client";
import { Provider } from "react-redux";
import { store } from "@/store";
import ClientData from "./ClientData";

const Main: React.FC<any> = ({ children, data }): JSX.Element => {
  return (
    <Provider store={store}>
      <ClientData />
      {children}
    </Provider>
  );
};

export default Main;
