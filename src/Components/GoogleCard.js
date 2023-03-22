import React, { useContext } from "react";
import GoogleMapReact from "google-map-react";
import { Badge, Button, Popover, Tag } from "antd";
import { MapContext } from "../Context/MapContext";

const AnyReactComponent = ({ area, lat, lng, name }) => (
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
          {area.requrired_products.length === 0 ? (
            "İhtiyaç yok"
          ) : (
            <div className="d-flex flex-wrap justify-content-start">
              {area.requrired_products.map((product, i) => (
                <div
                  key={i}
                  className="d-flex justify-content Center flex-wrap"
                >
                  <Badge
                    color="green"
                    count={product.quantity}
                    className="ml-2 my-0 p-0"
                  ></Badge>
                  <Tag color="blue" className="mx-0 my-2 p-1">
                    {product.Product.title}
                  </Tag>
                </div>
              ))}
            </div>
          )}
        </p>
        <p>
          Gerekli Personel:{" "}
          {area.requrired_people.length === 0 ? (
            "İhtiyaç yok"
          ) : (
            <div className="d-flex flex-wrap justify-content-start">
              {area.requrired_people.map((person, i) => (
                <div
                  key={i}
                  className="d-flex justify-content Center flex-wrap"
                >
                  <Badge
                    color="green"
                    count={person.quantity}
                    className="ml-2 my-0 p-0"
                  ></Badge>
                  <Tag color="blue" className="mx-0 my-2 p-1">
                    {person.Person.name}
                  </Tag>
                </div>
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
      icon={<i className="fa fa-warning"></i>}
    ></Button>
  </Popover>
);
export default function SimpleMap() {
  const defaultProps = {
    center: {
      lat: 39,
      lng: 35.5,
    },
    zoom: 6.37,
  };
  const markers = useContext(MapContext);
  return (
    <>
    <div className="container">
      <form>
        <button type="button" className="btn ml-1 text-white" style={{backgroundColor: "#222", height: "38px",borderRadius: "10px", display: "flex", justifyContent: "end", alignItems: "end", float: "right"}}>Filtrele<i className="fa-solid fa-filter text-white"></i></button>
        <button type="button" className="btn btn-danger mx-1" style={{height: "38px",borderRadius: "10px", display: "flex", justifyContent: "end", alignItems: "end", float: "right"}}><i class="fa fa-search"></i></button>
        <input className="form-control mr-1" style={{maxWidth: "300px",width: "41%", display: "flex", float: "right"}} placeholder="Adres giriniz"/>
    </form>
    </div>
    <div className="container" style={{marginTop: "100px"}}>
      <div style={{ height: "500px", width: "auto" }}>
        <GoogleMapReact
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
        >
          {markers.map((marker) => (
            <AnyReactComponent
              area={marker}
              name={marker.name}
              lat={marker.coordinates.latitude}
              lng={marker.coordinates.longitude}
            />
          ))}
        </GoogleMapReact>
      </div>
    </div>
    </>    
  );
}
