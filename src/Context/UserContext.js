import axios from 'axios';
import React, { createContext, useState } from 'react';

export const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [veri, setVeri] = useState({
    email: "",
    password: "",
  });
  const [success, setSuccess] = useState(false);

  const register = async () => {
    try {
      await axios.post("https://afetapi.onrender.com/api/register", {
        name: data.name,
        email: data.email,
        password: data.password,
      });
      console.log("Başarıyla yüklendi", data);
      setSuccess(true);
      setIsAuthenticated(true);
    } catch (error) {
      console.log(error);
    }
  };

  const login = async () => {
    try {
      const res = await axios.post("https://afetapi.onrender.com/api/login", {
        email: veri.email,
        password: veri.password,
      });
      setSuccess(true);
      localStorage.setItem("user", JSON.stringify(res.data.user));
      setIsAuthenticated(true);
    } catch (error) {
      console.log(error);
      setSuccess(false); // Hata durumunda success'i false olarak ayarlayın
    }
  };

  const logout = () => {
    localStorage.removeItem("user");
    setIsAuthenticated(false);
    setSuccess(false); // Çıkış işlemi gerçekleştiğinde success durumunu sıfırlayın
  };

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
    logout, // UserContext'e logout fonksiyonunu ekleyin
  };

  return (
    <UserContext.Provider value={postUserContext}>
      {children}
    </UserContext.Provider>
  );
};
