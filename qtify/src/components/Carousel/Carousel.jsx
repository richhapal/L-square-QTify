import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/css";
// import "swiper/css/pagination";
import "./file.css";
import style from "./Carousel.module.css";
import CarouselLeft from "./CarouselLeft/CarouselLeft";
import CarouselRight from "./CarouselRight/CarouselRight";
export default function Carousel({ data, renderComponent }) {
     const [isBeginning, setBeginning] = useState(true);
     const [isEnd, setEnd] = useState(false);

     return (
          <>
               <Swiper
                    spaceBetween={35}
                    initialSlide={0}
                    modules={[Navigation]}
                    // loop={false}
                    // speed={1000}
                    allowTouchMove={false}
                    slidesPerView={"auto"}
                    onSlideChange={(sw) => {
                         setBeginning(sw.isBeginning);
                         setEnd(sw.isEnd);
                         console.log("isBegining", sw.isBeginning);
                         console.log("isEnd", sw.isEnd);
                    }}
                    onSwiper={(swiper) => console.log(swiper)}
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
