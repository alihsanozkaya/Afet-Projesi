import { Popover } from 'antd'
import React, { Fragment } from 'react'

const FiltersButton = ({handleCheckboxChange}) => {
  return (
   <Fragment>
      <Popover
            placement="bottom"
            content={
              <div className="d-flex flex-column ml-2">
                <div className="px-2 mb-2 border-bottom">
                  {" "}
                  <input
                    class="form-check-input me-2"
                    type="checkbox"
                    value="cok-acil"
                    id="flexCheckDefault"
                    onClick={(e)  => handleCheckboxChange(e.target.value) }
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
                    class="form-check-input me-2"
                    type="checkbox"
                    value="acil"
                    id="flexCheckDefault"
                    onClick={(e)  => handleCheckboxChange(e.target.value) }
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
                    class="form-check-input me-2"
                    type="checkbox"
                    value="normal"
                    id="flexCheckDefault"
                    onClick={(e)  => handleCheckboxChange(e.target.value) }
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
                    class="form-check-input me-2"
                    type="checkbox"
                    value="acil-degil"
                    id="flexCheckDefault"
                    onClick={(e)  => handleCheckboxChange(e.target.value) }
                  />{""}
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
              Filtrele <i class="fa-solid fa-filter text-white"></i>
            </button>
          </Popover>
   </Fragment>
  )
}
export default FiltersButton