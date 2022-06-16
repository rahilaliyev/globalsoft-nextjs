import React from "react";
import Link from "next/link";
import Image from "next/image";
import PlayIcon from "../public/images/PlayIcon.svg";
import FacebookIcon from "../public/images/facebook.svg";
import InstagramIcon from "../public/images/instagram.svg";
import LinkedinIcon from "../public/images/linkedin-in.svg";

const Contact = () => {
  return (
    <main>
      <section className="contact">
        <div className="contact-context container">
          <div className="section-top">
            <h1>Əlaqə</h1>
            <div className="category">
              <span>ANA SƏHİFƏ</span>
              <div className="line"></div>
              <span>ƏLAQƏ</span>
            </div>
          </div>
          <div className="section-bottom">
            <div className="info">
              <h3>Bizimlə Əlaqə</h3>
              <p>Ipsam velit ut magnam nesciunt pariatur sunt et vel harum.</p>
              <ul>
                <li>
                  <div className="icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                      <path
                        d="M23.9531 19.1406C24.1406 18.4375 23.7656 17.7344 23.1094 17.4531L18.0469 15.2969C17.4375 15.0156 16.7344 15.2031 16.3125 15.7188L14.25 18.25C11.0156 16.6562 8.39062 13.9844 6.79688 10.75L9.28125 8.6875C9.79688 8.26562 9.98438 7.5625 9.70312 6.95312L7.54688 1.89062C7.26562 1.23438 6.5625 0.859375 5.85938 1.04688L1.125 2.125C0.46875 2.26562 0 2.875 0 3.53125C0 15.3906 9.60938 25 21.4219 25C22.125 25 22.7344 24.5312 22.875 23.875L23.9531 19.1406Z"
                        fill="#F9FAFB"
                      />
                    </svg>
                  </div>
                  <div>
                    <span>
                      (+994) 99 894 45 05 <br /> (+994) 55 894 45 05
                    </span>
                  </div>
                </li>
                <li>
                  <div className="icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="18" viewBox="0 0 24 18" fill="none">
                      <path
                        d="M12 13.5C11.2031 13.5 10.4531 13.2656 9.79688 12.75L0 5.10938V15.75C0 16.9688 1.03125 18 2.25 18H21.75C22.9688 18 24 16.9688 24 15.75V5.10938L14.2031 12.75C13.5469 13.2656 12.7969 13.5 12 13.5ZM0.75 3.79688L10.6875 11.5312C11.4844 12.1406 12.5156 12.1406 13.3125 11.5312L23.25 3.79688C23.7188 3.42188 24 2.85938 24 2.25C24 1.03125 22.9688 0 21.75 0H2.25C1.03125 0 0 1.03125 0 2.25C0 2.85938 0.28125 3.42188 0.75 3.79688Z"
                        fill="#F9FAFB"
                      />
                    </svg>
                  </div>
                  <div>
                    <span>info@globalsoft.az</span>
                  </div>
                </li>
                <li>
                  <div className="icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="25" viewBox="0 0 18 25" fill="none">
                      <path
                        d="M9 0C4.03125 0 0 4.07812 0 9C0 12.6094 1.17188 13.6875 8.0625 23.5781C8.53125 24.1875 9.42188 24.1875 9.89062 23.5781C16.7812 13.6875 18 12.6094 18 9C18 4.07812 13.9219 0 9 0ZM14.3438 7.6875L8.20312 13.7812C7.96875 14.0156 7.64062 14.0156 7.45312 13.7812L3.89062 10.2188C3.70312 10.0312 3.70312 9.70312 3.89062 9.46875L5.10938 8.29688C5.34375 8.0625 5.67188 8.0625 5.85938 8.29688L7.82812 10.2656L12.375 5.76562C12.6094 5.53125 12.9375 5.53125 13.125 5.76562L14.3438 6.98438C14.5312 7.17188 14.5312 7.5 14.3438 7.6875Z"
                        fill="#F9FAFB"
                      />
                    </svg>
                  </div>
                  <div>
                    <span>Afiyəddin Cəlilov, 20</span>
                  </div>
                </li>
              </ul>
              <div className="social-networks">
                <Link href="#">
                  <a>
                    <Image src={InstagramIcon} alt="Instagram Icon" />{" "}
                  </a>
                </Link>
                <Link href="#">
                  <a>
                    <Image src={FacebookIcon} alt="Facebook Icon" />{" "}
                  </a>
                </Link>
                <Link href="#">
                  <a>
                    <Image src={LinkedinIcon} alt="Linkedin Icon" />{" "}
                  </a>
                </Link>
              </div>
            </div>
            <form>
              <div className="form-context">
                <h3>Bizə Yazın</h3>
                <p>Ipsam velit ut magnam nesciunt pariatur sunt et vel harum.</p>
                <div className="form-input">
                  <label htmlFor="name">Ad və Soyad</label>
                  <input type="text" id="name" name="name" placeholder="Adınız qeyd edin" />
                </div>
                <div className="form-input">
                  <label htmlFor="email">E-mail</label>
                  <input type="email" id="email" name="email" placeholder="Mailinizi qeyde edin" />
                </div>
                <div className="form-input">
                  <label htmlFor="tel">Telefon</label>
                  <input type="tel" id="tel" name="tel" placeholder="Telefon nömrənizi qeyd edin" />
                </div>
                <div className="form-input">
                  <label htmlFor="note">Qeydlər</label>
                  <textarea name="note" id="note" placeholder="Əlavələrinizi qeyd edin"></textarea>
                </div>
                <button type="submit">
                  Göndər{" "}
                  <div className="play-icon">
                    <Image src={PlayIcon} alt="PlayIcon" />
                  </div>
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
