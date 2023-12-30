import "./propertylist.css";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import data from "../../utils/slider.json";
import { sliderSettings } from "../../utils/common";

const PropertyList = () => {
  return (
    <div className="property-list">
      <div className="property-wrapper">
        <div className="property-container">
          <Swiper {...sliderSettings}>
            <SliderButtons />
            {data.map((card, i) => (
              <SwiperSlide key={i}>
                <div className="image-card">
                  <img className="property-img" src={card.image} alt="" />
                  <div className="name">
                    <span className="property-name">
                      <b>{card.name}</b>
                    </span>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default PropertyList;

const SliderButtons = () => {
  const swiper = useSwiper();

  return (
    <div className="slider-buttons">
      <button onClick={() => swiper.slidePrev()}>&lt;</button>
      <button onClick={() => swiper.slideNext()}>&gt;</button>
    </div>
  );
};
