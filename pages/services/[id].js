import React from "react";
import Image from "next/image";
import context1 from "../../public/images/context1.png";
import context2 from "../../public/images/context2.png";
import context3 from "../../public/images/context3.png";
import { useRouter } from "next/router";

const ServiceDetails = ({ data }) => {
  const router = useRouter();
  console.log(data);
  return (
    <main>
      <section className="service-details">
        <div className="service-details-context container">
          <div className="section-top">
            <h1>{data.header}</h1>
            <div className="category">
              <span>ANA SƏHİFƏ</span>
              <div className="line"></div>
              <span>Server Nəzarəti</span>
            </div>
          </div>
          <div className="context">
            <div className="context-text">
              <h5>Cəlbedici və istifadəçi dostu mobil tətbiqetmələr hazırlayırıq</h5>
              <p>
                Sosial media, rabitə, məlumat və ya oyunlar olan mobil tətbiqetmələrin sayı hər gün daha yaxşı nümunələrlə artır. Bu gün veb saytlarla
                eyni sayda istifadəçi sayına sahib mobil tətbiqetmə var. Dərhal bildirişlər və daha çox xüsusiyyətlər sayəsində həyatımızı
                asanlaşdıracaq mesajlar verən mobil qurğularla uyğun olmaqla mobil tətbiqetmələr, internet əlaqələrində mühüm yer tutur. İnternet
                istifadəsi nisbətlərinin dünyadakı cihaz sayına baxdığımızda təxminən 70% nisbətində smartfon və planşetlərə üstünlük verildiyi
                görülür. Belə bir kütlə ilə bütün rəqəmsal kanallar vasitəsi ilə məlumat ötürülməsi üçün markalar mobil tətbiqlərə üstünlük verirlər.
              </p>
            </div>
            <div className="context-image">
              <Image src={context3} alt="Context" />
            </div>
          </div>{" "}
          <div className="context">
            <div className="context-image">
              <Image src={context2} alt="Context" />
            </div>
            <div className="context-text">
              <h5>IOS mobil proqramların hazırlanması</h5>
              <p>
                Apple iPhones sahiblərinin sayı hər il artır. Əminik ki, bu böyük istifadəçi bazasına özünəməxsus həll yolunuzu təklif etmək
                istəyirsiniz! Swift və Objective-C proqramlaşdırma dillərindən və Apple-ın öz development alətlərindən istifadə edərək iPhone və
                iPad-lər üçün iOS proqramlarını yığırıq.
              </p>
            </div>
          </div>
          <div className="context">
            <div className="context-text">
              <h5>Android mobil proqramların hazırlanması</h5>
              <p>
                Android mobil proqramları tamamilə Native olaraq java və ya kotlin dilindən istifadə edərək hazırlayıb play marketə yerləşdiririk.
                üstəlik 1 il tamamilə ödənişsiz texniki dəstək göstəririk. Android istifadəçilərinin, iOS istifadəçilərinə nisbətən daha yüksək marka
                sədaqətinin olduğunu bilirdinizmi? Android mobil tətbiqetməsini sıfırdan proqramlayırıq və mövcud iOS proqramınızı Android-ə köçürə
                bilərik.{" "}
              </p>
            </div>
            <div className="context-image">
              <Image src={context1} alt="Context" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export const getServerSideProps = async (context) => {
  const res = await fetch(`http://localhost:3000/api/servicesApi/${context.params.id}`);
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
};

export default ServiceDetails;

// export async function getStaticPaths() {
//   const res = await fetch("http://localhost:3000/api/servicesApi/servicesDataApi");
//   const posts = await res.json();

//   const paths = posts.map((post) => ({
//     params: { slug: post.id.toString() },
//   }));

//   return { paths, fallback: false };
// }

// export async function getStaticProps({ params }) {
//   // params contains the post `id`.
//   // If the route is like /posts/1, then params.id is 1
//   const res = await fetch(`http://localhost:3000/api/servicesApi/${params.id}`);
//   const post = await res.json();

//   // Pass post data to the page via props
//   return { props: { post } };
// }
