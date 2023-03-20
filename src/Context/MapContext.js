import {createContext, useEffect, useState} from 'react'
import axios from 'axios'

export const MapContext = createContext();

export const MapContextProvider = ({children}) =>{
    const [loading, setLoading] = useState(true)
    const [markers, setMarkers] = useState([])
    useEffect(() =>{
        axios.get("https://afetapi.onrender.com/api/areas")
        .then(res => {
            setLoading(false)
            setMarkers(res.data)
        })
        .catch((error) => {
            console.log(error)
            setLoading(false)
        });
    }, []);
    if(loading) {
        return console.log("Veriler yükleniyor...")
    }
        // const markers = [
            
            
        //     // {id: 1, lat: data[0].coordinates.latitude, lng: data[0].coordinates.longitude, title: 'Gaziantep' },
        //     // {id: 2, lat: data[1].coordinates.latitude, lng: data[1].coordinates.longitude, title: 'Istanbul' },
        //     // {id: 3, lat: data[2].coordinates.latitude, lng: data[2].coordinates.longitude, title: 'Ankara' }
        // ];

    return(
        <MapContext.Provider value={markers}>
            {children}
        </MapContext.Provider>
    )
}