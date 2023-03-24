import { Popover } from "antd";
import React, { Fragment } from "react";

const FiltersButton = ({ handleCheckboxChange }) => {
  return (
    <>
      <Popover
        placement="bottom"
        content={
          <div className="d-flex flex-column ml-2">
            <div className="px-2 mb-2 border-bottom">
              {" "}
              <input
                className="form-check-input me-2"
                type="checkbox"
                value="Cok Acil"
                id="flexCheckDefault"
                onClick={(e) => handleCheckboxChange(e.target.value)}
              />{" "}
              <a
                style={{
                  fontSize: "15px",
                }}
              >
                Çok Acil
              </a>
            </div>
            <div className="px-2  mb-2 border-bottom">
              {" "}
              <input
                className="form-check-input me-2"
                type="checkbox"
                value="Acil"
                id="flexCheckDefault"
                onClick={(e) => handleCheckboxChange(e.target.value)}
              />{" "}
              <a
                style={{
                  fontSize: "15px",
                }}
              >
                {" "}
                Acil
              </a>
            </div>
            <div className="px-2 mb-2 border-bottom">
              {" "}
              <input
                className="form-check-input me-2"
                type="checkbox"
                value="Normal"
                id="flexCheckDefault"
                onClick={(e) => handleCheckboxChange(e.target.value)}
              />{" "}
              <a
                style={{
                  fontSize: "15px",
                }}
              >
                Normal
              </a>
            </div>
            <div className="px-2 mb-2 border-bottom">
              {" "}
              <input
                className="form-check-input me-2"
                type="checkbox"
                value="Acil Degil"
                id="flexCheckDefault"
                onClick={(e) => handleCheckboxChange(e.target.value)}
              />
              {""}
              <a
                style={{
                  fontSize: "15px",
                }}
              >
                Şuan Gerekli Değil
              </a>
            </div>
          </div>
        }
        title="Filtrele"
        trigger="click"
      >
        <button
          className="btn text-white rounded-pill mx-2"
          style={{ backgroundColor: "#222" }}
          onClick={(e) => e.preventDefault()}
        >
          Filtrele <i className="fa-solid fa-filter text-white"></i>
        </button>
      </Popover>
    </>
  );
};
export default FiltersButton;
