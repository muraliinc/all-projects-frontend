import React from "react";
import boxing_img from "../../../assets/boxing-pic-about.webp";
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
              The same qualities drive me in web development
            </span>
            ,helping me stay consistent and tackle challenges with a fighter’s
            mindset."
          </p>
          <img className="boxing-img-about" src={boxing_img} alt="boxing-img" width="158" height="198" decoding="async" loading="lazy" />
        </div>
        <div className="slide2-about-flex2">
          <Swiper
            modules={[EffectCoverflow, Pagination]}
            effect="coverflow"
            spaceBetween={-150}
            slidesPerView="auto"
            initialSlide={2}
            speed={600}
            centeredSlides={true}
            grabCursor={true}
            pagination={{ clickable: true ,
               el:".inner-pagination-about2",
                bulletClass: "my-inner-bullet",
             bulletActiveClass: "my-inner-bullet-active" }}
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
              <SwiperSlide className="inner-swiper-slide" key={index}>
                <img
                  src={img}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "scale-down",
                    display: "block",
                    userSelect: "none",
                  }}
                alt="PENCIL SKETCH SLIDE" width="240" height="302" decoding="async" loading="lazy"/>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="inner-pagination-about2"></div>
        </div>
        <div className="slide2-about-flex3">
          <p className="white-text">
            "Sketching in <span className="yellow-text">black</span> and{" "}
            <span className="yellow-text">white</span> trains my eye for detail,
            <span className="yellow-text"> balance,</span> and{" "}
            <span className="yellow-text">creativity</span>. It inspires the way
            I design and develop—keeping things simple, clean, and expressive."{" "}
          </p>
        </div>
      </div>
    </div>
  );
}
