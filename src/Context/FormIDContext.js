import {createContext, useEffect, useState} from 'react'
import axios from 'axios'

export const FormIDContext = createContext()

export const FormIDContextProvider = ({children}) =>{
    const [formCategory, setFormCategory] = useState({_id: "", name: ""});
    const [loading, setLoading] = useState(true);
    
    return(
        <FormIDContext.Provider value={{formCategory, setFormCategory}}>
            {children}
        </FormIDContext.Provider>
    )
}