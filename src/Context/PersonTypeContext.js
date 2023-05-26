import React, { createContext, useEffect, useReducer } from "react";
import axios from "axios";

export const PersonItemContext = createContext();
const initialState = {
    personTypes: [],
  success: false,
  error: null,
};

export const PersonItemReducer = (state = initialState, action) => {
    switch (action.type) {
        case "PERSON_ITEM_REQUEST":
          return { ...state, loading: true };
      
        case "PERSON_ITEM_SUCCESS":
          return {
            ...state,
            loading: false,
            success: true,
            personTypes: action.payload,
          };
      
        case "PERSON_ITEM_FAIL":
          return { ...state, loading: false, success: false, error: action.error };
      
        default:
          return state;
      }

};

export const PersonItemContextProvider = ({ children }) => {
  const [statePerson, dispatch] = useReducer(PersonItemReducer, initialState);

  const fetchPersonsWithDispatch = async () => {
    try {
      dispatch({ type: "PERSON_ITEM_REQUEST" });

      const { data } = await axios.get("https://afetapi.onrender.com/api/personTypes");

      dispatch({ type: "PERSON_ITEM_SUCCESS", payload: data });
    } catch (error) {
      dispatch({ type: "PERSON_ITEM_FAIL", error: error.response });
    }
  };

  useEffect(() => {
    fetchPersonsWithDispatch();
  }, []);

  return (
    <PersonItemContext.Provider value={{ statePerson, dispatch}}>
      {children}
    </PersonItemContext.Provider>
  );
};
