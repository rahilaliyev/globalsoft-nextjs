import React from "react";
import PlayIcon from "../../public/images/PlayIconBlue.svg";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import OurWorkImage from "../../public/images/our-work-page-big-photo.png";
import OurWorkCard from "../../components/OurWorkCard";
import Image from "next/image";

const OurWorkPageDetails = ({ works }) => {
  return (
    <main>
      <section className="our-work-details">
        <div className="our-work-details-context container">
          <div className="section-header">
            <div className="section-top">
              <h1>KİDZONE</h1>
            </div>
            <div className="section-bottom">
              <p>
                GlobalSoft təkcə bir İT şirkəti deyil, həm də qlobal və orta ölçülü müəssisələrə, startuplara kreativ texnoloji həllərlə kömək edən,
                istedadlı mütəxəssislərdən ibarət bir ailədir. İstifadəçi{" "}
              </p>
              <button>
                Website{" "}
                <div className="play-icon">
                  <Image src={PlayIcon} alt="PlayIcon" />
                </div>
              </button>
            </div>
          </div>
          <div className="site-info">
            <div className="left-side">
              <ul>
                <li>
                  {" "}
                  <CountUp start={0} end={160} delay={0}>
                    {({ countUpRef, start }) => (
                      <VisibilitySensor onChange={start} delayedCall>
                        <span ref={countUpRef} className="counter" />
                      </VisibilitySensor>
                    )}
                  </CountUp>{" "}
                  <span className="text">Səhifə sayı</span>
                </li>
                <li>
                  <CountUp start={0} end={200} delay={0}>
                    {({ countUpRef, start }) => (
                      <VisibilitySensor onChange={start} delayedCall>
                        <span ref={countUpRef} className="counter" />
                      </VisibilitySensor>
                    )}
                  </CountUp>{" "}
                  <span className="text">İşçi sayı</span>
                </li>
                <li>
                  <div>
                    <CountUp start={0} end={2} delay={0}>
                      {({ countUpRef, start }) => (
                        <>
                          <VisibilitySensor onChange={start} delayedCall>
                            <span ref={countUpRef} className="counter" />
                          </VisibilitySensor>
                        </>
                      )}
                    </CountUp>{" "}
                    <span className="counter-text"> ay</span>
                  </div>
                  <span className="text">Layihə müddəti</span>
                </li>
              </ul>
            </div>
            <div className="right-side">
              <Image src={OurWorkImage} alt="Site" />
            </div>
          </div>
          <div className="about-site">
            <div className="about-site-context">
              <h3>Haqqında</h3>
              <p>
                Globalsoft şirkətlərə öz potensial müştəriləri ilə qurduğu əlaqəni daha yaxşı idarə etmək üçün `CRM tətbiqi` xidmətini təklif edir.
                Xidmət çərçivəsində satış artımının dəstəklənməsi, sosial media inteqrasiyası, müştəri münasibətlərinin qaydaya salınmasında sizə
                dəstək oluruq. Biznesinizi uğurlu inkişaf etdirmək istəyirsinizsə, müştərilərlə qarşılıqlı münasibətləri idarə etməlisiniz. CRM-in
                köməyi ilə siz müştəri bazasını formalaşdıra biləcəksiniz. Bir çox CRM sistemləri arasından əsasən AmoCRM ilə işləyirik. Böyük həcmli
                elektron ticarət mağazalarından tutmuş bir çox satış, xidmət və s. biznes sahələrində AmoCRM-in tətbiqi nəticəsində satışların
                artırılması, müştəri münasibətlərinin tam nəzarətdə saxlanılması, potensial müştərilərin real satışa çevrilməsi kimi nəticələr əldə
                edirik. Məqsədimiz AmoCRM tətbiq etməklə bütün növ biznes proseslərin daha effektiv çalışmasında sizə yardımcı olmaqdır. Bu xidmətimiz
                sayəsində şirkətinizin səmərəli işinin həyata keçirilməsini reallaşdıra bilərsiniz.
              </p>
              <ul>
                Layihə üzərində işləyən əməkdaşlarımız:
                <li>UI/ UX Dizayner - Elbəy Omarov</li>
                <li>Back end proqramçı - Eynur Gədəbəyli</li>
                <li>Front end proqramçı - Rənar Bakili</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="similiar">
        <div className="similiar-context container">
          <h1>Digər layihələrimiz</h1>
          <div className="our-card-similiar">
            {works.slice(0, 6).map((card, key) => (
              <OurWorkCard card={card} key={key} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export const getServerSideProps = async (context) => {
  const res = await fetch(`https://globalsoft.vercel.app/api/workApi/${context.params.id}`);
  const data = await res.json();

  const resWorks = await fetch("https://globalsoft.vercel.app/api/workApi/");
  const works = await resWorks.json();

  return {
    props: {
      data,
      works,
    },
  };
};

export default OurWorkPageDetails;
