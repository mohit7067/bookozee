import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./home.scss";
import Widget from "../../components/widget/Widget";
import Featured from "../../components/featured/Featured";
import Chart from "../../components/chart/Chart";
import useFetch from "../../hooks/useFetch";
import { useEffect } from "react";
import { useState } from "react";
import { useMemo } from "react";

const Home = () => {
  const { data, loading, error } = useFetch("/users?stats=true");
  const MONTHS = useMemo(
    () => [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Agu",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    []
  );

  const [userStats, setUserStats] = useState([]);

  useEffect(() => {
    const statsList = data.sort(function (a, b) {
      return a._id - b._id;
    });
    statsList.map((item) =>
      setUserStats((prev) => [
        ...prev,
        { name: MONTHS[item._id - 1], Total: item.total },
      ])
    );
  }, [data, MONTHS]);
  console.log(userStats);
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          <Widget type="user" />
          <Widget type="order" />
          <Widget type="earning" />
          <Widget type="balance" />
        </div>
        <div className="charts">
          <Featured />
          <Chart
            title="Last 6 Months User Statistics "
            aspect={2 / 1}
            data={userStats}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
