import { Tooltip } from "@mui/material";
import React from "react";
import style from "./CartComponent.module.css";
const CartComponent = (props) => {
     const { image, title, follows, heading, likes, songs } = props;

     return (
          <Tooltip title={songs ? `${songs.length} songs` : ""} arrow>
               <div className={style.cartLayout}>
                    <div className={style.cartContent}>
                         <div className={style.imageSection}>
                              <img className={style.image} src={image} alt="album" />
                         </div>
                         <div className={style.follower}>
                              {follows && <p>{follows} Follows</p>}
                              {likes && <p>{likes} Likes</p>}
                         </div>
                    </div>
                    <div className={style.cartTitle}>
                         <span>{title}</span>
                    </div>
               </div>
          </Tooltip>
     );
};

export default CartComponent;
