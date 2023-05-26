import React, { createContext, useEffect, useReducer } from "react";
import axios from "axios";

export const ProductItemContext = createContext();
const initialState = {
  products: [],
  success: false,
  error: null,
};

export const ProductItemReducer = (state = initialState, action) => {
    switch (action.type) {
        case "PRODUCT_ITEM_REQUEST":
          return { ...state, loading: true };
      
        case "PRODUCT_ITEM_SUCCESS":
          return {
            ...state,
            loading: false,
            success: true,
            products: action.payload.products,
          };
      
        case "PRODUCT_ITEM_FAIL":
          return { ...state, loading: false, success: false, error: action.error };
      
        default:
          return state;
      }

};

export const ProductItemContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(ProductItemReducer, initialState);

  const fetchProductsWithDispatch = async () => {
    try {
      dispatch({ type: "PRODUCT_ITEM_REQUEST" });

      const { data } = await axios.get("https://afetapi.onrender.com/api/products");

      dispatch({ type: "PRODUCT_ITEM_SUCCESS", payload: data });
    } catch (error) {
      dispatch({ type: "PRODUCT_ITEM_FAIL", error: error.response });
    }
  };

  useEffect(() => {
    fetchProductsWithDispatch();
  }, []);

  return (
    <ProductItemContext.Provider value={{ state, dispatch}}>
      {children}
    </ProductItemContext.Provider>
  );
};
