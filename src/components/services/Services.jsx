import React from "react";

import img from "../images/services.jpg";

import Back from "../common/Back";

import "../home/featured/featured.css";
import FeaturedCard from "../home/featured/FeaturedCard";

const Services = () => {
  return (
    <>
      <section>
        <Back name="Services" title="Services - All Services" cover={img} />
        <div className="featured container">
          <FeaturedCard />
        </div>
      </section>
    </>
  );
};

export default Services;
