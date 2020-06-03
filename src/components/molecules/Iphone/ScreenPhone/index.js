import React from "react";
import Title from "../../../atoms/Title";
import Button from "../../../atoms/Button";
import "../../../../styles/Iphone/style.css";

const ScreenPhone = () => (
  <div id="screen-phone">
    <Title title="Register Now" id="title" />
    <Button title="Register" type="btn"/>
    <Title title="or" id="title"/>
    <Button title="Login" type="btn-off"/>
  </div>
);

export default ScreenPhone;
