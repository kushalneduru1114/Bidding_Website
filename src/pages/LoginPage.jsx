import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import page from "../images/loginPage.jpg"

const LoginPage = () => {
  
  return (
    <div className="page">
      <img
        src={page}
        style={{ width: "100%" }}
        />
    </div>
  );
};

export default LoginPage;
