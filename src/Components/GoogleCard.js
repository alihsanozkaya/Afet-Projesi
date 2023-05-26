import React, { useContext, useState, useRef, useEffect } from "react";
import GoogleMapReact from "google-map-react";
import { Button, Popover } from "antd";
import { geocodeByAddress, getLatLng } from "react-places-autocomplete";
import { FilterContext } from "../Context/FilterContext";
import FiltersButton from "./FiltersButton";
import SearchInput from "./SearchInput";
import RequiredItems from "./RequiredItems";
import { LiveLocationShowPersonContext } from "../Context/LiveLocationShowPersonContext";
import { FilterLiveLocationContext } from "../Context/FilterLiveLocationContext";
import LoadingSpinner from './LoadingSpinner'
import UserMarker from './Markers/UserMarker'
const AnyReactComponent = ({ area, lat, lng, name }) => {
  if (!area) {
    // Render a marker for live location
    return (
      <Popover content={<div>
        <h5>Canlı Konum</h5>
        <p>Enlem: {lat}</p>
        <p>Boylam: {lng}</p>
        </div>}>
        <Button
          type="default"
          style={{color: "black"}}
          icon={<i className="fa-solid fa-user fa-beat-fade"></i>}
        ></Button>
      </Popover>
    );
  }

  return (
    <Popover
      content={
        <div
          className="container"
          style={{ borderRadius: "10px", maxWidth: "300px" }}
        >
          <h5>{name}</h5>
          <p>Enlem: {lat}</p>
          <p>Boylam: {lng}</p>
          <p>
            Gerekli ürünler:{" "}
            {area?.requrired_products && area?.requrired_products.length === 0 ? (
              "İhtiyaç yok"
            ) : (
              <div className="d-flex flex-wrap justify-content-start">
                {area.requrired_products &&
                  area.requrired_products.map((product, i) => (
                    <RequiredItems product={product} isPerson={false} key={i} />
                  ))}
              </div>
            )}
          </p>
          <p>
            Gerekli Personel:{" "}
            {area?.requrired_people && area?.requrired_people.length === 0 ? (
              "İhtiyaç yok"
            ) : (
              <div className="d-flex flex-wrap justify-content-start">
                {area?.requrired_people &&
                  area?.requrired_people.map((person, i) => (
                    <RequiredItems person={person} isPerson={true} key={`person-${i}`} />
                  ))}
              </div>
            )}
          </p>
        </div>
      }
    >
      <Button
        type="default"
        style={{ backgroundColor: "red" }}
        icon={<i className="fa-solid fa-triangle-exclamation fa-beat"></i>}
      ></Button>
    </Popover>
  );
};

export default function SimpleMap() {
  const defaultProps = {
    center: {
      lat: 39,
      lng: 35.5,
    },
    zoom: 6.37,
  };
  // search and focus
  const [address, setAddress] = useState("");
  const [center, setCenter] = useState(defaultProps.center);
  const [zoom, setZoom] = useState(defaultProps.zoom);
  const mapRef = useRef();

  const handleSelect = async (value) => {
    const results = await geocodeByAddress(value);
    const latLng = await getLatLng(results[0]);
    setAddress(value);
    setCenter(latLng);

    if (address.length > 20) {
      setZoom(13);
    } else {
      setZoom(10);
    }

    mapRef.current.panTo(latLng);
  };

  useEffect(() => {
    if (address === "") {
      setCenter(defaultProps.center);
      setZoom(defaultProps.zoom);
    }
  }, [address]);

  const handleMapChange = ({ center }) => {
    setCenter(center);

    if (address && address.length < 20) {
      setZoom(13);
    }
    if (address.length > 20) {
      setZoom(15);
    }
  };

  const { state, dispatch, fetchAreasWithDispatch } = useContext(FilterContext);

  const {stateLocationUsers,fetchLiveLocationWithDispatch} = useContext(LiveLocationShowPersonContext)
  const {filterLocations,selectedRoles, setSelectedRoles , fetchFilterLiveLocationWithDispatch} = useContext(FilterLiveLocationContext)

  const fetchAreas = () => {
    fetchAreasWithDispatch();
  };
  const fetchLocationUsers = () => {
    fetchLiveLocationWithDispatch()
  }

  const [showLiveLocation, setShowLiveLocation] = useState(false);
  
  const handleToogleLiveLocation = () => {
    setShowLiveLocation((prev) => !prev);
  }
  const handleAddUserRole = (value) => {
    setSelectedRoles(value)
}
  useEffect(() => {
    if(selectedRoles.length > 0)
    fetchFilterLiveLocationWithDispatch()
  },[selectedRoles.length])
  return (
    <>
      <div className="container d-flex flex-row justify-content-end">
        <div>
          <SearchInput
            address={address}
            setAddress={setAddress}
            handleSelect={handleSelect}
          />
        </div>
 
        <button style={{marginLeft: "7px"}}
        className="btn  btn-outline-primary rounded-pill me-2"
        onClick={handleToogleLiveLocation}
      >
       {showLiveLocation ? " Alanları Göster" : "Canlı Konum Göster"}
      </button>
        <div style={{ maxHeight: "38px" }}>
          <FiltersButton handleAddUserRole={handleAddUserRole} showLiveLocation={showLiveLocation }/>
        </div>
      </div>
      <div className="container" style={{ marginTop: "30px", marginBottom: "30px" }}>
        <div style={{ height: "500px", width: "auto" }}>
          <GoogleMapReact
            defaultCenter={defaultProps.center}
            defaultZoom={defaultProps.zoom}
            center={center}
            zoom={zoom}
            onChange={handleMapChange}
          >
          {showLiveLocation ? (
            stateLocationUsers.loading ? (
              <LoadingSpinner />
            )  : selectedRoles.length > 0 ? filterLocations.userLocations && filterLocations.userLocations.map((userLocation) => (
              
                <UserMarker 
                userLocation={userLocation}
                key={userLocation._id}
                lat={userLocation.location.lat}
                lng={userLocation.location.lng}
                />
              
            )) : 
            
            stateLocationUsers.userLocations && stateLocationUsers.userLocations.map((userLocation) => (
              <UserMarker 
              userLocation={userLocation}
              key={userLocation._id}
              lat={userLocation.location.lat}
              lng={userLocation.location.lng}
              />
            ))
          ) : state.areas.map((marker, i) => (
            <AnyReactComponent
              key={i}
              area={marker}
              name={marker?.name}
              lat={marker?.coordinates?.latitude}
              lng={marker?.coordinates?.longitude}
            />
          ))}
          </GoogleMapReact>
        </div>
      </div>
    </>
  );
}
