import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react'

export const UserTaskContext = createContext();

export const UserTaskContextProvider = ({children}) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")) || {});

    useEffect(() => {
        if(user !== {})
        {
            async function fetchData(){
                await axios
                    .get(`https://afetapi.onrender.com/api/users/${user._id}/tasks`)
                    .then((res) => {
                        setData(res.data)
                        setLoading(false)
                    })
                    .catch((error) => {
                        console.log(error)
                        setLoading(false)
                    })
              }
              fetchData()
        }
    }, [user,data])
    if(loading){
        return console.log("Veriler yükleniyor UserTask Context")
    }

    return(
        <UserTaskContext.Provider value={{data}}>
            {children}
        </UserTaskContext.Provider>
    )
}


