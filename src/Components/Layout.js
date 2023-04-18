import React, { useContext, useEffect, useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import GoogleCard from "./GoogleCard";
import ShowMapButton from "./ShowMapButton";
import { FilterContextProvider } from "../Context/FilterContext";

const Layout = ({ children }) => {
  const [showMap, setShowMap] = useState(false);

  const handleToggleShowMap = () => {
    setShowMap((prev) => !prev);
  };
  const user = JSON.parse(localStorage.getItem('user'))

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
