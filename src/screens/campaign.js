import React from "react";
import ScreenTemplate from "../components/templates/screenTemplate";
import { CampaignBox as Box } from "../components/molecules/CampaignBox";
import { createUseStyles } from "react-jss";
import Title from "../components/atoms/Title";
import "../styles/stylePrincipal.css";

const useStyle = createUseStyles({
  cover: {
    width: "100%",
    display: "flex",
    flexFlow: "wrap",
    justifyContent: "center",
    alignItems: "center",
  },
});

export const Campaign = () => {
  const classes = useStyle();

  return (
    <ScreenTemplate>
      <Title id="title" title="Actives campaign" />
      <div className={classes.cover}>
        <Box
          text="Ipsum in pariatur culpa ea consequat aliqua aute ipsum Lorem esse magna. Pariatur eiusmod adipisicing laborum dolor exercitation ullamco excepteur. Nulla exercitation velit irure excepteur occaecat. Dolor fugiat consectetur id labore occaecat cillum. Esse qui aliquip amet aute ipsum amet laborum. Ullamco sit aliquip adipisicing esse aute aliqua in qui incididunt ex."
          readmore="Read More"
          date="07/06/2020"
          level={7}
          style={{ color: "#ff9900" }}
        />
        <Box
          text="Ipsum in pariatur culpa ea consequat aliqua aute ipsum Lorem esse magna. Pariatur eiusmod adipisicing laborum dolor exercitation ullamco excepteur. Nulla exercitation velit irure excepteur occaecat. Dolor fugiat consectetur id labore occaecat cillum. Esse qui aliquip amet aute ipsum amet laborum. Ullamco sit aliquip adipisicing esse aute aliqua in qui incididunt ex."
          readmore="Read More"
          date="07/06/2020"
          level={7}
          style={{ color: "#ff9900" }}
        />
        <Box
          text="Ipsum in pariatur culpa ea consequat aliqua aute ipsum Lorem esse magna. Pariatur eiusmod adipisicing laborum dolor exercitation ullamco excepteur. Nulla exercitation velit irure excepteur occaecat. Dolor fugiat consectetur id labore occaecat cillum. Esse qui aliquip amet aute ipsum amet laborum. Ullamco sit aliquip adipisicing esse aute aliqua in qui incididunt ex."
          readmore="Read More"
          date="07/06/2020"
          level={7}
          style={{ color: "#ff9900" }}
        />
        <Box
          text="Ipsum in pariatur culpa ea consequat aliqua aute ipsum Lorem esse magna. Pariatur eiusmod adipisicing laborum dolor exercitation ullamco excepteur. Nulla exercitation velit irure excepteur occaecat. Dolor fugiat consectetur id labore occaecat cillum. Esse qui aliquip amet aute ipsum amet laborum. Ullamco sit aliquip adipisicing esse aute aliqua in qui incididunt ex."
          readmore="Read More"
          date="07/06/2020"
          level={7}
          style={{ color: "#ff9900" }}
        />
        <Box
          text="Ipsum in pariatur culpa ea consequat aliqua aute ipsum Lorem esse magna. Pariatur eiusmod adipisicing laborum dolor exercitation ullamco excepteur. Nulla exercitation velit irure excepteur occaecat. Dolor fugiat consectetur id labore occaecat cillum. Esse qui aliquip amet aute ipsum amet laborum. Ullamco sit aliquip adipisicing esse aute aliqua in qui incididunt ex."
          readmore="Read More"
          date="07/06/2020"
          level={7}
          style={{ color: "#ff9900" }}
        />
      </div>
    </ScreenTemplate>
  );
};
