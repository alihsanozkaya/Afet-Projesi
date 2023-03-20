import Layout from "../Components/Layout";
import React from "react";
import Kart from "../Components/Kart";
import ihtiyacListe from "../Constant/RequirementList";

const NeedPage = () => {
  return (
    <Layout>
      <div className="container">
        <div className="d-flex flex-wrap justify-content-between">
          {ihtiyacListe.map((ihtiyac) => (
            <Kart key={ihtiyac.id} ihtiyac={ihtiyac} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default NeedPage;
