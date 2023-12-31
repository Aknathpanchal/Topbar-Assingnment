import React from "react";
import "./AboutBanner.scss";
import BannerImg from "../../assets/images/about-us-hero-section.svg";

export const AboutBanner = () => {
  return (
    <div className="about-banner">
      <div className="banner-information">
        <p className="font-48">Trupti Treats</p>
        <p className="font-18">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce varius
          faucibus massa sollicitudin amet augue. Nibh metus a semper purus
          mauris duis. Lorem eu neque, tristique quis duis. Nibh scelerisque ac
          adipiscing velit non nulla in amet pellentesque. Sit turpis pretium
          eget maecenas. Vestibulum dolor mattis consectetur eget commodo vitae.
        </p>
        <p className="font-18">
          Amet pellentesque sit pulvinar lorem mi a, euismod risus rhoncus.
          Elementum ullamcorper nec, habitasse vulputate. Eget dictum quis est
          sed egestas tellus, a lectus. Quam ullamcorper in fringilla arcu
          aliquet fames arcu.Lacinia eget faucibus urna, nam risus nec elementum
          cras porta. Sed elementum, sed dolor purus dolor dui. Ut dictum nulla
          pulvinar vulputate sit sagittis in eleifend dignissim. Natoque mauris
          cras molestie velit. Maecenas eget adipiscing quisque viverra lectus
          arcu, tincidunt ultrices pellentesque.
        </p>
      </div>
      <div>
        <img className='banner-img'  src={BannerImg} alt="about-us-banner" />
      </div>
    </div>
  );
};
