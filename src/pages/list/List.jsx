import React, { useState } from "react";
import "./list.css";
import Navbar from "../../component/navbar/Navbar";
import Header from "../../component/header/Header";
import { useLocation } from "react-router-dom";
import { format } from "date-fns";
import { DateRange } from "react-date-range";
import SearchItem from "../../component/searchitem/SearchItem";
// import searchData from "../../utils/searchData";
import img1 from "../../../img/hotel1.png"
import img2 from "../../../img/hotel2.png"
import img3 from "../../../img/hotel3.png"
import img4 from "../../../img/hotel5.png"
import img5 from "../../../img/hotel6.png"
import img6 from "../../../img/hotel7.png"
import img7 from "../../../img/hotel8.png"
// import img8 from "../../../img/hotel8"


const searchData = [
  {
      image: img1,
      title: "Hytt Ahedabad",
      distance: "500m from Apartment",
      taxiOp : "Free Airtport Taxi",
      subTitle : "Studio Apartment with Air Conditiong", 
      feature: "Entire Studio",
      cancelOp: "Free Cancellation",
      rating : "Excellent",
      ratingBtn : "8.9",
      price: "$789",
      tax: "Includes tax and fees",
  },
  {
      image: img2,
      title: "Hotel Good night",
      distance: "267m from Apartment",
      taxiOp : "Charge Included",
      subTitle : "Studio Apartment with Air Conditiong", 
      feature: "Entire Studio",
      cancelOp: "Free Cancellation",
      rating : "Good",
      ratingBtn : "6.5",
      price: "$123",
      tax: "Includes tax and fees",
  },
  {
      image: img3,
      title: "Hotel Dream Inn",
      distance: "378m from Apartment",
      taxiOp : "Taxi Charges Included",
      subTitle : "Studio Apartment with Air Conditiong", 
      feature: "Entire Studio",
      cancelOp: "Free Cancellation",
      rating : "Average",
      ratingBtn : "7.6",
      price: "$345",
      tax: "Includes tax and fees",
  },
  {
      image: img4,
      title: "Hotel Green Tree",
      distance: "267m from Apartment",
      taxiOp : "Charge Included",
      subTitle : "Studio Apartment with Air Conditiong", 
      feature: "Entire Studio",
      cancelOp: "Free Cancellation",
      rating : "Good",
      ratingBtn : "6.5",
      price: "$456",
      tax: "Includes tax and fees",
  },
  {
      image: img5,
      title: "Hotel GGC Inn",
      distance: "98m from Apartment",
      taxiOp : "Free Taxi Service",
      subTitle : "Studio Apartment with Air Conditiong", 
      feature: "Entire Studio",
      cancelOp: "Free Cancellation",
      rating : "Good",
      ratingBtn : "6.5",
      price: "$456",
      tax: "Includes tax and fees",
  },
  {
      image: img6,
      title: "Fab Express Gokul Villa",
      distance: "678m from Apartment",
      taxiOp : "Free Taxi/ No Charges",
      subTitle : "Studio Apartment with Air Conditiong", 
      feature: "Entire Studio",
      cancelOp: "Free Cancellation",
      rating : "Fabulous",
      ratingBtn : "7.8",
      price: "$456",
      tax: "Includes tax and fees",
  },
  {
      image: img7,
      title: "Terazzo Suits",
      distance: "267m from Apartment",
      taxiOp : "Charge Included",
      subTitle : "Studio Apartment with Air Conditiong", 
      feature: "Entire Studio",
      cancelOp: "Free Cancellation",
      rating : "Good",
      ratingBtn : "6.5",
      price: "$89",
      tax: "Includes tax and fees",
  }
]


const List = () => {
  const location = useLocation();

  // console.log(location);
  const [destination, setDestination] = useState(location.state.destination);
  const [date, setDate] = useState(location.state.date);
  const [openDate, setOpenDate] = useState(false);
  const [options, setOptions] = useState(location.state.options);

  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="list-container">
        <div className="list-wrapper">
          <div className="list-search">
            <h1 className="list-search-title">Search</h1>
            <div className="list-search-item">
              <label htmlFor="" className="label">Destination</label>
              <input type="text" placeholder={destination} />
            </div>
            <div className="list-search-item">
              <label htmlFor="" className="label">Check-in Date</label>
              <span onClick={() => setOpenDate(!openDate)}>{`${format(
                date[0].startDate,
                "dd/MM/yyyy"
              )} to ${format(date[0].endDate, "dd/MM/yyyy")}`}</span>
              {openDate && (
                <DateRange
                  onChange={(item) => setDate([item.selection])}
                  minDate={new Date()}
                  ranges={date}
                />
              )}
            </div>
            <div className="list-search-item">
              <label htmlFor="">Options</label>
              <div className="list-item-options">
                <div className="list-option-item">
                  <span className="list-option-text">
                    Min Price <small>per night</small>
                  </span>
                  <input type="number" className="list-option-input" />
                </div>
                <div className="list-option-item">
                  <span className="list-option-text">
                    Max Price <small>per night</small>
                  </span>
                  <input type="number" className="list-option-input" />
                </div>
                <div className="list-option-item">
                  <span className="list-option-text">Adult</span>
                  <input
                    type="number"
                    placeholder={options.adult}
                    className="list-option-input"
                    min={1}
                  />
                </div>
                <div className="list-option-item">
                  <span className="list-option-text">Children</span>
                  <input
                    type="number"
                    placeholder={options.children}
                    className="list-option-input"
                    min={0}
                  />
                </div>
                <div className="list-option-item">
                  <span className="list-option-text">Room</span>
                  <input
                    type="number"
                    placeholder={options.room}
                    min={1}
                    className="list-option-input"
                  />
                </div>
              </div>
            </div>
            <button>Search</button>
          </div>
          <div className="list-result">
            {searchData.map((val) => {
              return (
                <SearchItem
                  image={val.image}
                  title={val.title}
                  distance={val.distance}
                  taxiOp={val.taxiOp}
                  subTitle={val.subTitle}
                  feature={val.feature}
                  cancelOp={val.cancelOp}
                  rating={val.rating}
                  ratingBtn={val.ratingBtn}
                  price={val.price}
                  tax={val.tax}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;
