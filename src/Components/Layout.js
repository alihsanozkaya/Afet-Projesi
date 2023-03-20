import React, {useContext} from "react";
import { Context } from "../Context/Context";
import Footer from "./Footer";
import Header from "./Header";
import LoginHeader from "./LoginHeader";

const Layout = ({children}) => {

  const {state} = useContext(Context)
  return (
    <>
      {state === true ? <LoginHeader/> : <Header/>}
      {children}
      <Footer />
    </>
  );
};

export default Layout;
