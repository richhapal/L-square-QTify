import React from "react";
import AccrodionFAQ from "../AccordionFAQ/AccrodionFAQ";
import style from "./FaqSection.module.css";

const FaqSection = () => {
     return (
          <>
               <div className={style.accrodionFAQ}>
                    <div>
                         <h1>FAQs</h1>
                    </div>
                    <AccrodionFAQ heading={"Is Qtify free to use?"} paragraph={"Yes! It's 100% free and has 0% ads."} />
                    <AccrodionFAQ heading={"Can I downlaod and listen to song offline?"} paragraph={"Sorry, unfortunately we don't provide the service to download any songs."} />
               </div>
          </>
     );
};

export default FaqSection;
