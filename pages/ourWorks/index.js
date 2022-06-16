import React from "react";
import OurWorkCard from "../../components/OurWorkCard";

const OurWorkPage = ({ works }) => {
  return (
    <main>
      <section className="our-work-page">
        <div className="our-works-context container">
          <div className="section-top">
            <h1>Portfolio</h1>
            <div className="category">
              <span>ANA SƏHİFƏ</span>
              <div className="line"></div>
              <span>PORTFOLİO</span>
            </div>
          </div>
          <div className="section-bottom">
            <p>
              GlobalSoft təkcə bir İT şirkəti deyil, həm də qlobal və orta ölçülü müəssisələrə, startuplara kreativ texnoloji həllərlə kömək edən,
              istedadlı mütəxəssislərdən ibarət bir ailədir. İstifadəçi{" "}
            </p>
          </div>
        </div>
      </section>
      <section className="our-work-page-data">
        <div className="our-work-page-data-context container">
          <div className="tabs">
            <ul>
              <li>
                <button className="active">Bütün məhsullar</button>
              </li>
              <li>
                <button>Website</button>
              </li>
              <li>
                <button>Sistem</button>
              </li>
              <li>
                <button>Tətbiqetmə</button>
              </li>
              <li>
                <button>Rəqəmsal marketing</button>
              </li>
            </ul>
          </div>
          <div className="cards">
            {works.map((card, key) => (
              <OurWorkCard card={card} key={key} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export async function getStaticProps() {
  const workRes = await fetch("http://localhost:3000/api/workApi/");
  const works = await workRes.json();
  return {
    props: {
      works,
    },
  };
}

export default OurWorkPage;
