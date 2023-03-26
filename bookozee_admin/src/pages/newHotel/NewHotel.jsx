import "./newHotel.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useState } from "react";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { v4 as uuidv4 } from "uuid";
import { storage } from "../../firebase/firebase";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import axios from "axios";
const NewHotel = ({ inputs, title }) => {
  const [img1, setImg1] = useState(null);
  const [img2, setImg2] = useState(null);
  const [img3, setImg3] = useState(null);
  const [img4, setImg4] = useState(null);
  const [img5, setImg5] = useState(null);
  const [img6, setImg6] = useState(null);
  const [photos, setPhotos] = useState([]);
  const [hoteldetails, setHotelDetails] = useState({});
  const [uploaded, setUploaded] = useState(0);
  const [progress, setProgress] = useState(0);
  const upload = (items) => {
    items.forEach((item) => {
      const fileName = new Date().getTime() + item.label + item.file.name;

      const ImageRef = ref(storage, `/items/${fileName}${uuidv4()}`);
      const uploadTask = uploadBytesResumable(ImageRef, item.file);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );
          setProgress(progress);
          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
            case "uploaded":
              console.log("Upload success");
          }
        },
        (error) => {
          console.log(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setPhotos((prev) => [...prev, downloadURL]);
            setUploaded((prev) => prev + 1);
          });
        }
      );
    });
  };

  const HandleUpload = (e) => {
    e.preventDefault();

    upload([
      { file: img1, label: "img1" },
      { file: img2, label: "img2" },
      { file: img3, label: "img3" },
      { file: img4, label: "img4" },
      { file: img5, label: "img5" },
      { file: img6, label: "img6" },
    ]);
  };
  const HandleChange = (e) => {
    setHotelDetails((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const HandleCreateHotel = async (e) => {
    e.preventDefault();
    photos.length === 6 &&
      setHotelDetails((prev) => ({ ...prev, photos: photos }));

    try {
      const res = await axios.post("/hotels", hoteldetails);
      if (res) {
        document.getElementById("HotelForm").reset();
        setUploaded(0);
        setImg1(null);
        setImg2(null);
        setImg3(null);
        setImg4(null);
        setImg5(null);
        setImg6(null);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>{title}</h1>
        </div>
        <div className="bottom">
          <div className="lefthotel">
            <img
              src={
                img1
                  ? URL.createObjectURL(img1)
                  : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
              }
              alt=""
            />
            <img
              src={
                img2
                  ? URL.createObjectURL(img2)
                  : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
              }
              alt=""
            />
            <img
              src={
                img3
                  ? URL.createObjectURL(img3)
                  : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
              }
              alt=""
            />
            <img
              src={
                img4
                  ? URL.createObjectURL(img4)
                  : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
              }
              alt=""
            />
            <img
              src={
                img5
                  ? URL.createObjectURL(img5)
                  : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
              }
              alt=""
            />
            <img
              src={
                img6
                  ? URL.createObjectURL(img6)
                  : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
              }
              alt=""
            />
          </div>
          <div className="righthotel">
            <form id="HotelForm">
              <div className="formInput">
                <label htmlFor="img1">
                  Image1: <DriveFolderUploadOutlinedIcon className="icon" />
                </label>
                <input
                  type="file"
                  id="img1"
                  onChange={(e) => setImg1(e.target.files[0])}
                  style={{ display: "none" }}
                  required
                />
              </div>
              <div className="formInput">
                <label htmlFor="img2">
                  Image2: <DriveFolderUploadOutlinedIcon className="icon" />
                </label>
                <input
                  type="file"
                  id="img2"
                  onChange={(e) => setImg2(e.target.files[0])}
                  style={{ display: "none" }}
                  required
                />
              </div>
              <div className="formInput">
                <label htmlFor="img3">
                  Image3: <DriveFolderUploadOutlinedIcon className="icon" />
                </label>
                <input
                  type="file"
                  id="img3"
                  onChange={(e) => setImg3(e.target.files[0])}
                  required
                  style={{ display: "none" }}
                />
              </div>
              <div className="formInput">
                <label htmlFor="img4">
                  Image4: <DriveFolderUploadOutlinedIcon className="icon" />
                </label>
                <input
                  type="file"
                  id="img4"
                  onChange={(e) => setImg4(e.target.files[0])}
                  required
                  style={{ display: "none" }}
                />
              </div>
              <div className="formInput">
                <label htmlFor="img5">
                  Image5: <DriveFolderUploadOutlinedIcon className="icon" />
                </label>
                <input
                  type="file"
                  id="img5"
                  onChange={(e) => setImg5(e.target.files[0])}
                  required
                  style={{ display: "none" }}
                />
              </div>
              <div className="formInput">
                <label htmlFor="img6">
                  Image6: <DriveFolderUploadOutlinedIcon className="icon" />
                </label>
                <input
                  type="file"
                  id="img6"
                  onChange={(e) => setImg6(e.target.files[0])}
                  required
                  style={{ display: "none" }}
                />
              </div>

              {inputs.map((input) => (
                <div className="formInput" key={input.id}>
                  <label>{input.label}</label>

                  <input
                    type={input.type}
                    required
                    placeholder={input.placeholder}
                    name={input.id}
                    onChange={HandleChange}
                  />
                </div>
              ))}

              <div style={{ width: "70px", height: "70px" }}>
                <CircularProgressbar value={progress} text={`${progress}%`} />
              </div>

              {uploaded === 6 && photos.length === 6 ? (
                <button
                  className="addProductButton"
                  onClick={HandleCreateHotel}
                >
                  Create Hotel
                </button>
              ) : (
                <button className="addProductButton" onClick={HandleUpload}>
                  Upload Files
                </button>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewHotel;
