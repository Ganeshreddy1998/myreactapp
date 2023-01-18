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
  return <img src={`/icons/${name}.svg`} alt={name} />;
};

export default Icon;
