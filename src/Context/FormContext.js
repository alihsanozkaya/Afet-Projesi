import axios from "axios";
import { createContext, useEffect, useState , useReducer } from "react";


const initialState = { formCategories : [] ,success : false ,error : null }
export const getAllFormCategoryReducer = (
  state = initialState ,
  action
) => {
  switch (action.type) {
    case "GET_FORM_CATEGORIES_REQUEST":
      return { ...state, loading: true };

    case "GET_FORM_CATEGORIES_SUCCESS":
      return {
        ...state,
        loading: false,
        success: true,
        formCategories: action.payload,
      };

    case "GET_FORM_CATEGORIES_FAIL":
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export const FormContext = createContext();


export const FormContextProvider = ({ children }) => {


  const [state, dispatch] = useReducer(getAllFormCategoryReducer ,initialState)

  const fetchCategories = async () => {
    try {
      dispatch({
        type: "GET_FORM_CATEGORIES_REQUEST",
      });
  
      const { data } = await axios.get(
        `https://afetapi.onrender.com/api/formCategories`
      );
  
      dispatch({
        type: "GET_FORM_CATEGORIES_SUCCESS",
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: "GET_FORM_CATEGORIES_FAIL",
        error: error.response,
      });
    }
  }

  useEffect(() => {
    fetchCategories()
  }, [])

  return (
    <FormContext.Provider value={{state,dispatch,fetchCategories}}>
      {children}
    </FormContext.Provider>
  );
};
