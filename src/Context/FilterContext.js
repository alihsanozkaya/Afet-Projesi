import React, { createContext, useContext, useEffect, useState, useReducer } from "react";
import axios from "axios";

export const FilterContext = createContext();

export const useFilterContext = () => {
  return useContext(FilterContext);
};

const GET_ALL_AREA_INITIAL_STATE = {
  areas: [
    {
      _id: "",
      name: "",
      coordinates: null,
      required_products: [],
      required_people: [],
    },
  ],
};

export const getAllAreaReducer = (state = GET_ALL_AREA_INITIAL_STATE, action) => {
  switch (action.type) {
    case "GET_ALL_AREA_REQUEST":
      return { ...state, loading: true };

    case "GET_ALL_AREA_SUCCESS":
      return {
        ...state,
        loading: false,
        success: true,
        areas: action.payload,
      };

    case "GET_ALL_AREA_FAIL":
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export const FilterContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(getAllAreaReducer, GET_ALL_AREA_INITIAL_STATE);
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [priorityOrders, setPriorityOrders] = useState([]);
  const [selectedPeople, setSelectedPeople] = useState([]);

  const fetchAreasWithDispatch = async () => {
    try {
      dispatch({
        type: "GET_ALL_AREA_REQUEST",
      });

      const { data } = await axios.get(
        `https://afetapi.onrender.com/api/filter-areas?filters=${selectedProducts}&priorityOrders=${priorityOrders}&people=${selectedPeople}`
      );

      dispatch({
        type: "GET_ALL_AREA_SUCCESS",
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: "GET_ALL_AREA_FAIL",
        payload: error.response,
      });
    }
  };

  useEffect(() => {
    fetchAreasWithDispatch();
  }, [selectedProducts, priorityOrders, selectedPeople]);

  return (
    <FilterContext.Provider
      value={{ state, dispatch, fetchAreasWithDispatch, selectedProducts, setSelectedProducts, priorityOrders, setPriorityOrders, selectedPeople, setSelectedPeople }}
    >
      {children}
    </FilterContext.Provider>
  );
};
