import React, { useContext } from "react";
import Modal from "react-modal";
import { Context } from "../Context/Context";
import { UserContext } from "../Context/UserContext";

Modal.setAppElement("#root");
const LoginModal = ({ LoginModalisOpen, closeLoginModal }) => {
  const {login, veri, setVeri, success} = useContext(UserContext)
  const control = (e) => {
    e.preventDefault();
    login();
    if(success){
      closeLoginModal();
    }
  }
  
  return (
    <>
      <Modal
        isOpen={LoginModalisOpen}
        onRequestClose={closeLoginModal}
        className="vh-100"
        style={{ backgroundColor: "#eee" }}
      >
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-lg-12 col-xl-11">
              <div className="card text-black" style={{ borderRadius: "25px" }}>
                <div className="card-body p-md-5">
                  <button
                    type="button"
                    className="fa fa-close btn btn-danger mx-0"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                    onClick={closeLoginModal}
                  ></button>
                  <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                      <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                        Üye girişi
                      </p>

                      <form className="mx-1 mx-md-4">
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0 mx-1">
                            <input
                              type="email"
                              id="form3Example3c"
                              className="form-control"
                              placeholder="name@example.com"
                              value={veri.email}
                              onChange={(e) => setVeri({...veri, email: e.target.value})}
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
                              value={veri.password}
                              onChange={(e) => setVeri({...veri, password: e.target.value})}
                            />
                          </div>
                        </div>
                        <div className="d-flex justify-content-end mb-5">
                          <a href="/sifresifirlama">Şifremi unuttum!</a>
                        </div>
                        <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                          <button
                            type="button"
                            className="btn btn-primary btn-lg"
                            onClick={control}
                          >
                            Giriş yap
                          </button>
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
      </Modal>
    </>
  );
};

export default LoginModal;
