import React from "react";
import logo from "../assest/logo.png"; // Correctly import the image

const Logo = ({ w, h }) => {
  return (
    <img 
      src={logo}
      alt="logo" 
      style={{ width: w, height: h }} 
    />
  );
};
export default Logo;
