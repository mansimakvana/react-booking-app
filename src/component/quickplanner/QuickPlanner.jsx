import "./quickplanner.css";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import { sliderSettingsQuick } from "../../utils/commonquick";
import img1 from "../../../img/goa.jpg"
import img2 from "../../../img/newdelhiexplore.jpg"
import img3 from "../../../img/northgoa.jpg"
import img4 from "../../../img/udaipur2.jpg"
import img5 from "../../../img/lonavala.jpg"
import img6 from "../../../img/poduchery.jpg"
import img7 from "../../../img/southgoa.jpg"

const QuickData = [
  {
      "name": "Goa",
      "image": img1,
      "Properties": "5,265 Properties"
  },
  {
      "name": "New Delhi",
      "image": img2,
      "Properties": "1,899 Properties"
  },
  {
      "name": "North Goa",
      "image": img3,
      "Properties": "980 Properties"
  },
  {
      "name": "Udaipur",
      "image": img4,
      "Properties": "7,890 Properties"
  },
  {
      "name": "Lonavala",
      "image": img5,
      "Properties": "3,678 Properties"
  },
  {
      "name": "Puducherry",
      "image": img6,
      "Properties": "789 Properties"
  },
  {
      "name": "South Goa",
      "image": img7,
      "Properties": "1,456 Properties"
  }
]
const QuickPlanner = () => {
  return (
    <div className="quick-planner-list">
      <div className="quick-planner-wrapper">
        <div className="quick-planner-container">
          <Swiper {...sliderSettingsQuick}>
            <SliderButtons />
            {QuickData.map((card, i) => (
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
