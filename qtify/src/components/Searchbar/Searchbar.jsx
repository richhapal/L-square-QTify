import React from "react";
import style from "./Searchbar.module.css";
export const Searchbar = () => {
     return (
          <div className={style.search}>
               <input className={style.input} type="text" name="search" id="search" placeholder="Search a song of your choice" />
               <div className={style.searchbutton}>
                    <img src={require("../../assests/SearchIcon.png")} alt="searchIcons" width={23} height={23} />
               </div>
          </div>
     );
};
