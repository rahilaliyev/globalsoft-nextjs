import React from "react";
import PlayIcon from "../public/images/PlayIcon.svg";
import Image from "next/image";

const HaveProject = () => {
  return (
    <main>
      <section className="haveProject">
        <div className="haveProject-context container">
          <form>
            <h1>Layihəniz var?</h1>
            <div className="spans">
              <span>IT həllər</span>
              <span>Rəqəmsal marketing</span>
            </div>
            <div className="form-input">
              <label htmlFor="service">Xidmət seçin</label>
              <select name="service" id="service" placeholder="Xidməti seçin">
                <option value="">IT</option>
              </select>
            </div>
            <div className="form-input">
              <label htmlFor="name">Ad və Soyad</label>
              <input type="text" name="name" id="name" placeholder="Adınız qeyd edin" />
            </div>
            <div className="form-input">
              <label htmlFor="name">E-mail</label>
              <input type="email" name="email" id="email" placeholder="Mailinizi qeyde edin" />
            </div>
            <div className="form-input">
              <label htmlFor="tel">Telefon</label>
              <input type="tel" name="tel" id="tel" placeholder="Telefon nömrənizi qeyd edin" />
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
          </form>
        </div>
      </section>
    </main>
  );
};

export default HaveProject;
