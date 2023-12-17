import "./feature.css";

const Feature = () => {
  return (
    <div className="feature">
      <div className="feature-items">
        <img src="../../../img/mumbai.jpg" className="feature-img" alt="" />
        <div className="feature-title">
          <h1>Mumbai</h1>
        </div>
      </div>
      <div className="feature-items">
        <img src="../../../img/jaipur.jpg" className="feature-img" alt="" />
        <div className="feature-title">
          <h1>Jaipur</h1>
        </div>
      </div>
      <div className="feature-items">
        <img src="../../../img/newdelhi.jpg" className="feature-img" alt="" />
        <div className="feature-title">
          <h1>New Delhi</h1>
        </div>
      </div>
    </div>
  );
};

export default Feature;
