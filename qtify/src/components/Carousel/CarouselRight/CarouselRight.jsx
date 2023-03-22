import React from "react";
import { useSwiper } from "swiper/react";
import style from "./CarouselRight.module.css";
import { ReactComponent as Right } from "./Right.svg";
export default function CarouselRight() {
     const swiper = useSwiper();
     return (
          <div
               className={style.CarouselRight}
               onClick={() => {
                    swiper.slideNext();
               }}
          >
               <Right />
          </div>
     );
}
