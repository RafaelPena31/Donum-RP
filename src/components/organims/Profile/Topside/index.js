import React from "react";
import { createUseStyles } from "react-jss";
import Title from "../../../atoms/Title";
import Text from "../../../atoms/Text";
import ReadMoreReact from "read-more-react";

const useStyles = createUseStyles({
  cover: {
    width: "100%",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    margin: "0 0 3.5% 0",
  },
  img: {
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    background:
      "url(https://www.bhbit.com.br/wp-content/uploads/2016/07/fb-dicas-1130x570.jpg)",
    boxSizing: "border-box",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-end",
    "&:hover": {
      opacity: "0.7",
    },
  },
  containerTitle: {
    background: "#fff",
    borderRadius: "15px",
    padding: "10px",
    opacity: "0.9",
    marginBottom: "30px",
    marginTop: "250px",
  },
  lineDivision: {
    background: "#333",
    width: "95%",
    height: "3px",
  },
  lineContainer: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "2% 0 2% 0",
  },
  description: {
    margin: "2.5%",
  },
});

export const Topside = () => {
  const classes = useStyles();
  return (
    <div className={classes.cover}>
      <div className={classes.img} src="">
        <span className={classes.containerTitle}>
          <Title id="logoOrange" title="Organization Name" />
        </span>
      </div>
      <strong>
        <Text id="txt-off" title="Main contacts" />
      </strong>
      <Text id="txt-off" title="55+ (31) xxxxx-xxxx" />
      <article className={classes.description}>
        <article id="txt-campaign">
          <ReadMoreReact
            text="
        Labore sunt aliquip velit incididunt consequat tempor et consequat consectetur dolore quis Lorem. Voluptate minim esse 
        exercitation des erunt ullamco pariatur. Labore qui do adipisicing Lorem ea nostrud consequat dolor laboris.
        Tempor commodo velit labore laborum officia eiusmod non. Adipisicing esse proident consequat sit. Do aute reprehenderit 
        aliqua sint ex ullamco est sunt irure exercitation minim cupidatat. Duis excepteur enim non incididunt voluptate laborum 
        adipisicing adipisicing magna tempor ullamco voluptate labore veniam. Anim sit sunt nulla officia veniam consequat sit 
        incididunt minim irure eiusmod sint enim."
            min={1}
            max={500}
            ideal={250}
            readMoreText="... Read more"
          />
        </article>
      </article>
      <span className={classes.lineContainer}>
        <hr className={classes.lineDivision} />
      </span>
    </div>
  );
};
