"use client";
import cl from "@main/Cooperation/cooperation.module.scss";
import CooperationPhone from "./CooperationPhone";
import CooperationMail from "./CooperationMail";
const Cooperation = (): JSX.Element => {
  return (
    <section className={cl.cooperation}>
      <div className="container">
        <div className={"row " + cl.row}>
          <CooperationPhone />
          <CooperationMail />
        </div>
      </div>
    </section>
  );
};

export default Cooperation;
