import React from "react";
import Link from "next/link";
import Image from "next/image";

const ServiceCard = ({ card }) => {
  return (
    <div key={card.id} className="service-card">
      <Link href={`/services/${card.id}`}>
        <a>
          <div className="card-img">
            <Image src={card.img} alt="Services" />
          </div>
          <h4>{card.header}</h4>
          <p>{card.p}</p>
        </a>
      </Link>
    </div>
  );
};

export default ServiceCard;
