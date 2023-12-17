import Feature from "../../component/featured/Feature";
import Header from "../../component/header/Header";
import Navbar from "../../component/navbar/Navbar";
import "./home.css";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <div className="home-container">
        <Feature />
      </div>
    </div>
  );
};

export default Home;
