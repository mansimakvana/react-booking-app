import "./footer.css";

const Footer = () => {
  const footer_list1 = [
    "Countries",
    "Regions",
    "Cities",
    "Districts",
    "Airports",
    "Hotels",
  ];

  const footer_list2 = [
    "Homes",
    "Apartments",
    "Resorts",
    "Villas",
    "Hotels",
    "Guest House",
  ];
  const footer_list3 = [
    "Car hire",
    "Flight finder",
    "Restaurant reservation",
    "Travel Agents",
  ];
  const footer_list4 = [
    "Unique places to stay",
    "All destinations",
    "Discover",
    "Reviews",
    "Discover monthly stay",
    "Travel Article",
    "Seasonals and holiday deals",
    "Traveller Review",
  ];

  const footer_list5 = [
    "About Booking.com",
    "Customer Service Help",
    "Partner Help",
    "Careers",
    "Sustainability",
    "Press centre",
    "Terms & conditions",
    "Partner dispute",
    "How we work",
    "We Price Match",
  ];
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="footer-list">
          {footer_list1.map((listitem, index) => (
            <ul className="f-list-item" key={index}>
              {listitem}
            </ul>
          ))}
        </div>
        <div className="footer-list">
          {footer_list2.map((listitem, index) => (
            <ul className="f-list-item" key={index}>
              {listitem}
            </ul>
          ))}
        </div>
        <div className="footer-list">
          {footer_list3.map((listitem, index) => (
            <ul className="f-list-item" key={index}>
              {listitem}
            </ul>
          ))}
        </div>
        <div className="footer-list">
          {footer_list4.map((listitem, index) => (
            <ul className="f-list-item" key={index}>
              {listitem}
            </ul>
          ))}
        </div>
        <div className="footer-list">
          {footer_list5.map((listitem, index) => (
            <ul className="f-list-item" key={index}>
              {listitem}
            </ul>
          ))}
        </div>
      </div>
      <div className="f-text">
        Copyright © 2023 Booking.com. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
