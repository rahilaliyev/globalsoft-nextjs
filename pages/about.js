import React from "react";
import Image from "next/image";
import WhoImage from "../public/images/whoWeAreImage.png";
import process1 from "../public/images/process1.png";
import process2 from "../public/images/process2.png";
import process3 from "../public/images/process3.png";
import process4 from "../public/images/process4.png";

const About = () => {
  return (
    <main>
      <section className="about">
        <div className="about-context container">
          <div className="section-header">
            <div className="section-top">
              <h1>Haqqımızda</h1>
              <div className="category">
                <span>ANA SƏHİFƏ</span>
                <div className="line"></div>
                <span>HAQQIMIZDA</span>
              </div>
            </div>
            <div className="section-bottom">
              <p>
                GlobalSoft təkcə bir İT şirkəti deyil, həm də qlobal və orta ölçülü müəssisələrə, startuplara kreativ texnoloji həllərlə kömək edən,
                istedadlı mütəxəssislərdən ibarət bir ailədir. İstifadəçi rahatlığını tam təmin edəcək şəkildə dizayn olunmuş və yenilikçiliyi özündə
                barındıran unikal veb saytların, mobil tətbiqlərin və xüsusi proqramların dizaynını və hazırlanmasını həyata keçiririk.
              </p>
            </div>{" "}
          </div>
        </div>
      </section>
      <section className="about-text">
        <div className="whoAreWe container">
          <h3>Bizi daha yaxından tanı</h3>
          <div className="whoAreWe-context">
            <div className="left-side">
              <Image src={WhoImage} alt="Who are we" />
            </div>
            <div className="right-side">
              <h4>Biz kimik?</h4>
              <p>GlobalSoft təkcə bir İT şirkəti deyil, həm də qlobal və orta ölçülü müəssisələrə, startuplara kreativ texnoloji həllərlə kömək.</p>
              <br />
              <h4>Biz nə edirik?</h4>
              <p>
                İstifadəçi rahatlığını tam təmin edəcək şəkildə dizayn olunmuş və yenilikçiliyi özündə barındıran unikal texnoloji vasitələr
                yaradırıq. Eyni zamanda, bizneslərin ayrılmaz hissəsi olan veb saytlardan tutmuş, mobil tətbiqlər və hazır proqram təminatlarına,
                hostinqdən tutmuş kontent dəstəyinə və bir sıra digər xidmətləri sizə təklif edirik
              </p>
            </div>
          </div>
        </div>
        <div className="work-process container">
          <div className="work-process-header">
            <h3>İş prosesimiz nədən ibarətdir</h3>
            <p>Hər bir layihə 4 addımdan keçərək reallaşdırılır.</p>
          </div>
          <div className="cards">
            <div className="process-card">
              <div className="process-card-img">
                <Image src={process1} alt="process" />
              </div>
              <span>1. Fikirlər Toplamaq</span>
            </div>

            <div className="process-card">
              <div className="process-card-img">
                <Image src={process2} alt="process" />
              </div>
              <span>2. Analiz və Təhlillər</span>
            </div>

            <div className="process-card">
              <div className="process-card-img">
                <Image src={process3} alt="process" />
              </div>
              <span>3. İşə Başlamaq</span>
            </div>

            <div className="process-card">
              <div className="process-card-img">
                <Image src={process4} alt="process" />
              </div>
              <span>4. Məhsulu Yekunlaşdırmaq</span>
            </div>
            <div className="line"></div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
