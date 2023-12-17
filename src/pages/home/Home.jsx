import PropertyList from "../../component/Propertylist/PropertyList";
import Feature from "../../component/featured/Feature";
import Footer from "../../component/footer/Footer";
import Header from "../../component/header/Header";
import HomeGuest from "../../component/homeguest/HomeGuest";
import MailList from "../../component/mailList/MailList";
import Navbar from "../../component/navbar/Navbar";
import QuickPlanner from "../../component/quickplanner/QuickPlanner";
import "./home.css";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <div className="home-container">
        <Feature />
        <h1 className="home-title">Browse by property type</h1>
        <PropertyList />
        <h1 className="planner-title">
          Quick and easy trip planner <br></br>
          <p className="planner-detail">
            Pick a vibe and explore the top destinations in India
          </p>
        </h1>
        <QuickPlanner />
        <h1 className="home-title">Home guests love</h1>
        <HomeGuest />
        <MailList />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
