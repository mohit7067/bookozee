import "./EasyTrip.css";
import { FaCity } from "react-icons/fa";
import { MdDirectionsBike } from "react-icons/md";
import { FaUmbrellaBeach } from "react-icons/fa";
import { AiOutlineHeart } from "react-icons/ai";
import { useState } from "react";
import EasyTripSlider from "../EasyTripCarasoul/EasyTripCarasoul";
import { romance } from "../../imagesData/imagesData";
import { outdoors } from "../../imagesData/imagesData";
import { city } from "../../imagesData/imagesData";
import { beach } from "../../imagesData/imagesData";
const EasyTrip = () => {
  const [isActive, setIsActive] = useState("tab1");
  const [data, setData] = useState(city);
  const handleClick1 = (event) => {
    setIsActive("tab1");
    setData(city);
  };
  const handleClick2 = (event) => {
    setIsActive("tab2");
    setData(outdoors);
  };
  const handleClick3 = (event) => {
    setIsActive("tab3");
    setData(romance);
  };
  const handleClick4 = (event) => {
    setIsActive("tab4");
    setData(beach);
  };
  return (
    <div className="EasyTripContainer">
      <h2>Quick and easy trip planner</h2>
      <p className="EasyTripsubHeading">
        Pick a vibe and explore the top destinations in India
      </p>
      <div className="EasyTripTab">
        <div
          className={isActive === "tab1" ? "EasyTabActive " : ""}
          onClick={handleClick1}
        >
          <FaCity /> City
        </div>
        <div
          className={isActive === "tab2" ? "EasyTabActive " : ""}
          onClick={handleClick2}
        >
          <MdDirectionsBike /> Outdoors
        </div>
        <div
          className={isActive === "tab3" ? "EasyTabActive " : ""}
          onClick={handleClick3}
        >
          <AiOutlineHeart /> Romance
        </div>
        <div
          className={isActive === "tab4" ? "EasyTabActive " : ""}
          onClick={handleClick4}
        >
          <FaUmbrellaBeach /> Beach
        </div>
      </div>
      <EasyTripSlider data={data} />
    </div>
  );
};

export default EasyTrip;
