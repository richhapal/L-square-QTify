import React, { useState } from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import style from "./Carousel.module.css";
import CarouselLeft from "./CarouselLeft/CarouselLeft";
import CarouselRight from "./CarouselRight/CarouselRight";
export default function Carousel({ data, renderComponent }) {
     const [isBeginning, setBeginning] = useState(true);
     const [isEnd, setEnd] = useState(false);
     return (
          <>
               <Swiper
                    spaceBetween={50}
                    loop={false}
                    speed={1000}
                    slidesPerView={"auto"}
                    onSlideChange={(sw) => {
                         setBeginning(sw.isBeginning);
                         setEnd(sw.isEnd);
                         console.log("isBegining", sw.isBeginning);
                         console.log("isEnd", sw.isEnd);
                    }}
                    onSwiper={(swiper) => console.log()}
               >
                    {!isBeginning && <CarouselLeft />}
                    {data.map((cartData) => (
                         <SwiperSlide loading="lazy" key={cartData.id}>
                              {renderComponent(cartData)}
                         </SwiperSlide>
                    ))}
                    {!isEnd && <CarouselRight />}
               </Swiper>
          </>
     );
}
