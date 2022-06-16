import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import Logo from "../public/images/Logo.svg";
import PlayIcon from "../public/images/PlayIcon.svg";
import React, { useState } from "react";

const Header = () => {
  const router = useRouter();
  const [hamburger, setHamburger] = useState(false);

  const handleChangeHamburger = () => {
    setHamburger(!hamburger);
  };
  return (
    <header>
      <div className="header-context container">
        <div className="hamburger">
          {hamburger ? (
            <div className="btn5 open" onClick={handleChangeHamburger}>
              <div className="icon"></div>
            </div>
          ) : (
            <div className="btn5" onClick={handleChangeHamburger}>
              <div className="icon"></div>
            </div>
          )}
        </div>
        <div className="logo">
          <Link href={"/"}>
            <Image src={Logo} alt="GlobalSoft logo" style={{ cursor: "pointer" }} />
          </Link>
        </div>

        <nav className={hamburger ? "nav-active" : ""}>
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

        <div className={hamburger ? "header-right-active" : "header-right-side"}>
          <button onClick={() => router.push("/haveProject")}>
            Layihəm var
            <div className="play-icon">
              <Image src={PlayIcon} alt="PlayIcon" />
            </div>
          </button>
          <div className="languages">
            <select>
              <option>AZ</option>
              <option>EN</option>
            </select>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
