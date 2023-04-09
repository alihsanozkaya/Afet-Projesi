import React, { useContext, useEffect, useState } from "react";
import { Context } from "../Context/Context";
import Footer from "./Footer";
import Header from "./Header";
import GoogleCard from "./GoogleCard";
import ShowMapButton from "./ShowMapButton";

const Layout = ({ children }) => {
  const [showMap, setShowMap] = useState(false);

  const handleToggleShowMap = () => {
    setShowMap((prev) => !prev);
  };
  const user = JSON.parse(localStorage.getItem('user'))
  console.log(user)

  return (
    <>
      <Header/>
      {showMap ? (
          <GoogleCard />
      ) : (
        <div className="container">{children}</div>
      )}
      <ShowMapButton
        handleToggleShowMap={handleToggleShowMap}
        showMap={showMap}
      />
      <Footer />
    </>
  );
};

export default Layout;
