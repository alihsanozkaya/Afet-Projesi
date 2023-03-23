import React, {useContext} from "react";
import "../CSS/App.css";
import { Context } from "../Context/Context";

const LoginHeader = () => {
  const {setState} = useContext(Context)
  
  const Logout = () =>{
    setState(false)
  }
  return (
    <>
      <header className="header d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-5 border-bottom">
        <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
        <li><a href="/" className="nav-link px-3">Anasayfa</a></li>
        <li><a href="/hakkimizda" className="nav-link px-3">Hakkımızda</a></li>
        <li><a href="/ihtiyaclar" className="nav-link  px-3">İhtiyaçlar</a></li>
        <li><a href="/yardimtalebi" className="nav-link px-3">Yardım Talebi</a></li>
        </ul>
        <div className="col-md-3 text-end mx-5">
        <a class="d-block link-dark text-decoration-none dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={{float: "right"}}>
            <img src="https://github.com/mdo.png" alt="mdo" width="32" height="32" className="rounded-circle"/>
          </a>
          <ul
            className="dropdown-menu text-small justfiy-content-end mx-5"
            aria-labelledby="dropdownUser1"
          >
            <li>
              <a className="dropdown-item" href="#" style={{borderRadius: "10px"}}>
                Profil
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#" style={{borderRadius: "10px"}}>
                Ayarlar
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#" style={{borderRadius: "10px"}}>
                Gönüllü ol
              </a>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
              <a className="dropdown-item" href="#" onClick={Logout} style={{borderRadius: "10px"}}>
                Çıkış yap
              </a>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
};

export default LoginHeader;
