import React, { useContext, useEffect } from "react";
import { Popover , Space } from "antd";
import { useFilterContext } from "../Context/FilterContext";
import { ProductItemContext } from "../Context/ProductItemContext";
import { PersonItemContext } from "../Context/PersonItemContext";

import { Select } from "antd";
const {Option} = Select 
const FiltersButton = ({handleAddUserRole,showLiveLocation}) => {
  const { selectedProducts, setSelectedProducts, priorityOrders, setPriorityOrders, selectedPeople, setSelectedPeople } = useFilterContext();
  const { state, dispatch, fetchProductsWithDispatch } = useContext(ProductItemContext);
  const {statePerson,fetchPersonsWithDispatch} = useContext(PersonItemContext)

   const fetchProduct = () => {
    fetchProductsWithDispatch()
  }
  const fetchPeople = () => {
    fetchPersonsWithDispatch()
  }

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
    } else if (filterType === "person") {
      if (selectedPeople.includes(value)) {
        setSelectedPeople(selectedPeople.filter((people) => people !== value));
      } else {
        setSelectedPeople([...selectedPeople, value]);
      }
    }
  };

  const handleAddProduct = (value) => {
    setSelectedProducts(value);
  };
  const handleAddPerson = (value) => {
    setSelectedPeople(value);
  };



  return (
    <Popover
      placement="bottom"
      content={
        showLiveLocation ? (

          <Space
          style={{
            width: "300px",
          }}
          direction="vertical"
        >
          <Select
            mode="multiple"
            allowClear
            style={{
              width: "100%",
            }}
            placeholder="Please select"
            onChange={handleAddUserRole}
          >
            {statePerson.personTypes.map((personType) => (
              <Option value={personType.name} >{personType.name}</Option>
            ))}
          </Select>
          </Space>

        )  : 
        (
          <div className="d-flex flex-column">
          <div>
            <label className="col-form-label">Ürünler</label>
            <Select
              mode="multiple"
              allowClear
              style={{
                width: "100%",
              }}
              placeholder="Seçim yapınız"
              onChange={handleAddProduct}
            >
                {state.products.map((product) => (
                  <Option value={product.title} >{product.title}</Option>
                ))}
            
            </Select>
          </div>
          <div>
            <label className="col-form-label">Personel</label>
            <Select
              mode="multiple"
              allowClear
              style={{
                width: "100%",
              }}
              placeholder="Seçim yapınız"
              onChange={handleAddPerson}
            >
            
              {statePerson.personTypes.map((personType) => (
                <Option value={personType.name} >{personType.name}</Option>
              ))}
            </Select>
          </div>
        </div>
        )
       
      }
      title={<h5 style={{ fontWeight: "bold" }}>Filtrele</h5>}
      trigger="click"
    >
      <button className="btn text-white rounded-pill mx-2" style={{ backgroundColor: "#222" }}>
        Filtrele <i className="fa-solid fa-filter text-white"></i>
      </button>
    </Popover>
  );
};

export default FiltersButton;