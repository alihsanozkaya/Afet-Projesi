import Layout from "../Components/Layout";
import React from "react";

const ResetPasswordPage = () => {
  return (
    <>
      <Layout>
        <section className="vh-100" style={{ backgroundColor: "#c0c0c0" }}>
          <div className="container h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-lg-12 col-xl-11">
                <div
                  className="card text-black"
                  style={{ borderRadius: "25px" }}
                >
                  <div className="card-body p-md-5">
                    <div className="row justify-content-center">
                      <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                        <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                          Şifremi unuttum!
                        </p>

                        <form className="mx-1 mx-md-4">
                          <div className="d-flex flex-row align-items-center mb-4">
                            <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                            <div className="form-outline flex-fill mb-0 mx-1">
                              <input
                                type="email"
                                id="form3Example3c"
                                className="form-control"
                                placeholder="E-mail adresinizi giriniz"
                              />
                            </div>
                          </div>
                          <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                            <button
                              type="button"
                              className="btn btn-primary btn-lg"
                            >
                              Şifreyi sıfırla
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
        </section>
      </Layout>
    </>
  );
};

export default ResetPasswordPage;
