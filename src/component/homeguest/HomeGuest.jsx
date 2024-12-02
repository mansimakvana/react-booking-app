import "./homeguest.css";
import homeguest1 from "../../../img/homeguest1.png";
import homeguest2 from "../../../img/homeguest2.png";
import homeguest3 from "../../../img/homeguest3.png";
import homeguest4 from "../../../img/homeguest4.png";

const HomeGuest = () => {
  return (
    <div className="hg">
      <div className="hg-container">
        <img className="hg-image" src={homeguest1} alt="" />
        <span className="hgname">Leman Locke</span>
        <span className="hgcity">London</span>
        <span className="hgprice">Starting from $340</span>
        <div className="hg-rating">
          <button>7.9</button>
          <span>Excellent</span>
        </div>
      </div>
      <div className="hg-container">
        <img className="hg-image" src={homeguest2} alt="" />
        <span className="hgname">Vita Apartments</span>
        <span className="hgcity">Italy</span>
        <span className="hgprice">Starting from $128</span>
        <div className="hg-rating">
          <button>6.7</button>
          <span>Good</span>
        </div>
      </div>
      <div className="hg-container">
        <img className="hg-image" src={homeguest3} alt="" />
        <span className="hgname">Flora Chiado</span>
        <span className="hgcity">Portugal</span>
        <span className="hgprice">Starting from $405</span>
        <div className="hg-rating">
          <button>8.2</button>
          <span>Fabulous</span>
        </div>
      </div>
      <div className="hg-container">
        <img className="hg-image" src={homeguest4} alt="" />
        <span className="hgname">Amsterdam</span>
        <span className="hgcity">Netharlands</span>
        <span className="hgprice">Starting from $120</span>
        <div className="hg-rating">
          <button>9.4</button>
          <span>Superb</span>
        </div>
      </div>
    </div>
  );
};

export default HomeGuest;
