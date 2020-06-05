import React from "react";
import Title from "../../atoms/Title";
import Button from "../../atoms/Button";
import Input from "../../atoms/Input";
import { TemplateBox } from "../../atoms/TemplateBox";
import { createUseStyles } from "react-jss";

const useStyle = createUseStyles({
  cover: {
    marginBottom: "",
  },
});

export const FormCampaign = (props) => {
  const classes = useStyle();
  return (
    <div className={classes.cover}>
      <TemplateBox>
        <Title id="logoOrange" title="Add a new campaign +" />
        <Input authorization={true} placeholder="Title campaign" />
        <Input authorization={true} placeholder="Description" />
        <Input authorization={true} placeholder="Description" type="date" />
        <Input
          authorization={true}
          placeholder="Emergency level"
          type={props.numberLevel}
        />
        <Button title="Continue" type="btn" link="/Campaign" />
      </TemplateBox>
    </div>
  );
};
