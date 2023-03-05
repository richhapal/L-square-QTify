import React from "react";
import { Logo } from "../Logo/Logo";
import style from "./Navbar.module.css";
export const Navbar = () => {
     return (
          <div className={style.navbar}>
               <Logo />
          </div>
     );
};
