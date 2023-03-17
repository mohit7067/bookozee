import EasyTrip from "../../components/EasyTrip/EasyTrip";
import Featured from "../../components/featured/Featured";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import MailList from "../../components/MailList/MailList";
import Navbar from "../../components/Navbar/Navbar";
import Property from "../../components/propertyTypeSlider/Property";
import Topfeatured from "../../components/topFeatured/Topfeatured";
import TopProperties from "../../components/topproperties/TopProperties";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <div className="homeContainer">
        <Topfeatured />
        <Property />
        <Featured />
        <TopProperties />
        <EasyTrip />
      </div>
      <MailList />
      <Footer />
    </div>
  );
};

export default Home;
