import React from "react";
import Title from "../../atoms/Title";
import Button from "../../atoms/Button";
import Input from "../../atoms/Input";
import { TemplateBox } from "../../atoms/TemplateBox";

export const FormLogin = (props) => (
  <TemplateBox>
    <Title id="title" title="Login" />
    <Input authorization={true} placeholder="E-mail" type="email" />
    <Input authorization={true} placeholder="Password" type="password" />
    <Button
      title="Continue"
      type="btn"
      link="/Campaign"
    />
  </TemplateBox>
);
