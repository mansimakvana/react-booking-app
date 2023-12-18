import "./searchItem.css";

const SearchItem = (props) => {
  return (
    <div className="search-item-container">
      <img src={props.image} alt="" className="search-item-img" />
      <div className="search-desc">
        <h1 className="search-title">{props.title}</h1>
        <span className="search-distance">{props.distance}</span>
        <span className="search-taxiop">{props.taxiOp}</span>
        <span className="search-subtitle">{props.subTitle}</span>
        <span className="search-feature">{props.feature}</span>
        <span className="search-cancelop">{props.cancelOp}</span>
        <span className="search-cancelsubtitle">You can cancel later</span>
      </div>
      <div className="search-detail">
        <div className="search-rating">
          <span>{props.rating}</span>
          <button>{props.ratingBtn}</button>
        </div>
        <div className="search-detail-texts">
          <span className="search-price">{props.price}</span>
          <span className="search-tax-op">{props.tax}</span>
          <button className="search-button">See availability</button>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;
