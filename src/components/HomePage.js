import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import Display from "./Display";

function HomePage() {
  const [apiData, setapiData] = useState([]);
  const [apiCallCount, setapiCallCount] = useState(0);
  const clientId = "VMNtA6LkhbRHFKUyh3yPEFVMX32J_QqrHYwkdln5hbA";
  useEffect(() => {
    if (apiCallCount === 0) {
      const url =
        "https://api.unsplash.com/photos?page=&per_page=18&&client_id=" +
        clientId;
      axios.get(url).then((result) => {
        setapiData(result.data);
        console.log("API DATA === ", apiData);
        setapiCallCount(1);
      });
    }
  }, []);
  return (
    <div>
      <div className="home-title">
        <h2>Download High Quality Images by creators.</h2>
        <div>Over 2.4 million+ stock by our talented community</div>
      </div>
      <div className="display">
        {apiData.map((photo, index) => (
          <Display apiDataP={photo} index={index}></Display>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
