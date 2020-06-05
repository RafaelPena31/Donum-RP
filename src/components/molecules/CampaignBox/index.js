import React from "react";
import Text from "../../atoms/Text";
import { createUseStyles } from "react-jss";
import ReadMoreReact from "read-more-react";

const useStyles = createUseStyles({
  cover: {
    display: "flex",
    flexFlow: "column",
    justifyContent: "center",
    alignItems: "center",
    maxWidth: "320px",
    padding: "0 0 8px 0",
    border: "1.5px solid #f62210",
    borderRadius: "10px",
    background: "#fff",
    margin: "2.5%",
  },
  titleContainer: {
    borderBottom: "1.5px solid #f62210",
    padding: "1%",
    width: "100%",
  },
  description: {
    padding: "10px",
  },
});

export const CampaignBox = props => {
  const classes = useStyles();

  return (
    <section className={classes.cover}>
      <div className={classes.titleContainer}>
        <Text
          id="txt"
          title="Campaign Title"
          style={{ margin: "0", textAlign: "center" }}
        />
        <Text id="txt-off" title="Main contact" />
      </div>
      <article className={classes.description}>
        <div id="txt-campaign">
          <ReadMoreReact
            text={
              `${props.text}`
            }
            min={props.min || 1}
            ideal={props.ideal || 100}
            max={props.max || 500}
            readMoreText={`${props.readmore}`}
          />
        </div>
      </article>
      <section>
        <Text id="txt-campaign" title={`End of campaign: ${props.date}`}/>
      </section>
      <section>
        <Text id="txt-off" title={`Emergency level: ${props.level}`} style={props.style}/>
      </section>
    </section>
  );
};
