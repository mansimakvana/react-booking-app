import "./quickplanner.css";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import data from "../../utils/slider_2.json";
import { sliderSettingsQuick } from "../../utils/commonquick";

const QuickPlanner = () => {
  return (
    <div className="quick-planner-list">
      <div className="quick-planner-wrapper">
        <div className="quick-planner-container">
          <Swiper {...sliderSettingsQuick}>
            <SliderButtons />
            {data.map((card, i) => (
              <SwiperSlide key={i}>
                <div className="image-card-quick">
                  <div className="image-container">
                    <img className="property-img" src={card.image} alt="" />
                  </div>
                  <div className="name">
                    <span className="property-name">
                      <b>{card.name}</b>
                    </span>
                    <div>
                      <span className="property-detail">{card.Properties}</span>
                    </div>
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

export default QuickPlanner;

const SliderButtons = () => {
  const swiper = useSwiper();
  return (
    <div className="slider-buttons-quick">
      <button onClick={() => swiper.slidePrev()}>&lt;</button>
      <button onClick={() => swiper.slideNext()}>&gt;</button>
    </div>
  );
};
