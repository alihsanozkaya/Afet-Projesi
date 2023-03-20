import React, { useEffect, useRef, useContext } from "react";
import { MapContext } from "../Context/MapContext";

const GoogleMap = () => {
  const mapRef = useRef(null);
  const markers = useContext(MapContext);

  useEffect(() => {
    // Google Maps API's scripti yükle
    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyDW51U8Lz8O7ap8xyRI6PWOvI2eLsJRs4M`;
    script.async = true;
    document.body.appendChild(script);

    // Harita nesnesini başlat
    script.onload = () => {
      const map = new window.google.maps.Map(mapRef.current, {
        center: { lat: 39, lng: 35.5 },
        zoom: 6.37,
      });

      // Tüm marker'ları haritaya ekle
      markers.map((marker) => {
        const newMarker = new window.google.maps.Marker({
          position: { lat: marker.coordinates.latitude, lng: marker.coordinates.longitude},
          map: map,
          title: marker.name,
        });
        return newMarker;
      });
    };

    return () => {
      // Bileşen kaldırıldığında harita nesnesini temizle
      if (window.google && window.google.maps) {
        window.google.maps.event.clearInstanceListeners(mapRef.current);
      }
    };
  }, []);

  return (
    <div className="container">
      <div
        className="map"
        ref={mapRef}
        style={{
          height: "500px",
          width: "auto",
          border: "1px solid black",
          borderRadius: "10px",
        }}
      />
    </div>
  );
};

export default GoogleMap;
