import React from "react";
import "../../../styles/stylePrincipal.css";

const Input = (props) =>
  props.authorization === true ? (
    <input
      placeholder={props.placeholder || "Name:"}
      min={props.minimunvalue || 1}
      max={props.maximunvalue || 150}
      type={props.type || "text"}
      required
      id="input"
    />
  ) : (
    <input
      placeholder={props.placeholder}
      min={props.minimunvalue}
      max={props.maximunvalue}
      type={props.type}
      id="input"
    />
  );

export default Input;
//
