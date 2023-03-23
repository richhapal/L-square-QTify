import { Accordion, AccordionDetails, AccordionSummary, Typography } from "@mui/material";
import React from "react";
import style from "./AccordionFAQ.module.css";
import { ReactComponent as Up } from "./Up.svg";
import { ReactComponent as Down } from "./Up.svg";

const accDesign = {
     border: "1px solid white",
     borderRadius: "10px",
     backgroundColor: "black",
     color: "white",
};

export default function AccrodionFAQ() {
     return (
          <div className={style.accrodionFAQ}>
               <div>
                    <h1>FAQs</h1>
               </div>
               <div style={{ width: "80%" }}>
                    <Accordion>
                         <AccordionSummary expandIcon={<Up />} id="panel1a-header" style={accDesign}>
                              <Typography>Is Qtify free to use?</Typography>
                         </AccordionSummary>
                         <AccordionDetails>
                              <Typography>Yes! It's 100% free and has 0% ads.</Typography>
                         </AccordionDetails>
                    </Accordion>
               </div>
               <div style={{ width: "80%" }}>
                    <Accordion>
                         <AccordionSummary expandIcon={<Down />} aria-controls="panel2a-content" id="panel2a-header" style={accDesign}>
                              <Typography>Can I downlaod and listen to song offline?</Typography>
                         </AccordionSummary>
                         <AccordionDetails>
                              <Typography>Sorry, unfortunately we don't provide the service to download any songs.</Typography>
                         </AccordionDetails>
                    </Accordion>
               </div>
          </div>
     );
}
