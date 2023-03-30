import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

export const FilterContext = createContext();

export const useFilterContext = () => {
  return useContext(FilterContext);
};

export const FilterContextProvider = ({ children }) => {
  const [checkedValues, setCheckedValues] = useState([]);
  const [areas, setAreas] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleCheckboxChange = (value) => {
    if (checkedValues.includes(value)) {
      setCheckedValues(checkedValues.filter((v) => v !== value));
    } else {
      setCheckedValues([...checkedValues, value]);
    }
  };

  useEffect(() => {
    async function fetchData() {
      await axios
        .get(
          checkedValues !== []
            ? `https://afetapi.onrender.com/api/get-filter-areas?priorityOrders=${checkedValues}`
            : `https://afetapi.onrender.com/api/get-filter-areas?priorityOrders=`
        )
        .then((res) => {
          setLoading(false);
          setAreas(res.data);
        })
        .catch((error) => {
          console.log(error);
          setLoading(false);
        });
    }
    fetchData();
  }, [checkedValues]);
  if (loading) {
    return console.log("Veriler yükleniyor...");
  }

  return (
    <FilterContext.Provider
      value={{ checkedValues, handleCheckboxChange, areas }}
    >
      {children}
    </FilterContext.Provider>
  );
};
