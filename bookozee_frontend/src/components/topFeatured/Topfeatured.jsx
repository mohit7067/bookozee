import useFetch from "../../hooks/useFetch";
import "./topFeatured.css";
import { useNavigate } from "react-router-dom";
const Topfeatured = () => {
  const { data, loading, error } = useFetch(
    "/hotels/countByCity?cities=pune,mumbai,bangalore"
  );

  const navigate = useNavigate();

  const HandleNavigate = (value) => {
    navigate("/hotels", {
      state: {
        destination: value,
        dates: [
          {
            startDate: new Date(),
            endDate: new Date(),
            key: "selection",
          },
        ],
        options: {
          adult: 1,
          children: 0,
          room: 1,
        },
      },
    });
  };

  return (
    <div className="topfeatured">
      {loading ? (
        <>
          <div className="topfeaturedItem topfeaturedskeleton"></div>
          <div className="topfeaturedItem topfeaturedskeleton"></div>
          <div className="topfeaturedItem topfeaturedskeleton"></div>
        </>
      ) : (
        <>
          <div
            className="topfeaturedItem"
            onClick={() => HandleNavigate("pune")}
          >
            <img
              src="https://media.istockphoto.com/id/1265056529/photo/beautiful-evening-sky-during-sunset-in-the-city.jpg?s=612x612&w=0&k=20&c=YpO0J-Gg02RqMea0bROR72JcAdSX72yfLCmv0AbNBa4="
              alt=""
              className="topfeaturedImg"
            />
            <div className="topfeaturedTitles">
              <h1>Pune </h1>
              <h2>{data[0]} properties</h2>
            </div>
          </div>

          <div
            className="topfeaturedItem"
            onClick={() => HandleNavigate("mumbai")}
          >
            <img
              src="https://t4.ftcdn.net/jpg/02/01/18/91/360_F_201189187_HAvNKbc5dBACc8Sl0sXVv8lVbwQua0ph.jpg"
              alt=""
              className="topfeaturedImg"
            />
            <div className="topfeaturedTitles">
              <h1>Mumbai </h1>
              <h2>
                {data[1]} {data[1] > 1 ? "properties" : "property"}
              </h2>
            </div>
          </div>
          <div
            className="topfeaturedItem"
            onClick={() => HandleNavigate("bangalore")}
          >
            <img
              src="https://wallpaperaccess.com/full/1906271.jpg"
              alt=""
              className="topfeaturedImg"
            />
            <div className="topfeaturedTitles">
              <h1>Bangalore</h1>
              <h2>
                {data[2]} {data[2] > 1 ? "properties" : "property"}
              </h2>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Topfeatured;
