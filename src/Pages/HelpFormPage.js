import React from "react";
import Layout from "../Components/Layout";

const HelpFormPage = () => {
  return (
    <Layout>
      <form id="form">
        <input
          type="text"
          name="yardimTipi"
          value="gida"
          style={{ display: "none" }}
          readOnly=""
        />
        <input
          type="text"
          name="yardimDurumu"
          value="bekleniyor"
          style={{ display: "none" }}
          readOnly=""
        />
        <div className="form-row form-col-3 my-1">
          <div className="form-col">
            <label for="adSoyad">* İsim &amp; Soyisim:</label>
            <input
              type="text"
              className="form-control required-field"
              id="adSoyad"
              name="adSoyad"
              placeholder="* İsim &amp; Soyisim"
              required=""
            />
          </div>
          <div className="form-col">
            <label for="email">Email:</label>
            <input
              type="email"
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
              className="form-control"
              id="email"
              name="email"
              placeholder="Email"
            />
          </div>
          <div className="form-col">
            <label for="telefon">* Telefon (5XX XXX XX XX): </label>
            <input
              type="tel"
              className="form-control"
              id="telefon"
              name="telefon"
              placeholder="* Telefon"
              required=""
            />
          </div>
        </div>
        <div
          className="form-row form-col-3 my-1"
          id="yedekTelefonlar"
          style={{ alignItems: "center" }}
        >
          <a href="javascript: void 0" id="ekTelefonLinki" className="plus-button">
            Başka Telefon Ekle
          </a>
        </div>
        <div className="form-row my-1">
          <label for="kisiSayisi">Kişi Sayısı:</label>
          <input
            type="number"
            min="1"
            max="1024"
            maxlength="4"
            className="form-control"
            id="kisiSayisi"
            name="kisiSayisi"
            placeholder="Kişi Sayısı"
          />
        </div>
        <div className="form-row my-1">
          <label for="adres">* Adres:</label>
          <input
            type="text"
            className="form-control required-field"
            id="adres"
            name="adres"
            placeholder="* Adres"
            required=""
          />
        </div>
        <div className="form-row my-1">
          <label for="adres-tarifi">Adres Tarifi:</label>
          <input
            type="text"
            className="form-control"
            id="adres-tarifi"
            name="adresTarifi"
            placeholder="Adres Tarifi"
          />
        </div>
        <div className="form-row form-col-auto my-1">
          <div className="form-col" style={{ width: "100px" }}>
            <div className="form-row">
              <label> Aciliyet: </label>
            </div>
            <div className="form-row">
              <label for="kritik">
                <input
                  type="radio"
                  id="kritik"
                  name="acilDurum"
                  value="kritik"
                />
                Kritik
              </label>
            </div>
            <div className="form-row my-1">
              <label for="orta">
                <input type="radio" id="orta" name="acilDurum" value="orta" />
                Orta
              </label>
            </div>
            <div className="form-row my-1">
              <label for="normal">
                <input
                  type="radio"
                  id="normal"
                  name="acilDurum"
                  value="normal"
                />
                Normal
              </label>
            </div>
          </div>
          <div className="form-col my-1">
            <label for="fizikiDurum">* Fiziki Durum Hakkında Bilgi:</label>
            <textarea
              className="form-control required-field"
              name="fizikiDurum"
              id="fizikiDurum"
              cols="30"
              rows="4"
              placeholder="* Fiziki Durum Hakkında Bilgi"
              required=""
            ></textarea>
          </div>
        </div>
        <div className="form-row my-1">
          <label for="googleMapLink">Google Maps Linki:</label>
          <input
            type="text"
            className="form-control"
            id="googleMapLink"
            name="googleMapLink"
            placeholder="Google Maps Linki"
          />
        </div>
        <div className="form-col my-1">
          <div className="form-row">
            <label for="arac-var">
              <input
                type="radio"
                id="arac-var"
                name="fields-aracDurumu"
                value="var"
              />
              Aracım var, yardımı kendim teslim alabilirim.
            </label>
          </div>
          <div className="form-row my-1">
            <label for="arac-yok">
              <input
                type="radio"
                id="arac-yok"
                name="fields-aracDurumu"
                value="yok"
              />
              Aracım yok, yardımın teslim edilmesi gerek.
            </label>
          </div>
        </div>
        <p className="aydinlatma">
          6698 sayılı KVKK kapsamında “Uygulamamıza depremzede ya da depremzede
          yakını olarak kaydolan kullanıcılardan ad, soyadı, iletişim bilgisi,
          log kaydı ve depremzedenin sisteme girilen ve kendileri tarafından
          alenileştirilmiş konum verilerini topluyoruz.” Veri işleme hukuki
          sebeplerimizi, amaçlarımızı görmek ve haklarınızı öğrenmek{" "}
          <a href="../legal/hukuki-kvkk.html">Aydınlatma Metnini</a>
          ziyaret etmek ister misiniz?
        </p>
        <div className="form-row">
          <label for="kvkk" className="checkbox">
            <input type="checkbox" id="kvkk" name="fields-kvkk" required="" />*
            Okudum ve aydınlandım
          </label>
        </div>
        <div>
          <button className="btn btn-success" type="submit">Gönder</button>
        </div>
      </form>
    </Layout>
  );
};

export default HelpFormPage;
