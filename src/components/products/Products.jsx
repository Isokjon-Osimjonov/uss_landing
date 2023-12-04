import React, { useState } from "react";
import "./products.css";

import i1 from "../../assets/1.jpg";
import i2 from "../../assets/21.jpg";
import i3 from "../../assets/3.jpg";
import i4 from "../../assets/2.jpg";

import Image2 from "../../assets/12.jpg";
import Image3 from "../../assets/13.jpg";
import Image4 from "../../assets/14.jpg";
import Image6 from "../../assets/16.jpg";
import Image7 from "../../assets/17.jpg";
import Image8 from "../../assets/18.jpg";
import Image9 from "../../assets/19.jpg";
import Image10 from "../../assets/20.jpg";

import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

const Products = () => {
  const data = [
    {
      id: 0,
      image: i1,
    },
    {
      id: 1,
      image: i2,
    },
    {
      id: 2,
      image: i3,
    },
    {
      id: 3,
      image: i4,
    },
  ];
  const [activeNav, setActiveNav] = useState("#home");

  return (
    <section id="products">
      <div className="up">
        <div className="products_info">
          <h1 className="products_title">Our products</h1>
          <p className="paragraph">
            In our fruit selection process, we strive to select the best quality
            uniquely dried fruits. Each fruit is preserved in a safe and quality
            condition to provide the best results for your health, undergoing
            natural purification and prolongation processes.
          </p>
          <button
            onClick={() => setActiveNav("#contact")}
            className="cta-button"
          >
            <a
              href="#contact"
              onClick={() => setActiveNav("#contact")}
              // className="cta-button"
            >
              Place an order
            </a>
          </button>
        </div>
        <Swiper
          className="container testimonials__container"
          spaceBetween={40}
          slidesPerView={1}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
        >
          {data.map(({ id, image }) => {
            return (
              <SwiperSlide key={id} className="testimonial ">
                <img src={image} alt="" />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      <div className="image_stock">
        <img className="product_img" src={Image2} alt="" />
        <img className="product_img" src={Image3} alt="" />
        <img className="product_img" src={Image4} alt="" />
        <img className="product_img" src={Image6} alt="" />
        <img className="product_img" src={Image7} alt="" />
        <img className="product_img" src={Image8} alt="" />
        <img className="product_img" src={Image9} alt="" />
        <img className="product_img" src={Image10} alt="" />
      </div>
    </section>
  );
};

export default Products;
