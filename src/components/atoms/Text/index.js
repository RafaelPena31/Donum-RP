import React from "react";
import "../../../styles/stylePrincipal.css";

const Text = (props) => <p id={props.id} style={props.style}>{props.title}</p>;

export default Text;
