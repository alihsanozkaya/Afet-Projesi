import Layout from "../Components/Layout";
import React from "react";
import HelpFormPage from "./HelpFormPage";

const RequestForHelpPage = () => {
  return (
    <Layout>
      <div className="container d-flex flex-column ml-2" style={{backgroundColor: "#ddd", padding: "50px", borderRadius: "10px"}}>
        <section>
          <h1>Yardım Al</h1>
          <div className="buttons mt-5">
            <a
              type="button"
              href="/yardimistegiformu"
              className="btn btn-danger mr-3 my-1"
              title="Depremzede Bildirim Formu"
              onClick={<HelpFormPage/>}
            >
              <i class="fa-solid fa-handshake-angle fa-beat mr-3"></i>
              Ben / Tanıdığım Enkaz Altında
            </a>
            <a
              href="/yardimistegiformu"
              className="btn btn-info mr-3 my-1"
              title="Gıda İhtiyaç Formu"
              onClick={<HelpFormPage/>}
            >
              <i class="fa-sharp fa-solid fa-utensils fa-beat mr-3"></i>
              Gıdaya İhtiyacım Var
            </a>
            <a
              href="/yardimistegiformu"
              className="btn btn-warning mr-5 my-1"
              title="Isınma İhtiyaç Formu"
              onClick={<HelpFormPage/>}
            >
              <i class="fa-solid fa-fire fa-beat mr-2" style={{color: "red"}}></i>
              Isınmaya İhtiyacım Var
            </a>
          </div>
        </section>
      </div>
    </Layout>
  );
};
export default RequestForHelpPage;
