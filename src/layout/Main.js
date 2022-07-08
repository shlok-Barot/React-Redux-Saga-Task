import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  main: {
    margin: theme.spacing(2),
  },
}));

export default function Main(props) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <main className={classes.main}>{props.children}</main>
    </div>
  );
}
