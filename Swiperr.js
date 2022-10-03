import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Comps from "./Comps";

import { Pagination, Navigation } from "swiper";

const Swiperr = (props) => {
  return (
    <>
      <Swiper
        pagination={{
          type: "progressbar",
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><Comps te={props.arra[0]}/></SwiperSlide>
        <SwiperSlide><Comps te={props.arra[1]}/></SwiperSlide>
        <SwiperSlide><Comps te={props.arra[2]}/></SwiperSlide>
        <SwiperSlide><Comps te={props.arra[3]}/></SwiperSlide>
      </Swiper>
    </>
  );
}

export default Swiperr;