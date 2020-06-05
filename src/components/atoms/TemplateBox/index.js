import React from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  cover: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
});

export const TemplateBox = (props) => {
  const classes = useStyles();
  return <div className={classes.cover}>{props.children}</div>;
};
