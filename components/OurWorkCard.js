import React from "react";
import Link from "next/link";
import Image from "next/image";

const OurWorkCard = ({ card }) => {
  return (
    <div className="our-work-card" key={card}>
      <div className="card-header">
        {" "}
        <Link href={`/ourWorks/${card.id}`}>
          <h5>{card.siteHeader}</h5>
        </Link>
        <Link href={"#"}>{card.type}</Link>
      </div>
      <div className="card-image">
        <Image src={card.img} alt="Website" />
      </div>
    </div>
  );
};

export default OurWorkCard;
