import React from "react";
import Card from "../../components/BlogCard";

const Services = ({ blogs }) => {
  return (
    <main>
      <section className="blog-page">
        <div className="blog-page-context ">
          <div className="section-header container">
            <div className="section-top">
              <h1>Blog</h1>
              <div className="category">
                <span>ANA SƏHİFƏ</span>
                <div className="line"></div>
                <span>BLOG</span>
              </div>
            </div>
            <div className="section-bottom">
              <p>
                GlobalSoft təkcə bir İT şirkəti deyil, həm də qlobal və orta ölçülü müəssisələrə, startuplara kreativ texnoloji həllərlə kömək edən,
                istedadlı mütəxəssislərdən ibarət bir ailədir. İstifadəçi{" "}
              </p>
            </div>
          </div>
          <div className="cards">
            <div className="card-context container">
              {blogs.map((card, key) => (
                <Card card={card} key={key} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export async function getStaticProps() {
  const res = await fetch("http://localhost:3000/api/blogApi/");
  const blogs = await res.json();
  return {
    props: {
      blogs,
    },
  };
}

export default Services;
