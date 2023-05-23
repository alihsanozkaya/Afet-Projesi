import React, { useEffect, useState } from "react";
import { useLiveLocationContext } from "../Context/LiveLocationContext";

const LiveLocation = () => {
  const currentLocation = useLiveLocationContext();
  const [location, setLocation] = useState(null);

  useEffect(() => {
    // İlk render'da konumu güncelle
    updateLiveLocation();

    // Belirli bir süre aralığında konumu güncelle
    const interval = setInterval(() => {
      updateLiveLocation();
    }, 1000); // 10 saniye

    return () => clearInterval(interval);
  }, []);

  const updateLiveLocation = () => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setLocation({ latitude, longitude });
      },
      (error) => {
        console.error("Konum alınamadı:", error);
      }
    );
  };

  const handleRefresh = () => {
    updateLiveLocation();
  };

  if (!location) {
    return (
      <div>
        <p>Konum alınamadı.</p>
        <button onClick={handleRefresh}>Yeniden Dene</button>
      </div>
    );
  }

  const { latitude, longitude } = location;

  return (
    <div>
      <p>Latitude: {latitude}</p>
      <p>Longitude: {longitude}</p>
      <button onClick={handleRefresh}>Yenile</button>
    </div>
  );
};

export default LiveLocation;
