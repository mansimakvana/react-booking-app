import "./propertylist.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/bundle";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";

// Images
import img1 from "../../../img/hotels.jpeg";
import img2 from "../../../img/apartments.jpeg";
import img3 from "../../../img/resorts.jpeg";
import img4 from "../../../img/villas.jpeg";
import img5 from "../../../img/cabins.jpeg";
import img6 from "../../../img/cottages.jpeg";
import img7 from "../../../img/servicedapartment.jpeg";
import img8 from "../../../img/holidayhomes.jpeg";
import img9 from "../../../img/guesthouse.jpeg";

const PropertyData = [
  { name: "Hotels", image: img1 },
  { name: "Apartments", image: img2 },
  { name: "Resorts", image: img3 },
  { name: "Villas", image: img4 },
  { name: "Cabins", image: img5 },
  { name: "Cottages", image: img6 },
  { name: "Serviced Apartment", image: img7 },
  { name: "Holiday Homes", image: img8 },
  { name: "Guest House", image: img9 },
];

const PropertyList = () => {
  return (
    <div className="property-list">
      <div className="property-wrapper">
        <div className="property-container">
          <Swiper
            className="swiper"
            spaceBetween={5}
            slidesPerView={2} // Default for smallest screens
            breakpoints={{
              600: {
                slidesPerView: 3,
                spaceBetween: 15,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 30,
              },
            }}
            navigation
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            modules={[Navigation, Autoplay]}
          >
            {PropertyData.map((card, i) => (
              <SwiperSlide key={i} className="swiper-slide">
                <div className="image-card">
                  <img className="property-img" src={card.image} alt={card.name} />
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
