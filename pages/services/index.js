import React from "react";
import MainPageServices from "../../components/MainPageServices";
import handHolding from "../../public/images/hand-holding-dollar.svg";
import analytics from "../../public/images/analytics.svg";
import terminal from "../../public/images/terminal.svg";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import Image from "next/image";

const ServicesPage = ({ posts }) => {
  return (
    <main>
      <section className="services">
        <div className="services-context container">
          <div className="section-header">
            <div className="section-top">
              <h1>Xidmətlərimiz</h1>
              <div className="category">
                <span>ANA SƏHİFƏ</span>
                <div className="line"></div>
                <span>XIDMƏTLƏRİMİZ</span>
              </div>
            </div>
            <div className="section-bottom">
              <p>
                GlobalSoft təkcə bir İT şirkəti deyil, həm də qlobal və orta ölçülü müəssisələrə, startuplara kreativ texnoloji həllərlə kömək edən,
                istedadlı mütəxəssislərdən ibarət bir ailədir. İstifadəçi
              </p>
            </div>{" "}
          </div>
        </div>
      </section>
      <section className="services-main">
        <div className="services-main-context container">
          <MainPageServices posts={posts} />
        </div>
        <div className="whyUs">
          <div className="whyUs-context container">
            <h4>Niyə biz ?</h4>
            <p>Budur dəyərli müştərilərimizin bizi seçməsinin bəzi səbəbləri :</p>
            <div className="whyUs-cards">
              <div className="card">
                <div className="card-img">
                  <Image src={handHolding} alt="icon" />
                </div>
                <h5>Büdcəyə qənaət</h5>
                <p>Autem velit velit qui reprehenderit voluptas aliquid. Et alias omnis quia qui veniam.</p>
              </div>
              <div className="card">
                <div className="card-img">
                  <Image src={terminal} alt="icon" />
                </div>
                <h5>Strateji inkişaf</h5>
                <p>Autem velit velit qui reprehenderit voluptas aliquid. Et alias omnis quia qui veniam.</p>
              </div>
              <div className="card">
                <div className="card-img">
                  <Image src={analytics} alt="icon" />
                </div>
                <h5>Marketinqin idarə olunması</h5>
                <p>Autem velit velit qui reprehenderit voluptas aliquid. Et alias omnis quia qui veniam.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="counter-statics">
          <div className="counter-statics-context container">
            <ul>
              <li>
                {" "}
                <CountUp start={0} end={160} delay={0}>
                  {({ countUpRef, start }) => (
                    <VisibilitySensor onChange={start} delayedCall>
                      <span ref={countUpRef} className="counter" />
                    </VisibilitySensor>
                  )}
                </CountUp>
                <span className="text">Tamamlanmış Layihələr</span>
              </li>
              <li>
                <CountUp start={0} end={200} delay={0}>
                  {({ countUpRef, start }) => (
                    <VisibilitySensor onChange={start} delayedCall>
                      <span ref={countUpRef} className="counter" />
                    </VisibilitySensor>
                  )}
                </CountUp>
                <span className="text">Məmnun Müştərilər</span>
              </li>
              <li>
                <CountUp start={0} end={160} delay={0}>
                  {({ countUpRef, start }) => (
                    <VisibilitySensor onChange={start} delayedCall>
                      <span ref={countUpRef} className="counter" />
                    </VisibilitySensor>
                  )}
                </CountUp>
                <span className="text">Mütəxəssislər</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ServicesPage;

export async function getServerSideProps() {
  const res = await fetch("https://globalsoft.vercel.app/api/servicesApi/");
  const posts = await res.json();

  return {
    props: {
      posts,
    },
  };
}
