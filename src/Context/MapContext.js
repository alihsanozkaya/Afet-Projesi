import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const MapContext = createContext();

export const MapContextProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [markers, setMarkers] = useState([]);
  useEffect(() => {
    async function fetchData(){
      await axios
      .get("https://afetapi.onrender.com/api/areas")
      .then((res) => {
        setLoading(false);
        setMarkers(res.data);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });}
      fetchData();
  }, [markers]);
  if (loading) {
    return console.log("Veriler yükleniyor...");
  }
  return <MapContext.Provider value={markers}>{children}</MapContext.Provider>;
};
