import React, { useState } from "react";
import "./list.css";
import Navbar from "../../component/navbar/Navbar";
import Header from "../../component/header/Header";
import { useLocation } from "react-router-dom";
import { format } from "date-fns";
import { DateRange } from "react-date-range";

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
              <div className="list-option-item"></div>
            </div>
          </div>
          <div className="list-result"></div>
        </div>
      </div>
    </div>
  );
};

export default List;
