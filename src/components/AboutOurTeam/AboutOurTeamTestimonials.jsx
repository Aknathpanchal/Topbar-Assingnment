import React, { useRef } from "react";
import "./AboutOurTeamTestimonials.scss";

// assets
import OurTeamImg1 from "../../assets/images/our-team1.svg";
import OurTeamImg2 from "../../assets/images/our-team2.svg";
import OurTeamImg3 from "../../assets/images/our-team3.svg";
import LinedinIcon from "../../assets/icons/Linkedin1.svg";
import TwitterIcon from "../../assets/icons/Twitter1.svg";
import DribbleIcon from "../../assets/icons/Dribble1.svg";
import LongArrowLeft from "../../assets/icons/long-arrow-left.svg";
import LongArrowRight from "../../assets/icons/long-arrow-right.svg";

// utils
import CONSTANTS from "../../CONSTANTS";
import useWindowSize from "../../helpers/useWindowSize";
const content = [
  {
    name: "Full name",
    profileimg: OurTeamImg1,
    desc: "For all oders over ₹999, consectetur adipim scing elit.",
  },
  {
    name: "Full name",
    profileimg: OurTeamImg2,
    desc: "If goods have problems, consectetur adipim scing elit.",
  },
  {
    name: "Full name",
    profileimg: OurTeamImg3,
    desc: "100% secure payment, consectetur adipim scing elit.",
  },
  {
    name: "Full name",
    profileimg: OurTeamImg1,
    desc: "For all oders over ₹999, consectetur adipim scing elit.",
  },
  {
    name: "Full name",
    profileimg: OurTeamImg2,
    desc: "If goods have problems, consectetur adipim scing elit.",
  },
  {
    name: "Full name",
    profileimg: OurTeamImg3,
    desc: "100% secure payment, consectetur adipim scing elit.",
  },
];
const AboutOurTeamTestimonials = () => {
  const data = CONSTANTS.testimonials;
  // utils
  const { width } = useWindowSize();
  const isTablet = width < CONSTANTS.tablet;

  // handle scrolling
  const containerRef = useRef(null);
  const handleNext = () => {
    containerRef.current.scroll(
      containerRef.current.scrollLeft + innerWidth,
      0
    );
  };
  const handlePrev = () => {
    containerRef.current.scroll(
      containerRef.current.scrollLeft - innerWidth,
      0
    );
  };

  return (
    <div className="testimonials-container1">
      <div>
        <p style={{ fontSize: "48px", fontWeight: "600" }}>Our Team</p>
        <p style={{ fontSize: "18px" }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
        </p>
      </div>

      <div className="testimonials1" ref={containerRef}>
        {content?.map((item, index) => (
          <Card data={item} key={index} />
        ))}
      </div>

      <div className="card-button">
        <button id="prev">
          <img src={LongArrowLeft} alt="prev" onClick={handlePrev} />
        </button>
        <button id="next">
          <img src={LongArrowRight} alt="next" onClick={handleNext} />
        </button>
      </div>
    </div>
  );
};

export default AboutOurTeamTestimonials;

const Card = ({ data = {} }) => {
  return (
    <div className="our-team-card">
      <img className="card-img" src={data.profileimg} alt="person" />
      <div className="font-20">{data.name}</div>
      <div className="font-18">Job Title</div>
      <div className="font-16">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        varius enim in eros elementum tristique.
      </div>
      <div className="social-media-icons-container">
        <img src={LinedinIcon} alt="linkedin-icon" />
        <img src={TwitterIcon} alt="twitter-icon" />{" "}
        <img src={DribbleIcon} alt="dribble-icon" />
      </div>
    </div>
  );
};
