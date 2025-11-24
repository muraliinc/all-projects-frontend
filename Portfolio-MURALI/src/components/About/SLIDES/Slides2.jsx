import React from "react";
import boxing_img from "../../../assets/boxing-pic-about.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { sliderimages4 } from "./SlidesData";

export default function Slides2() {
  return (
    <div className="slide-main-container">
      <div className="slide-inside-container">
        <div className="slide2-about-flex">
          <p className="text-slide2 white-text">
            " <span className="yellow-text">Boxing</span> taught me more than
            just sport—it built my discipline, and focus.
            <span className="yellow-text">
              {" "}
              The same qualities drive me in web development
            </span>
            ,helping me stay consistent and tackle challenges with a fighter’s
            mindset."
          </p>
          <img className="boxing-img-about" src={boxing_img} alt="boxing-img" />
        </div>
        <div className="slide2-about-flex2">
          <Swiper
            modules={[EffectCoverflow, Pagination]}
            effect="coverflow"
            spaceBetween={-160}
            slidesPerView="auto"
            initialSlide={2}
            speed={600}
            centeredSlides={true}
            grabCursor={true}
            pagination={{ clickable: true }}
            coverflowEffect={{
              rotate: 0,
              stretch: 80,
              depth: 350,
              modifier: 1,
              slideShadows: true,
            }}
            className="swiper-container-custom"
          >
            {sliderimages4.map((img, index) => (
              <SwiperSlide key={index}>
                <img
                  src={img}
                  style={{
                    width: "250px",
                    height: "200px",
                    objectFit: "scale-down",
                    display :"block",
                    userSelect:"none",
                    border_radius :"43%"

                  
                  }}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
