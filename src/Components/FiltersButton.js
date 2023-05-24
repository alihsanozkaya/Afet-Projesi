import React from "react";
import { Popover } from "antd";
import { useFilterContext } from "../Context/FilterContext";

const FiltersButton = () => {
  const { selectedProducts, setSelectedProducts, priorityOrders, setPriorityOrders, selectedPeople, setSelectedPeople } = useFilterContext();

  const handleCheckboxChange = (filterType, value) => {
    if (filterType === "product") {
      if (selectedProducts.includes(value)) {
        setSelectedProducts(selectedProducts.filter((product) => product !== value));
      } else {
        setSelectedProducts([...selectedProducts, value]);
      }
    } else if (filterType === "priority") {
      if (priorityOrders.includes(value)) {
        setPriorityOrders(priorityOrders.filter((order) => order !== value));
      } else {
        setPriorityOrders([...priorityOrders, value]);
      }
    }
    else if (filterType === "person") {
      if (selectedPeople.includes(value)) {
        setSelectedPeople(selectedPeople.filter((people) => people !== value));
      } else {
        setSelectedPeople([...selectedPeople, value]);
      }
    }
  };

  return (
    <Popover
      placement="bottom"
      content={
        <div className="d-flex flex-column ml-2">
          <h6>Aciliyet</h6>
          <div className="px-2 mb-2 border-bottom">
            <input
              className="form-check-input me-2"
              type="checkbox"
              value="Acil"
              id="priorityEmergency"
              checked={priorityOrders.includes("Acil")}
              onChange={() => handleCheckboxChange("priority", "Acil")}
            />
            <a style={{ fontSize: "15px" }}>Acil</a>
          </div>
          <div className="px-2 mb-2 border-bottom">
            <input
              className="form-check-input me-2"
              type="checkbox"
              value="Cok Acil"
              id="priorityUrgent"
              checked={priorityOrders.includes("Cok Acil")}
              onChange={() => handleCheckboxChange("priority", "Cok Acil")}
            />
            <a style={{ fontSize: "15px" }}>Çok Acil</a>
          </div>
          <div className="px-2 mb-2 border-bottom">
            <input
              className="form-check-input me-2"
              type="checkbox"
              value="Normal"
              id="flexCheckDefault"
              checked={priorityOrders.includes("Normal")}
              onChange={() => handleCheckboxChange("priority","Normal")}
            />
            <a style={{ fontSize: "15px" }}>Normal</a>
          </div>
          <h6>Personel</h6>
          <div className="px-2 mb-2 border-bottom">
            <input
              className="form-check-input me-2"
              type="checkbox"
              value="Doktor"
              id="doctor"
              checked={selectedPeople.includes("Doktor")}
              onChange={() => handleCheckboxChange("person", "Doktor")}
            />
            <a style={{ fontSize: "15px" }}>Doktor</a>
          </div>
          <div className="px-2 mb-2 border-bottom">
            <input
              className="form-check-input me-2"
              type="checkbox"
              value="Hemşire"
              id="nurse"
              checked={selectedPeople.includes("Hemşire")}
              onChange={() => handleCheckboxChange("person", "Hemşire")}
            />
            <a style={{ fontSize: "15px" }}>Hemşire</a>
          </div>
          <h6>Ürünler</h6>
          <div className="px-2 mb-2 border-bottom">
            <input
              className="form-check-input me-2"
              type="checkbox"
              value="Çadır"
              id="tent"
              checked={selectedProducts.includes("Çadır")}
              onChange={() => handleCheckboxChange("product", "Çadır")}
            />
            <a style={{ fontSize: "15px" }}>Çadır</a>
          </div>
          <div className="px-2 mb-2 border-bottom">
            <input
              className="form-check-input me-2"
              type="checkbox"
              value="Su"
              id="waterFilter"
              checked={selectedProducts.includes("Su")}
              onChange={() => handleCheckboxChange("product", "Su")}
            />
            <a style={{ fontSize: "15px" }}>Su</a>
          </div>          
        </div>
      }
      title={<h5 style={{fontWeight:"bold"}}>Filtrele</h5>}
      trigger="click"
    >
      <button className="btn text-white rounded-pill mx-2" style={{ backgroundColor: "#222" }}>
        Filtrele <i className="fa-solid fa-filter text-white"></i>
      </button>
    </Popover>
  );
};

export default FiltersButton;
