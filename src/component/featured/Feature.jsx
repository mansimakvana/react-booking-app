import "./feature.css";
import mumbai from "../../../img/mumbai.jpg";
import jaipur from "../../../img/jaipur.jpg";
import newdelhi from "../../../img/newdelhi.jpg";

const Feature = () => {
  return (
    <div className="feature">
      <div className="feature-items">
        <img src={mumbai} className="feature-img" alt="" />
        <div className="feature-title">
          <h1>Mumbai</h1>
        </div>
      </div>
      <div className="feature-items">
        <img src={jaipur} className="feature-img" alt="" />
        <div className="feature-title">
          <h1>Jaipur</h1>
        </div>
      </div>
      <div className="feature-items">
        <img src={newdelhi} className="feature-img" alt="" />
        <div className="feature-title">
          <h1>New Delhi</h1>
        </div>
      </div>
    </div>
  );
};

export default Feature;
