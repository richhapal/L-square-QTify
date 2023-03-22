import React from "react";
import { useSwiper } from "swiper/react";
import style from "./CarouselLeft.module.css";
import { ReactComponent as Left } from "./Left.svg";
export default function CarouselLeft() {
     const swiper = useSwiper();
     return (
          <div
               className={style.CarouselLeft}
               onClick={() => {
                    swiper.slidePrev();
               }}
          >
               <Left />
          </div>
     );
}
