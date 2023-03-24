import Layout from "../Components/Layout";
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import HelpFormPage from "./HelpFormPage";
import { FormContext } from "../Context/FormContext";

const RequestForHelpPage = () => {
  const formCategories = useContext(FormContext)
  const navigate = useNavigate();
  return (
    <Layout>          
      {/* <div
        className="container d-flex flex-column ml-2"
        style={{
          backgroundColor: "#ddd",
          padding: "50px",
          borderRadius: "10px",
        }}
      >
        <section>
          <h1>Yardım Al</h1>
          <div className="buttons mt-5">
            <a
              type="button"
              href="/yardimistegiformu"
              className="btn btn-danger mr-3 my-1"
              title="Depremzede Bildirim Formu"
              onClick={<HelpFormPage />}
            >
              <i className="fa-solid fa-handshake-angle fa-beat mr-3"></i>
              Ben / Tanıdığım Enkaz Altında
            </a>
            <a
              href="/yardimistegiformu"
              className="btn btn-info mr-3 my-1"
              title="Gıda İhtiyaç Formu"
              onClick={<HelpFormPage />}
            >
              <i className="fa-sharp fa-solid fa-utensils fa-beat mr-3"></i>
              Gıdaya İhtiyacım Var
            </a>
            <a
              href="/yardimistegiformu"
              className="btn btn-warning mr-5 my-1"
              title="Isınma İhtiyaç Formu"
              onClick={<HelpFormPage />}
            >
              <i
                className="fa-solid fa-fire fa-beat mr-3"
                style={{ color: "red" }}
              ></i>
              Isınmaya İhtiyacım Var
            </a>
          </div>
        </section>
        <section>
          <h1>Yardım Sağla</h1>
          <div className="buttons mt-5">
            <a
              href="/yardimistegiformu"
              className="btn btn-danger mr-3 my-1"
              title="Çadır Kurabilirim"
            >
              <i className="fa-solid fa-tent fa-beat mr-3"></i>
              Çadır Kurabilirim
            </a>
            <a
              href="/yardimistegiformu"
              className="btn btn-info mr-3 my-1"
              title="Konaklama Sağlayabilirim"
            >
              <i className="fa-solid fa-hotel fa-beat mr-3"></i>
              Konaklama Sağlayabilirim
            </a>
            <a
              href="/yardimistegiformu"
              className="btn btn-warning mr-3 my-1"
              title="İş Makinası Kullanabilirim"
            >
              İş Makinası Kullanabilirim
            </a>
            <a
              href="/yardimistegiformu"
              className="btn btn-dark mr-3 my-1"
              title="Yolcu Taşıyabilirim"
            >
              <i className="fa-sharp fa-solid fa-car-side fa-beat mr-3"></i>
              Yolcu Taşıyabilirim
            </a>
            <a
              href="/yardimistegiformu"
              className="btn btn-success mr-3 my-1"
              title="Kurumlara Bağış Yap"
            >
              <i className="fa-solid fa-money-bills fa-beat mr-3"></i>
              Kurumlara Bağış Yap
            </a>
            <a
              href="/yardimistegiformu"
              className="btn btn-primary mr-3 my-1"
              title="Gıda Yardımı Sağlayabilirim"
            >
              <i className="fa-sharp fa-solid fa-utensils fa-beat mr-3"></i>
              Gıda Yardımı Sağlayabilirim
            </a>
          </div>
        </section>
      </div> */}
      {formCategories.map((category, i) =>
          category.parent === null ? (
            <h5 key={i} className="my-4">{category.name}</h5>
          ) : (
            <button
              onClick={() =>  {
                navigate(category._id)
              }}
              className="btn btn-outline-primary mx-2 my-2"
              key={category._id}
            >
              {category.name}
            </button>
          )
        )}
    </Layout>
  );
};
export default RequestForHelpPage;
