import "./single.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Chart from "../../components/chart/Chart";
import { useParams, Link } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import { BsFillPersonFill } from "react-icons/bs";

const Single = () => {
  const { userId } = useParams();
  const { data, loading, error } = useFetch(`/users/${userId}`);

  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            <h1 className="title">Information</h1>
            <div className="item">
              <BsFillPersonFill style={{ fontSize: "120px" }} />
              <div className="details">
                <h1 className="itemTitle">{data?.username}</h1>
                <div className="detailItem">
                  <span className="itemKey">Email:</span>
                  <span className="itemValue">{data?.email}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Registration-At:</span>
                  <span className="itemValue">{data?.createdAt}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Changes-in-profile At:</span>
                  <span className="itemValue">{data?.updatedAt}</span>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <Chart aspect={3 / 1} title="User Spending ( Last 6 Months)" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Single;
