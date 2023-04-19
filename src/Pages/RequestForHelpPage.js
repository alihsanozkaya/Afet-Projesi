import Layout from "../Components/Layout";
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { FormContext, FormContextProvider } from "../Context/FormContext";
import LoadingSpinner from "../Components/LoadingSpinner";

const RequestForHelpPage = () => {
  
    const navigate = useNavigate()
  const {state,dispatch,fetchCategories} = useContext(FormContext)

  const fetchCategoriesFunction = () => {
    fetchCategories();

  };
console.log(state.formCategories)
  return (

    <Layout>
    {state.loading ? (
      <LoadingSpinner />
    ) : state.formCategories.map((category, i) =>
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
  ) }
    
    </Layout>

  );
};
export default RequestForHelpPage;
