import {createContext, useContext, useEffect, useState} from 'react'
import { useParams } from "react-router-dom";
import axios from "axios";
import { PostFormContext } from './PostFormContext';


export const CategoryIDContext = createContext()

export const CategoryIDContextProvider = ({children}) =>{
    const { categoryID } = useParams();
    const [loading, setLoading] = useState(true);
    const [formCategory, setFormCategory] = useState({});
    const { data, setData, createForm } = useContext(PostFormContext);

    useEffect(() => {
        axios
          .get(`https://afetapi.onrender.com/api/formCategories/${categoryID}`)
          .then((res) => {
            setLoading(false);
            setFormCategory(res.data);
            setData({ category: categoryID });
          })
          .catch((error) => {
            console.log(error);
            setLoading(false);
          });
      }, []);
      if (loading) {
        return console.log("Veriler yükleniyor... CategoryId Context");
      }
    return(
        <CategoryIDContext.Provider value={{formCategory, data, setData, createForm}}>
            {children}
            {console.log(categoryID)}
        </CategoryIDContext.Provider>
    )
}