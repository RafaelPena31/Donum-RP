import React from "react";
import { createUseStyles } from "react-jss";
import Title from "../../../atoms/Title";
import { FormCampaign } from "../../../molecules/FormCampaign";
import { CampaignBox as Box } from "../../../molecules/CampaignBox";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const useStyle = createUseStyles({
  cover: {
    width: "100%",
    display: "flex",
    flexFlow: "wrap",
    justifyContent: "center",
    alignItems: "center",
  },
  btn: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "10px",
  },
  form: {
    background: "#fff",
    padding: "2%",
    borderRadius: "10px",
  }
});

export const CampaignSpace = (props) => {
  const classe = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const classes = useStyle();
  return (
    <article>
      <Title id="title" title="Active campaign" />
      <nav className={classes.btn}>
        <div>
          <button id="btn" type="button" onClick={handleOpen}>
            New+
          </button>
          <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            className={classe.modal}
            open={open}
            onClose={handleClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
              timeout: 500,
            }}
          >
            <Fade in={open}>
              <div className={classes.form}>
                <FormCampaign />
              </div>
            </Fade>
          </Modal>
        </div>
      </nav>
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
      </div>
    </article>
  );
};
