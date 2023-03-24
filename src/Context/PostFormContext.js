import { createContext, useState } from "react";
import axios from "axios";

export const PostFormContext = createContext();

export const PostFormContextProvider = ({ children }) => {
  const [data, setData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    numberOfPerson: 0,
    address: "",
    urgency: "",
    infoAboutPhysical: "",
    category: "",
  });

  const createForm = async () => {
    try {
      await axios.post("https://afetapi.onrender.com/api/getHelpForm/create", {
        name: data.name,
        email: data.email,
        phoneNumber: data.phoneNumber,
        numberOfPerson: data.numberOfPerson,
        address: data.address,
        urgency: data.urgency,
        infoAboutPhysical: data.infoAboutPhysical,
        category: data.category,
      });
    } catch (error) {
      console.error(error);
    }
  };

  const postFormContextValue = {
    data,
    createForm,
    setData
  };

  return (
    <PostFormContext.Provider value={postFormContextValue}>
      {console.log(data)}
      {children}
    </PostFormContext.Provider>
  );
};
