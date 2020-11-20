import React from "react";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import StickyHeadTable from "./Ingredients";

const DigestScrollTabs = (digest) => {
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Digest Table</Typography>
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
          <Typography>Ingredients</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="subtitle2">
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
