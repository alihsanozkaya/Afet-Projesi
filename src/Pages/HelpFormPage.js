import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Layout from "../Components/Layout";
import { FormIDContext } from "../Context/FormIDContext";
import axios from 'axios'
import { PostFormContext } from "../Context/PostFormContext";

const HelpFormPage = () => {
  const {categoryID} = useParams()
  const [loading, setLoading] = useState(true);
  const [formCategory, setFormCategory] = useState({});
  const {data, setData, createForm} = useContext(PostFormContext);
  const [urgencies, setUrgencies] = useState(['Kritik','Orta','Normal'])
  const [urgency, setUrgency] = useState("")
  // const handleSelect  = (e) => {
  //   setUrgency({...data, urgency: e.target.value})
  //   console.log(urgency)
  // }
  console.log(formCategory)
  useEffect(() => {
    axios.get(`https://afetapi.onrender.com/api/formCategories/${categoryID}`)
    .then(res => {
      setLoading(false)
      setFormCategory(res.data)
      setData({category: categoryID})
    })
    .catch((error) => {
      console.log(error)
      setLoading(false)
    })
  }, [])
  if(loading){
      return console.log("Veriler yükleniyor...")
  }
  return (
    <Layout>
      <h2>{formCategory.name}</h2>
      <form id="form" className="mt-2">
        <div className="form-row form-col-3 my-1">
          <div className="form-col">
            <label for="adSoyad">* İsim &amp; Soyisim:</label>
            <input
              type="text"
              className="form-control required-field"
              id="adSoyad"
              name="adSoyad"
              value={data.name}
              onChange={(e) => setData({...data,name: e.target.value})}
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
              value={data.email}
              onChange={(e) => setData({...data, email: e.target.value})}
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
              value={data.phoneNumber}
              onChange={(e) => setData({...data, phoneNumber: e.target.value})}
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
          <label>Kişi Sayısı:</label>
          <input
            type="number"
            min="1"
            max="1024"
            maxLength="4"
            className="form-control"
            id="kisiSayisi"
            name="kisiSayisi"
            value={data.numberOfPerson}
            onChange={(e) => setData({...data, numberOfPerson: e.target.value})}
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
            value={data.address}
            onChange={(e) => setData({...data, address: e.target.value})}
            placeholder="* Adres"
            required=""
          />
        </div>
        <div className="form-row form-col-auto my-1">
          <div className="form-col" style={{ width: "100px" }}>
            <div className="form-row">
              <label> Aciliyet: </label>
            </div>
            <div className="form-row">
            <select id="inputState" className="form-control" value={data.urgency} onChange={(e) => setData({...data, urgency: e.target.value})} >
              <option selected value={""}>Aciliyet</option>
            {urgencies.map((urgency,i) => (
              <option key={i} value={urgency} >{urgency}</option>
            ))}
            </select>
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
          <button className="btn btn-success" type="submit" onClick={(e) => {e.preventDefault(); createForm()}}>Gönder</button>
        </div>
      </form>
    </Layout>
  );
};

export default HelpFormPage;
