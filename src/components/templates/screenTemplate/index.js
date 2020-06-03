import React from 'react'
import {createUseStyles} from 'react-jss'
import Header from '../../organims/Header';

const useStyles = createUseStyles({
  cover: {
    width: "100%",
    height: "100vh",
    flexDirection: "column",
    justifyContent: "space-between"
  }
})

const ScreenTemplate = (props) => {

  const classes = useStyles()

  return (
    <div className={classes.cover}>
      <Header />
        {props.children}
    </div>
  )

}

export default ScreenTemplate;