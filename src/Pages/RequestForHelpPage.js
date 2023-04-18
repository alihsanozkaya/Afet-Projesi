import Layout from "../Components/Layout";
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { FormContext, FormContextProvider } from "../Context/FormContext";

const RequestForHelpPage = () => {
  const formCategories = useContext(FormContext);
  const navigate = useNavigate();
  return (
  
    <Layout>
      {formCategories.map((category, i) =>
        category.parent === null ? (
          <h5 key={i} className="my-4">
            {category.name}
          </h5>
        ) : (
          <button
            onClick={() => {
              navigate(category._id);
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
