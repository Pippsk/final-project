import React from "react";
import { Link } from "react-router-dom";
import style from "./NotFound.module.css";

const NotFound = () => {
  return (
    <div className={style.error_page}>
      <h1>404</h1>
      <p>Sorry, The page you are looking can not be found</p>
      <button>
        <Link to="/">Back Home</Link>
      </button>
    </div>
  );
};

export default NotFound;
