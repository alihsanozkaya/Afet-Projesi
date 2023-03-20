import React, { useContext } from "react";
import GoogleMapReact from "google-map-react";
import { Badge, Button, Popover, Tag } from "antd";
import { MapContext } from "../Context/MapContext";

const AnyReactComponent = ({ area, text }) => (
  <Popover
    content={
      <div style={{ borderRadius: "10px" }}>
        <p>Enlem: {area.coordinates.latitude}</p>
        <p>Boylam: {area.coordinates.longitude}</p>
        <p>
          Gerekli ürünler:{" "}
          {area.requrired_products.length === 0 ? (
            "İhtiyaç yok"
          ) : (
            <div style={{flexDirection: "column"}}>
              {area.requrired_products.map((product) => (
                <div className="d-flex justify- content Center flex-wrap">
                  <Badge 
                    placement="start" 
                    color="green"
                    count={product.quantity}
                    className="ms-2"
                  >
                    <Tag color="blue" className="mx-3 my-1">
                      {product.Product.title}
                    </Tag>
                  </Badge>
                </div>
              ))}
            </div>
          )}
          {" \n"}
        </p>
        <p>Gerekli görevliler:</p>
      </div>
    }
    title={text}
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
    <div className="container">
      <div style={{ height: "500px", width: "auto" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "" }}
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
        >
          {markers.map((marker) => (
            <AnyReactComponent
              area={marker}
              key={marker._id}
              lat={marker.coordinates.latitude}
              lng={marker.coordinates.longitude}
              text={
                <>
                  <h5>{marker.name}</h5>
                </>
              }
            />
          ))}
        </GoogleMapReact>
      </div>
    </div>
  );
}
