import React from "react";
import Link from "next/link";
import Image from "next/image";

const BlogCard = ({ card }) => {
  return (
    <div key={card.id} className="card">
      <Link href={`/blog/${card.id}`}>
        <div className="card-header">
          <p>{card.name}</p>
        </div>
      </Link>
      <Link href={`/blog/${card.id}`}>
        <div className="card-image">
          <div style={{ width: "100%", height: "100%", position: "relative" }}>
            <Image src={card.img} alt={card.name} layout="fill" objectFit="cover" />
          </div>{" "}
        </div>
      </Link>
      <div className="card-date">
        <span>{card.date} </span> <div className="line"></div>
      </div>
    </div>
  );
};

export default BlogCard;
