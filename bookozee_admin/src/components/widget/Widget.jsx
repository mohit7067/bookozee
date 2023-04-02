import "./widget.scss";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import useFetch from "../../hooks/useFetch";
import { Link } from "react-router-dom";
const Widget = ({ type }) => {
  let container;

  //temporary
  const amount = 100;
  const diff = 20;

  const { data } = useFetch("/users");

  switch (type) {
    case "user":
      container = {
        title: "USERS",
        isMoney: false,
        link: "See all users",
        to: "/users",
        count: data.length,

        icon: (
          <PersonOutlinedIcon
            className="icon"
            style={{
              color: "crimson",
              backgroundColor: "rgba(255, 0, 0, 0.2)",
            }}
          />
        ),
      };
      break;
    case "order":
      container = {
        title: "ORDERS",
        isMoney: false,
        link: "View all orders",
        icon: (
          <ShoppingCartOutlinedIcon
            className="icon"
            style={{
              backgroundColor: "rgba(218, 165, 32, 0.2)",
              color: "goldenrod",
            }}
          />
        ),
      };
      break;
    case "earning":
      container = {
        title: "EARNINGS",
        isMoney: true,
        link: "View net earnings",
        icon: (
          <MonetizationOnOutlinedIcon
            className="icon"
            style={{ backgroundColor: "rgba(0, 128, 0, 0.2)", color: "green" }}
          />
        ),
      };
      break;
    case "balance":
      container = {
        title: "BALANCE",
        isMoney: true,
        link: "See details",
        icon: (
          <AccountBalanceWalletOutlinedIcon
            className="icon"
            style={{
              backgroundColor: "rgba(128, 0, 128, 0.2)",
              color: "purple",
            }}
          />
        ),
      };
      break;
    default:
      break;
  }

  return (
    <div className="widget">
      <div className="left">
        <span className="title">{container.title}</span>
        <span className="counter">
          {container?.isMoney && "₹"}{" "}
          {container?.count ? container.count : amount}
        </span>
        {container?.to ? (
          <Link
            to={container.to}
            style={{ color: "inherit", textDecoration: "none" }}
          >
            <span className="link">{container.link}</span>
          </Link>
        ) : (
          <span className="link">{container.link}</span>
        )}
      </div>
      <div className="right">
        <div className="percentage positive">
          <KeyboardArrowUpIcon />
          {diff} %
        </div>
        {container.icon}
      </div>
    </div>
  );
};

export default Widget;
