import React, { useContext, useEffect, useState } from "react";
import "../CSS/App.css";
import LoginModal from "./LoginModal";
import SignUpModal from "./SignUpModal";
import Notification from "./Notification";
import { UserContext } from "../Context/UserContext";

const Header = () => {
  const [LoginModalisOpen, setLoginModalisOpen] = useState(false);
  function openLoginModal() {
    setLoginModalisOpen(true);
  }
  function closeLoginModal() {
    setLoginModalisOpen(false);
  }
  const [SignUpModalisOpen, setSignUpModalisOpen] = useState(false);
  function openSignUpModal() {
    setSignUpModalisOpen(true);
  }
  function closeSignUpModal() {
    setSignUpModalisOpen(false);
  }
  const {isAuthenticated , setIsAuthenticated} = useContext(UserContext)
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("user"))
  );
  const logout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem("user");
    setCurrentUser(null);
    window.location.reload();
  };
  useEffect(() => {
    setCurrentUser(JSON.parse(localStorage.getItem("user")));
  }, [isAuthenticated]);
  return (
    <>
      <header className="header d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-5 border-bottom lg">
        <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
          <li>
            <a href="/" className="nav-link px-3">
              Anasayfa
            </a>
          </li>
          <li>
            <a href="/hakkimizda" className="nav-link px-3">
              Hakkımızda
            </a>
          </li>
          <li>
            <a href="/ihtiyaclar" className="nav-link  px-3">
              İhtiyaçlar
            </a>
          </li>
          <li>
            <a href="/yardimtalebi" className="nav-link px-3">
              Yardım Talebi
            </a>
          </li>
        </ul><div className="col-md-3 text-end">
        {!isAuthenticated && !currentUser ? (          
        <>
          <button
            type="button"
            className="btn btn-secondary mx-1"
            onClick={openLoginModal}
            style={{ borderRadius: "10px" }}
          >
            Giriş yap
          </button>
          <button
            type="button"
            className="btn btn-info mx-1"
            onClick={openSignUpModal}
            style={{ borderRadius: "10px" }}
          >
            Üye ol
          </button>
          </>
        ) : (<>
        <Notification/>
            <button type="button" className="btn btn-outline-primary" onClick={logout}>Çıkış yap</button>
        </>
        )}
        </div>
      </header>
      <LoginModal
        LoginModalisOpen={LoginModalisOpen}
        closeLoginModal={closeLoginModal}
      />
      <SignUpModal
        SignUpModalisOpen={SignUpModalisOpen}
        closeSignUpModal={closeSignUpModal}
      />
    </>
  );
};

export default Header;
