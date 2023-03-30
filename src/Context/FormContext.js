import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const FormContext = createContext();

export const FormContextProvider = ({ children }) => {
  const [formCategories, setformCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function fetchData(){
     await axios
      .get("https://afetapi.onrender.com/api/formCategories")
      .then((res) => {
        setLoading(false);
        setformCategories(res.data);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });}
      fetchData();
  }, []);
  if (loading) {
    return console.log("Veriler yükleniyor...");
  }

  return (
    <FormContext.Provider value={formCategories}>
      {children}
    </FormContext.Provider>
  );
};
