import React from "react";
import ServiceCard from "./ServiceCard";

const MainPageServices = ({ posts }) => {
  return (
    <>
      <div className="little-texts">
        <span>IT həllər</span> <span>Rəqəmsal marketing</span>{" "}
      </div>
      <div className="main-page-services-cards">
        {posts.map((card, key) => (
          <ServiceCard card={card} key={key} />
        ))}
      </div>
    </>
  );
};

export default MainPageServices;
