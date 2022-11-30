import React from "react";
import chrome from "../assets/chrome.svg";
import apple from "../assets/apple.svg";
import "./Reviewsstyles.css";
import StarIcon from "@mui/icons-material/Star";

class Reviews extends React.Component {
    render() {
  return (
    <div className="container-fluid bg-dark text-light contner">
      <div className="box">
        <div className="review ">
          <img src={chrome} alt="chrome svg" className="m-3" />
          <div>
            <p className="review-par1">available in the</p>
            <p className="review-par2">chrome web store</p>
          </div>
        </div>
      </div>
      <div className="box">
        <div className="review ">
          <img src={apple} alt="chrome svg" className="m-3" />
          <div>
            <p className="review-par1">available in the</p>
            <p className="review-par2">apple app store</p>
          </div>
        </div>
      </div>
      <div className="box-star">
        <div className="review rate ">
          <StarIcon /> <StarIcon /> <StarIcon /> <StarIcon /> <StarIcon />
          <p className="p-3 mt-3">chrome store reviews</p>
        </div>
      </div>
    </div>
  );
    }
}

export default Reviews;
