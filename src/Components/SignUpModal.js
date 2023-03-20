import React from "react";
import Modal from "react-modal";

Modal.setAppElement("#root");
const SignUpModal = ({SignUpModalisOpen, closeSignUpModal}) => {
  return (
    <>
    <Modal isOpen = {SignUpModalisOpen} onRequestClose = {closeSignUpModal} className="vh-100" style={{backgroundColor: "#eee"}}>
      <div className="container h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-lg-12 col-xl-11">
            <div className="card text-black" style={{borderRadius: "25px"}}>
              <div className="card-body p-md-5">
              <button
                  type="button"
                  className="fa fa-close btn btn-danger mx-0"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                  onClick={closeSignUpModal}
                ></button>
                <div className="row justify-content-center">
                  <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                    <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                      Kayıt ol
                    </p>

                    <form className="mx-1 mx-md-4">
                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-0 mx-1">
                          <input
                            type="text"
                            id="form3Example1c"
                            className="form-control"
                            placeholder="Adınızı giriniz"
                          />    
                        </div>
                      </div>
                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-0 mx-1">
                          <input
                            type="email"
                            id="form3Example3c"
                            className="form-control"
                            placeholder="name@example.com"
                          />
                        </div>
                      </div>
                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-0 mx-1">
                          <input
                            type="password"
                            id="form3Example4c"
                            className="form-control"
                            placeholder="Şifrenizi giriniz"
                          />
                        </div>
                      </div>
                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-0 mx-1">
                          <input
                            type="password"
                            id="form3Example4cd"
                            className="form-control"
                            placeholder="Şifrenizi tekrar giriniz"
                          />
                        </div>
                      </div>
                      <div className="form-check justify-content-center mb-5">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="form2Example3c"
                        />
                       <p style={{fontSize: "14px"}}><a href="#">Kullanıcı sözleşmesini</a> okudum ve onaylıyorum.</p>
                      </div>
                      <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                        <button type="button" className="btn btn-primary btn-lg" onClick={closeSignUpModal}>Kaydol</button>
                      </div>
                    </form>
                  </div>
                  <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                      className="img-fluid"
                      alt="Sample image"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Modal></>
    
  );
};

export default SignUpModal;
