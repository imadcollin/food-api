import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import ButtonBase from "@material-ui/core/ButtonBase";
import DigestScrollTabs from "./DigestTabs";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: "auto",
    maxWidth: 600,
  },
  image: {
    width: 128,
    height: 128,
  },
  img: {
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
  },
}));
const RecipesGrid = ({
  label,
  calories,
  image,
  totalTime,
  source,
  totalWeight,
  dietLabels,
  ingredients,
  digest,
}) => {
  console.log("lable from grid",label)
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item>
            <ButtonBase className={classes.image}>
              <img className={classes.img} alt="complex" src={image} />
            </ButtonBase>
          </Grid>

          <Grid item xs container direction="column" spacing={2}>
            <Grid item>
              <Typography variant="h6" gutterBottom>
                {label}
              </Typography>
              <Typography gutterBottom variant="subtitle1">
                Source: {source}
              </Typography>
              <Typography variant="subtitle1">
                Diet Labels: {dietLabels}
              </Typography>
            </Grid>
          </Grid>

          <Grid item xs container direction="column" spacing={2}>
            <Grid item>
              <Typography variant="subtitle1" gutterBottom>
                Calories: {calories}
              </Typography>
              <Typography gutterBottom variant="subtitle1">
                Total Weight: {totalWeight}
              </Typography>
              <Typography variant="subtitle1">
                Total Time: {totalTime}
              </Typography>
            </Grid>
          </Grid>
          <DigestScrollTabs digest={digest} ingredients={ingredients} />
        </Grid>
      </Paper>
    </div>
  );
};
export default RecipesGrid;
