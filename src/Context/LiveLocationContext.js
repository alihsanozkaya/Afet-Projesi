import React, { createContext, useContext, useEffect, useState } from "react";

export const LiveLocationContext = createContext();

export const useLiveLocationContext = () => {
  return useContext(LiveLocationContext);
};

export const LiveLocationContextProvider = ({ children }) => {
  const [currentLocation, setCurrentLocation] = useState(null);

  // Canlı konum güncellemesi
  const updateLiveLocation = () => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setCurrentLocation({ latitude, longitude });
      },
      (error) => {
        console.error("Konum alınamadı:", error);
      }
    );
  };

  // İlk render'da konum güncellemesi
  useEffect(() => {
    updateLiveLocation();
  }, []);

  // Belirli bir süre aralığında konumu güncelleme
  useEffect(() => {
    const interval = setInterval(() => {
      updateLiveLocation();
    }, 10000); // 10 saniye

    return () => clearInterval(interval);
  }, []);

  return (
    <LiveLocationContext.Provider value={currentLocation}>
      {children}
    </LiveLocationContext.Provider>
  );
};
