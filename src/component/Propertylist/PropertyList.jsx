import "./propertylist.css";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import { sliderSettings } from "../../utils/common";
import img1 from "../../../img/hotels.jpeg"
import img2 from "../../../img/apartments.jpeg"
import img3 from "../../../img/resorts.jpeg"
import img4 from "../../../img/villas.jpeg"
import img5 from "../../../img/cabins.jpeg"
import img6 from "../../../img/cottages.jpeg"
import img7 from "../../../img/servicedapartment.jpeg"
import img8 from "../../../img/holidayhomes.jpeg"
import img9 from "../../../img/guesthouse.jpeg"

const PropertyData = [
  {
      "name": "Hotels",
      "image": img1
  },
  {
      "name": "Apartments",
      "image": img2
  },
  {
      "name": "Resorts",
      "image": img3
  },
  {
      "name": "Villas",
      "image": img4
  },
  {
      "name": "Cabins",
      "image": img5
  },
  {
      "name": "Cottages",
      "image": img6
  },
  {
      "name": "Serviced Apartment",
      "image": img7
  },
  {
      "name": "Holiday Homes",
      "image": img8
  },
  {
      "name": "Guest House",
      "image": img9
  }
]

const PropertyList = () => {
  return (
    <div className="property-list">
      <div className="property-wrapper">
        <div className="property-container">
          <Swiper {...sliderSettings}>
            <SliderButtons />
            {PropertyData.map((card, i) => (
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
