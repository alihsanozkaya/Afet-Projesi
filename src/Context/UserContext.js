import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react'

export const UserContext = createContext();

export const UserContextProvider = ({children}) =>{
    const [data, setData] = useState({
        name: "",
        email: "",
        password: ""
    })
    const [isAuthenticated,setIsAuthenticated] = useState(false)
    const [veri, setVeri] = useState({
        email: "",
        password: "",
    })
    const [auth, setAuth] = useState({})
    const [success, setSuccess] = useState(false)
    const register = async () => {
        try {
            await axios.post("https://afetapi.onrender.com/api/register", {
                name: data.name,
                email: data.email,
                password: data.password
            })
            console.log("Başarıyla yüklendi", data)
            setSuccess(true)
            setIsAuthenticated(true)
        } catch (error) {
            console.log(error);
        }
    }
    const login = async () =>{
        try {
            const res = await axios.post("https://afetapi.onrender.com/api/login", {
                email: veri.email,
                password: veri.password
            })
            setSuccess(true)
            localStorage.setItem("token", res.data.token)
            localStorage.setItem("user", JSON.stringify(res.data.user))
            setIsAuthenticated(true)
            console.log(res.data)
        } catch (error) {
            console.log(error)
        }
    }

    const isUserLoggedIn = async () => {
        const token = localStorage.getItem("token");
        if (token) {
          const user = JSON.parse(localStorage.getItem("user"));
          setAuth({ token, user });
        } else {
          setAuth({});
        }
      }
    
      useEffect(() => {
        isUserLoggedIn();
      }, [isUserLoggedIn]);

    const postUserContext = {
        data,
        setData,
        register,
        success,
        login,
        veri,
        setVeri,
        isAuthenticated,
        setIsAuthenticated,
        isUserLoggedIn,
        auth
    }
    
    return(
        <UserContext.Provider value={postUserContext}>
            {children}
        </UserContext.Provider>
    )
}