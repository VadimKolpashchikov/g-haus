import { FC, ReactNode } from "react";
import cl from "@/styles/components/info/info.module.scss";

interface IDataName {
  content: ReactNode;
}

const Info: FC<IDataName> = ({ content }): JSX.Element => {
  return (
    <section className={cl.info}>
      <div className={"container " + cl.container}>
        <div className={"row " + cl.row}>{content}</div>
      </div>
    </section>
  );
};

export default Info;
