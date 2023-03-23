import React, { useContext, useState } from "react";
import { Context } from "../Context/Context";
import Footer from "./Footer";
import Header from "./Header";
import LoginHeader from "./LoginHeader";
import GoogleCard from "./GoogleCard";
import ShowMapButton from "./ShowMapButton";

const Layout = ({ children }) => {
  const { state } = useContext(Context);
  const [showMap, setShowMap] = useState(false);

  const handleToggleShowMap = () => {
    setShowMap((prev) => !prev);
  };
  return (
    <>
      {state === true ? <LoginHeader /> : <Header />}
      {showMap ? (
        <>
          <GoogleCard />
        </>
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
