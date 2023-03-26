import { Accordion, AccordionDetails, AccordionSummary, Typography } from "@mui/material";
import { typography } from "@mui/system";
import React from "react";
import style from "./AccordionFAQ.module.css";
import { ReactComponent as Up } from "./Up.svg";
import { ReactComponent as Down } from "./Up.svg";

const accDesign = {
     border: "1px solid white",
     borderRadius: "5px",
     backgroundColor: "black",
     color: "white",
     height: "78px",
};

let typg = {
     fontWeight: "500",
     fontSize: "20px",
     lineHeight: "30px",
     fontFamily: "Poppins",
};

export default function AccrodionFAQ({ heading, paragraph }) {
     return (
          <>
               <div style={{ width: "80%" }}>
                    <Accordion>
                         <AccordionSummary expandIcon={<Up />} id="panel1a-header" style={accDesign}>
                              <Typography style={typg}>{heading}</Typography>
                         </AccordionSummary>
                         <AccordionDetails style={{ paddingTop: "25px", paddingLeft: "32px" }}>
                              <Typography style={typg}>{paragraph}</Typography>
                         </AccordionDetails>
                    </Accordion>
               </div>
          </>
     );
}
