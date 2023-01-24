import React from "react";
interface PropTypes {
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

const Icon = (props: PropTypes) => {
  const { name } = props;
  return <img src={`/icons/${name}.svg`} alt={name} />;
};

export default Icon;
