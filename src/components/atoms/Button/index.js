import React from "react";
import { Link } from "react-router-dom";
import "../../../styles/stylePrincipal.css";

const Button = (props) =>
  props.onClick ? (
    <button
      style={
        props.type === "btn-off"
          ? { backgroundColor: "#fff", color: "#f62210" }
          : { backgroundColor: "#f62210", color: "#fff" }
      }
      id={props.type}
      onClick={() => props.onClick()}
    >
      {props.title}
    </button>
  ) : (
    <Link
      to={props.link}
      style={
        props.type === "btn-off"
          ? { backgroundColor: "#fff", color: "#f62210", }
          : { backgroundColor: "#f62210", color: "#fff" }
      }
      id={props.type}
    >
      {props.title}
    </Link>
  );

export default Button;
