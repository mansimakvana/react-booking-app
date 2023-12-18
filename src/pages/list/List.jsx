import React, { useState } from "react";
import "./list.css";
import Navbar from "../../component/navbar/Navbar";
import Header from "../../component/header/Header";
import { useLocation } from "react-router-dom";
import { format } from "date-fns";
import { DateRange } from "react-date-range";
import SearchItem from "../../component/searchitem/SearchItem";
import searchData from "../../utils/searchData";

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
              <label htmlFor="">Destination</label>
              <input type="text" placeholder={destination} />
            </div>
            <div className="list-search-item">
              <label htmlFor="">Check-in Date</label>
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
