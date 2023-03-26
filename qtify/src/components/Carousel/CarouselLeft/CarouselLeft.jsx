import React, { useEffect } from "react";
import { useSwiper } from "swiper/react";
import style from "./CarouselLeft.module.css";
import { ReactComponent as Left } from "./Left.svg";
export default function CarouselLeft(props) {
     const swiper = useSwiper();
     // console.log("selectedFilterIndex----", props.selectedFilterIndex);

     useEffect(() => {
          // swiper.slideTo(0);
          // console.log("indexchaginasdfasfasdfsdafd", props.selectedFilterIndex);
     }, [props.selectedFilterIndex]);

     return (
          <div
               className={style.CarouselLeft}
               onClick={() => {
                    swiper.slideTo(0);
               }}
          >
               <Left />
          </div>
     );
}
