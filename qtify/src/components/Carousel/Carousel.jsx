import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/css";
// import "swiper/css/pagination";
import "./file.css";
import style from "./Carousel.module.css";
import CarouselLeft from "./CarouselLeft/CarouselLeft";
import CarouselRight from "./CarouselRight/CarouselRight";
let initial = true;
export default function Carousel({ data, renderComponent, selectedFilterIndex }) {
     const [isBeginning, setBeginning] = useState(true);
     const [isEnd, setEnd] = useState(false);
     let [Swp, setSwp] = useState(false);
     useEffect(() => {
          setBeginning(true);
          setEnd(false);
          if (Swp) {
               Swp.slideTo(0);
          }
          // console.log("render");
          // console.log("indexChagen", swp);
          // swp.slideTo(0);
          // Swp.slideTo(0);
     }, [selectedFilterIndex]);

     // console.log("isBegin", isBeginning, "isEnd", isEnd);

     return (
          <>
               <Swiper
                    spaceBetween={35}
                    initialSlide={0}
                    modules={[Navigation]}
                    // loop={false}
                    speed={500}
                    allowTouchMove={true}
                    slidesPerView={"auto"}
                    onSlideChange={(sw) => {
                         setBeginning(sw.isBeginning);
                         setEnd(sw.isEnd);
                         // console.log(sw);
                         // console.log("isBegining", sw.isBeginning);
                         // console.log("isEnd", sw.isEnd);
                         initial = true;
                    }}
                    onSwiper={(swiper) => {
                         setSwp(swiper);
                    }}
                    className="mySwiper"
               >
                    {!isBeginning && <CarouselLeft />}
                    {data.map((cartData) => (
                         <SwiperSlide key={cartData.id}>{renderComponent(cartData)}</SwiperSlide>
                    ))}
                    {!isEnd && <CarouselRight />}
               </Swiper>
          </>
     );
}
