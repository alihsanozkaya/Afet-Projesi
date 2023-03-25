import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Layout from "../Components/Layout";
import axios from "axios";
import { PostFormContext } from "../Context/PostFormContext";

const HelpFormPage = () => {
  const { categoryID } = useParams();
  const [loading, setLoading] = useState(true);
  const [formCategory, setFormCategory] = useState({});
  const { data, setData, createForm } = useContext(PostFormContext);
  const urgencies = ["Kritik", "Orta", "Normal"];

  useEffect(() => {
    axios
      .get(`https://afetapi.onrender.com/api/formCategories/${categoryID}`)
      .then((res) => {
        setLoading(false);
        setFormCategory(res.data);
        setData({ category: categoryID });
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);
  if (loading) {
    return console.log("Veriler yükleniyor...");
  }
  return (
    <Layout>
      <div className="container">
        <h2 className="my-4" style={{color: "blue"}}>{formCategory.name}</h2>
        <form id="form" className="mt-2">
          <div className="form-row my-2">
            <div className="form-col mr-4">
              <label>* İsim &amp; Soyisim:</label>
              <input
                type="text"
                className="form-control required-field"
                id="adSoyad"
                name="adSoyad"
                value={data.name}
                onChange={(e) => setData({ ...data, name: e.target.value })}
                placeholder="* İsim &amp; Soyisim"
                required=""
              />
            </div>
            <div className="form-col mr-4">
              <label>Email:</label>
              <input
                type="email"
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                className="form-control"
                id="email"
                name="email"
                value={data.email}
                onChange={(e) => setData({ ...data, email: e.target.value })}
                placeholder="Email"
              />
            </div>
            <div className="form-col">
              <label>* Telefon (5XX XXX XX XX): </label>
              <input
                type="tel"
                maxLength="10"
                className="form-control"
                id="telefon"
                name="telefon"
                value={data.phoneNumber}
                onChange={(e) =>
                  setData({ ...data, phoneNumber: e.target.value })
                }
                placeholder="* Telefon"
                required=""
              />
            </div>
          </div>
          <div className="form-row my-2">
            <label>* Adres:</label>
            <input
              type="text"
              className="form-control required-field"
              id="adres"
              name="adres"
              value={data.address}
              onChange={(e) => setData({ ...data, address: e.target.value })}
              placeholder="* Adres"
              required=""
            />
          </div>
          <div className="form-row my-2">
            <div className="form-col mr-4">
              <label> Aciliyet: </label>
              <select
                id="inputState"
                className="form-control"
                defaultValue={data.urgency}
                onChange={(e) => setData({ ...data, urgency: e.target.value })}
                style={{ width: "120px" }}
              >
                <option defaultValue={""}>Aciliyet</option>
                {urgencies.map((urgency, i) => (
                  <option key={i} value={urgency}>
                    {urgency}
                  </option>
                ))}{" "}
                       
              </select>
            </div>
            <div className="form-col mr-4">
              <label>Kişi Sayısı:</label>
              <input
                type="number"
                min="1"
                max="1024"
                maxLength="5"
                className="form-control"
                id="kisiSayisi"
                name="kisiSayisi"
                value={data.numberOfPerson}
                onChange={(e) =>
                  setData({ ...data, numberOfPerson: e.target.value })
                }
                style={{ width: "120px" }}
                placeholder="Kişi Sayısı"
              />
            </div>
            <div className="form-col">
            <label className="form-row ">Konum Paylaşımı</label>
            <button
              type="button"
              className="btn btn-warning"
              style={{ borderRadius: "10px" }}
              onClick={(e) => {
                e.preventDefault();
              }}
            >
              Konum Paylaşımı
            </button>
          </div>
          </div>
          <div className="form-row my-2">
            <label style={{ width: "208px" }}>
              * Fiziki Durum Hakkında Bilgi:
            </label>
            <textarea
              className="form-control"
              name="fizikiDurum"
              id="fizikiDurum"
              cols="60"
              rows="4"
              placeholder="* Fiziki Durum Hakkında Bilgi"
            ></textarea>
          </div>
          

          <p className="aydinlatma my-2">
            6698 sayılı KVKK kapsamında “Uygulamamıza depremzede ya da
            depremzede yakını olarak kaydolan kullanıcılardan ad, soyadı,
            iletişim bilgisi, log kaydı ve depremzedenin sisteme girilen ve
            kendileri tarafından alenileştirilmiş konum verilerini topluyoruz.”
            Veri işleme hukuki sebeplerimizi, amaçlarımızı görmek ve haklarınızı
            öğrenmek <a href="../legal/hukuki-kvkk.html">Aydınlatma Metnini </a>
            ziyaret etmek ister misiniz?
          </p>
          <div className="form-row">
            <label className="checkbox mx-2">
              <input
                className="mx-2"
                type="checkbox"
                id="kvkk"
                name="fields-kvkk"
                required=""
              />
              * Okudum ve aydınlandım
            </label>
          </div>
          <div>
            <button
              className="btn btn-success my-3"
              type="submit"
              onClick={(e) => {
                e.preventDefault();
                createForm();
              }}
            >
              Gönder
            </button>
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default HelpFormPage;
