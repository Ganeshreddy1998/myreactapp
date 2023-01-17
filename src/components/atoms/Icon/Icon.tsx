import React from "react";
interface propTypes {
  // path?: string;
  name:
    | string
    | "cart"
    | "user"
    | "search"
    | "body"
    | "back-arrow"
    | "test-tube"
    | "reports"
    | "home"
    | "dollar"
    | "clock"
    | "covid"
    | "liver"
    | "bloodtest"
    | "diabetestest"
    | "kidney"
    | "throid"
    | "lipid"
    | "lab_technician"
    | "award"
    | "shield";
}

const Icon = (props: propTypes) => {
  const { name } = props;
  switch (name) {
    case "cart":
      return <img src="/icons/shopping-cart.svg" alt="icon" />;
    case "user":
      return <img src="/icons/user.svg" alt="icon" />;
    case "search":
      return <img src="/icons/search.svg" alt="search" />;
    case "body":
      return <img src="/icons/body.svg" alt="body" />;
    case "back-arrow":
      return <img src="/icons/back_arrow.svg" alt="body" />;
    case "test-tube":
      return <img src="/icons/test.svg" alt="body" />;
    case "reports":
      return <img src="/icons/reports.svg" alt="body" />;
    case "home":
      return <img src="/icons/home.svg" alt="body" />;
    case "dollar":
      return <img src="/icons/dollar.svg" alt="body" />;
    case "clock":
      return <img src="/icons/clock.svg" alt="body" />;
    case "covid":
      return <img src="/icons/covid.svg" alt="body" />;
    case "liver":
      return <img src="/icons/liver.svg" alt="body" />;
    case "bloodtest":
      return <img src="/icons/bloodtest.svg" alt="body" />;
    case "diabetestest":
      return <img src="/icons/diabetestest.svg" alt="body" />;
    case "kidney":
      return <img src="/icons/kidney.svg" alt="body" />;
    case "throid":
      return <img src="/icons/throid.svg" alt="body" />;
    case "lipid":
      return <img src="/icons/lipid.svg" alt="body" />;
    case "lab_technician":
      return <img src="/icons/lab_technician.svg" alt="body" />;
    case "award":
      return <img src="/icons/award.svg" alt="body" />;
    case "shield":
      return <img src="/icons/shield.svg" alt="shield" />;
    default:
      return null;
  }
  // return (
  //   <div>
  //     <img src={path} alt="icon"/>
  //   </div>
  // )
};

export default Icon;
