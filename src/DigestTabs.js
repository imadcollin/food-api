import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import StickyHeadTable from "./Ingredients";
const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    display: "block",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

const DigestScrollTabs = (digest) => {
  const classes = useStyles();

  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>Digest Table</Typography>
        </AccordionSummary>
        <AccordionDetails style={{ display: "block" }}>
          <Typography>
            <StickyHeadTable digest={digest}></StickyHeadTable>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>Ingredients</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="caption">
            {digest.ingredients.map((item) => (
              <span key={item.text}>{item.text}, </span>
            ))}
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};
export default DigestScrollTabs;
