const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const { connection } = require("./Config/db");
const { AuthRouter } = require("./routes/auth");
const { HotelRouter } = require("./routes/hotels");
const { RoomRouter } = require("./routes/rooms");
const { UserRouter } = require("./routes/user");
const { BookingRouter } = require("./routes/booking");
const app = express();
require("dotenv").config();
//middlewares
app.use(express.json());
app.use(cookieParser());
const corsOptions = {
  origin: [
    "https://bookozee.netlify.app",
    "https://bookozee-admin.netlify.app",
  ],
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};
app.use(cors(corsOptions));

app.use(function (req, res, next) {
  res.header("Content-Type", "application/json;charset=UTF-8");
  res.header("Access-Control-Allow-Credentials", true);
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.get("/", (req, res) => {
  res.send("homepage !");
});

app.use("/api/auth", AuthRouter);
app.use("/api/hotels", HotelRouter);
app.use("/api/rooms", RoomRouter);
app.use("/api/users", UserRouter);
app.use("/api/user/booking", BookingRouter);

app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "something went wrong !";

  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
    stack: err.stack,
  });
});
app.listen(process.env.Port, async () => {
  try {
    await connection;
    console.log("connected to db");
  } catch (error) {
    console.log(error);
  }

  console.log(`listening on ${process.env.Port}`);
});
