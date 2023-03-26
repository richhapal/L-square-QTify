import React from "react";
import style from "./Hero.module.css";
const HeroSections = () => {
     return (
          <section className={style.heroSection}>
               <div className={style.heroContent}>
                    <div className={style.heroText}>
                         <h1>100 Thousand Songs, ad-free</h1>
                         <h1>Over thousands podcast episodes</h1>
                    </div>
                    <div className={style.heroImage}>
                         <img src={require("../../assests/vibrating-headphone.png")} alt="heroImage" height="212px" width="212px" />
                    </div>
               </div>
          </section>
     );
};
export default HeroSections;
