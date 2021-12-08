import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Display from "./Display";
import { ToggleOffOutlined,ToggleOnOutlined } from "@material-ui/icons";
import HomePage from "./HomePage";

function Navbar() {
  const [inputData, setinputData] = useState("");
  const [imgName, setimgName] = useState("");
  const [pageNo, setpageNo] = useState(1);
  const clientId = "VMNtA6LkhbRHFKUyh3yPEFVMX32J_QqrHYwkdln5hbA";
  const [apiData, setapiData] = useState([]);
  const [toggle, setToggle] = useState(false);

  function handleToggle(){
    setToggle(!toggle);
    console.log(toggle);
  }

  useEffect(() => {
    if (imgName !== "") {
      const url =
        "https://api.unsplash.com/search/photos?page=" +
        pageNo +
        "&per_page=18&query=" +
        imgName +
        "&client_id=" +
        clientId;
      axios.get(url).then((result) => {
        setapiData(result.data.results);
        console.log("API DATA === ", apiData);
      });
    }
  }, [imgName, pageNo]);

  function handleSubmit() {
    console.log("Handler Called");
    setimgName(inputData);
  }
  return (
    <div className={toggle ? "main bg-dark" : "main bg-light"} >
      <nav className="navbar navbar-expand-md navbar-light navbar-expand-lg nav-bar-head">
        <div className="container-fluid">
          <a className="navbar-brand image-gallery">Image Gallery</a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <div className="d-flex">
              <input
                className="form-control me-2"
                onChange={(e) => setinputData(e.target.value)}
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button
                className="btn btn-outline-success"
                onClick={(e) => handleSubmit()}
              >
                Search
              </button>
            </div>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link disabled" aria-current="page">
                  Explore
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled">Collection</a>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled">Community</a>
              </li>
            </ul>
          </div>
          {toggle ? <button className="button-toggle bg-dark off">
            <ToggleOnOutlined onClick={handleToggle}/>
          </button> : <button className="button-toggle">
            <ToggleOffOutlined onClick={handleToggle} />
          </button>}  
        </div>
      </nav>
      {apiData.length === 0 ? (
        <HomePage />
      ) : (
        <div>
          <h1 className="input-in">{inputData}</h1>
          <div className="display render-in">
            {apiData.map((photo, index) => (
              <Display apiDataP={photo} index={index}></Display>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
