import React from "react";
import { TemplateBox } from "../../atoms/TemplateBox";
import Button from "../../atoms/Button";
import Title from "../../atoms/Title";

export const Choice = (props) => (
  <TemplateBox>
    <Title id="title" title="I am a" />
    <Button type="btn-off" title="ONG" onClick={() => props.onClick("ong")} />
    <Title id="title" title="OR" />
    <Button type="btn-off" title="DONATOR" onClick={() => props.onClick("donator")} />
  </TemplateBox>
);
