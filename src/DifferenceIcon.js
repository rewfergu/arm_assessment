import React from "react";
import Color from "color";
import { colors } from "./util";

const DifferenceIcon = props => {
  if (props.type === "positive") return <Positive {...props} />;
  if (props.type === "negative") return <Negative category={props.category} />;
  if (props.type === "neutral") return <Neutral category={props.category} />;
};

const Positive = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="15.2"
    height="16.8"
    viewBox="0 0 15.2 16.8"
  >
    <path
      fill={colors[props.category]}
      stroke={Color(colors[props.category]).darken(0.25)}
      strokeMiterlimit="10"
      d="M.8 16.3L7.6 1.2l6.8 15.1z"
    />
  </svg>
);
const Negative = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="15.2"
    height="16.8"
    viewBox="0 0 15.2 16.8"
  >
    <path
      fill={colors[props.category]}
      stroke={Color(colors[props.category]).darken(0.25)}
      strokeMiterlimit="10"
      d="M14.4.5l-6.8 15L.8.5z"
    />
  </svg>
);
const Neutral = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 16 16"
  >
    <circle
      cx="8"
      cy="8"
      r="7.5"
      fill={colors[props.category]}
      stroke={Color(colors[props.category]).darken(0.25)}
      strokeMiterlimit="10"
    />
  </svg>
);

export default DifferenceIcon;
