import React from "react";
import style from "./CartComponent.module.css";
const CartComponent = () => {
     return (
          <div className={style.cartLayout}>
               <div className={style.cartContent}>
                    <div className={style.imageSection}>
                         <img className={style.image} src={require("../../assests/cartImg.jpeg")} alt="image" />
                    </div>
                    <div className={style.follower}>
                         <p>100 Follows</p>
                    </div>
               </div>
               <div className={style.cartTitle}>
                    <span>New Bollywood</span>
               </div>
          </div>
     );
};

export default CartComponent;
