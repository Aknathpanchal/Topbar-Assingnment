import React from "react";
import "./About.scss";
import PageBanner from "../../components/PageBanner/PageBanner";
import { AboutBanner } from "../../components/AboutBanner/AboutBanner";
import { CustomerTestimonial } from "../../components/CustomerTestimonial/CustomerTestimonial";
import AboutOurTeamTestimonials from "../../components/AboutOurTeam/AboutOurTeamTestimonials";
const About = () => {
  return (
    <div className="about-home">
      <PageBanner
        title={"About Us"}
        breadCrumbs={[
          { label: "Home", link: "/" },
          { label: "About Us", link: "/about" },
        ]}
      />
      <AboutBanner />
      <AboutOurTeamTestimonials />
      <CustomerTestimonial />
    </div>
  );
};

export default About;
