"use client";
import CallBack from "./call-back/CallBack";
import { RootState } from "@/store";
import { useSelector } from "react-redux";
import ThankApplication from "./thank-application/thankApplication";
import ThankSubscription from "./thank-subscription/ThankSubscription";
import styles from "./modal.module.scss";
import Filter from "./filter/Filter";
import Review from "./review/Review";
import City from "./city/City";
import Rassrochka from "./rassrochka/Rassrochka";
import BasketModal from "./basket-modal/BasketModal";
const Modal = (): JSX.Element => {
  const activeModal = useSelector(
    (state: RootState) => state.modals.activeModal
  );

  return (
    <div
      style={{ display: "none" }}
      id="modal"
      className={`${activeModal === "filter" ? styles.filter : ""} ${
        activeModal === "city" ? styles.city : ""
      }`}
    >
      {activeModal === "callback" ? (
        <CallBack />
      ) : activeModal === "basketModal" ? (
        <BasketModal />
      ) : activeModal === "thankApplication" ? (
        <ThankApplication />
      ) : activeModal === "thankSubscription" ? (
        <ThankSubscription />
      ) : activeModal === "filter" ? (
        <Filter />
      ) : activeModal === "review" ? (
        <Review />
      ) : activeModal === "city" ? (
        <City />
      ) : activeModal === "rassrochka" ? (
        <Rassrochka />
      ) : (
        ""
      )}
    </div>
  );
};

export default Modal;
