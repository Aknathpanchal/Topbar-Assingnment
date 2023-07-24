import React, { useState } from "react";
import "./CustomerTestimonial.scss";
import OurTeamImg1 from "../../assets/images/our-team3.svg";
import LogoImg from "../../assets/images/logo.png";
export const CustomerTestimonial = ({ rating = 5, numberOfReviews = 0 }) => {
  const CustomStarIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
    >
      <path d="M10 1L13 7L19 7.75L14.88 12.37L16 19L10 16L4 19L5.13 12.37L1 7.75L7 7L10 1Z" />
    </svg>
  );

  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= Math.ceil(rating); i++) {
      const isFilled = i <= rating;
      const isHalfFilled = i - rating > 0 && i - rating < 1;
      const starClass = isFilled ? "filled" : isHalfFilled ? "half-filled" : "";

      stars.push(
        <span key={i} className={`star ${starClass}`}>
          {<CustomStarIcon />}
        </span>
      );
    }
    return stars;
  };

  return (
    <div className="product-rating1">
      <div className="star-rating1">{renderStars()}</div>
      <div className="review">
        "A customer testimonial that highlights features and answers potential
        customer doubts about your product or service. Showcase testimonials
        from a similar demographic to your customers."
      </div>
      <div className="employ-details">
        <img src={OurTeamImg1} alt="employ" style={{ width: "56px" }} />
        <div>
          <p className="font-20">Name Surname</p>
          <p>Position, Company name</p>
        </div>
        <div className="vr1"></div>
        <img src={LogoImg} alt="logo" className="company-logo" />
      </div>
    </div>
  );
};
