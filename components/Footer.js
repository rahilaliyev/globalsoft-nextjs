import React from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "../public/images/Logo.svg";
import { useRouter } from "next/router";
import EnvelopeIcon from "../public/images/envelope.svg";
import PhoneIcon from "../public/images/phone.svg";
import MapChecker from "../public/images/map-marker-check.svg";
import FacebookIcon from "../public/images/facebook.svg";
import InstagramIcon from "../public/images/instagram.svg";
import TwitterIcon from "../public/images/twitter.svg";

const Footer = () => {
  const router = useRouter();
  return (
    <footer>
      <div className="footer-context container">
        <div className="footer-navbar">
          <div className="logo">
            <Link href={"/"}>
              <Image src={Logo} alt="GlobalSoft logo" />
            </Link>
          </div>
          <nav>
            <ul>
              <li>
                <Link href="/about">
                  <a className={router.pathname == "/about" ? "active" : "inactive"}>Haqqımızda</a>
                </Link>
              </li>
              <li>
                <Link href="/services">
                  <a className={router.pathname == "/services" ? "active" : "inactive"}>Xidmətlər</a>
                </Link>
              </li>
              <li>
                <Link href="/ourWorks">
                  <a className={router.pathname == "/ourWorks" ? "active" : "inactive"}>İşlərimiz</a>
                </Link>
              </li>
              <li>
                <Link href="/blog">
                  <a className={router.pathname == "/blog" ? "active" : "inactive"}>Bloq</a>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <a className={router.pathname == "/contact" ? "active" : "inactive"}>Əlaqə</a>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="line"></div>
        <div className="footer-info">
          <div className="card envelope">
            <a href="mailto:info@globalsoft.az">
              <div className="card-image">
                <Image src={EnvelopeIcon} alt="Envelope Icon" />{" "}
              </div>
              <h4>Mail</h4>
              <p>info@globalsoft.az</p>
            </a>
          </div>
          <div className="card phone">
            <a href="tel:+994 99 894 45 05 ">
              <div className="card-image">
                <Image src={PhoneIcon} alt="Phone Icon" />{" "}
              </div>
              <h4>Telefon</h4>
              <p>
                (+994) 99 894 45 05 <br /> (+994) 55 894 45 05
              </p>
            </a>
          </div>
          <div className="card address">
            <a target="_blank" rel="noopener noreferrer" href="https://goo.gl/maps/FzvbQnQEtpZCPKLm8">
              <div className="card-image">
                <Image src={MapChecker} alt="Map Check Icon" />{" "}
              </div>
              <h4>Adres</h4>
              <p>Afiyəddin Cəlilov, 20</p>
            </a>
          </div>
        </div>
        <div className="line"></div>
        <div className="footer-bottom">
          <p className="copyright">Copyright © 2021 GlobalSoft . Bütün hüquqlar qorunur.</p>
          <div className="social-networks">
            <Link href="#">
              <a>
                <Image src={FacebookIcon} alt="Facebook Icon" />{" "}
              </a>
            </Link>
            <Link href="#">
              <a>
                <Image src={InstagramIcon} alt="Instagram Icon" />{" "}
              </a>
            </Link>
            <Link href="#">
              <a>
                <Image src={TwitterIcon} alt="Twitter Icon" />{" "}
              </a>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
