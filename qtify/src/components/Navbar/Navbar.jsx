import React from "react";
import { Buttons } from "../Buttons/Buttons";
import { Logo } from "../Logo/Logo";
import { Searchbar } from "../Searchbar/Searchbar";
import style from "./Navbar.module.css";
export const Navbar = () => {
     return (
          <div className={style.navbar}>
               <Logo />
               <Searchbar />
               <Buttons />
          </div>
     );
};
