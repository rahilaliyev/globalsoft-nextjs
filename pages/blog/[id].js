import React from "react";
import Image from "next/image";
import Card from "../../components/BlogCard";

const BlogDetails = ({ data, blogs }) => {
  console.log(data);
  return (
    <main>
      <section className="blog-details">
        <div className="blog-details-context container">
          <h1> {data.name}</h1>
          <span>{data.date}</span>
          <div className="page-image">
            <Image src={data.img} alt="Blog" />
          </div>
          <p>
            Porro modi minima facere. Est in enim deserunt placeat magni. Commodi maiores deserunt reprehenderit id explicabo debitis. Voluptas quidem
            omnis deserunt. Magnam omnis quaerat repellendus nobis nostrum molestias sint nostrum at. Optio perspiciatis qui vitae corporis nesciunt
            odit odit. Quis voluptatem in qui exercitationem a at esse quod nobis. Culpa illum ea et sapiente accusantium porro laborum. Corporis eos
            mollitia ut architecto neque minus porro accusamus. Sunt omnis sit consequatur maiores est est saepe quod voluptates. Aliquam et non rerum
            commodi magnam sed et molestiae laboriosam. Debitis autem corporis sed. Porro modi minima facere. Est in enim deserunt placeat magni.
            Commodi maiores deserunt reprehenderit id explicabo debitis. Voluptas quidem omnis deserunt. Magnam omnis quaerat repellendus nobis
            nostrum molestias sint nostrum at. Optio perspiciatis qui vitae corporis nesciunt odit odit. Quis voluptatem in qui exercitationem a at
            esse quod nobis. Culpa illum ea et sapiente accusantium porro laborum. Corporis eos mollitia ut architecto neque minus porro accusamus.
            Sunt omnis sit consequatur maiores est est saepe quod voluptates. Aliquam et non rerum commodi magnam sed et od voluptates. Aliquam et non
            rerum commodi magnam sed et molestiae laboriosam. Debitis autem corporis sed.
          </p>
        </div>
      </section>
      <section className="similiar">
        <div className="similiar-context container">
          <h1>Digər bloqlar</h1>
          <div className="cards">
            {blogs.slice(0, 6).map((card, key) => (
              <Card card={card} key={key} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default BlogDetails;

export const getServerSideProps = async (context) => {
  const res = await fetch(`https://globalsoft.vercel.app/api/blogApi/${context.params.id}`);
  const data = await res.json();

  const resBlog = await fetch("https://globalsoft.vercel.app/api/blogApi/");
  const blogs = await resBlog.json();

  return {
    props: {
      data,
      blogs,
    },
  };
};
