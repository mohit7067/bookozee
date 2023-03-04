import Featured from "../../components/featured/Featured";
import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";
import Property from "../../components/propertyTypeSlider/Property";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <div className="homeContainer">
        <Property />
        <Featured />
      </div>
    </div>
  );
};

export default Home;
