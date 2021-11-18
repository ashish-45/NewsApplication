import React, { useEffect, useState } from "react";

const NewsItem = ({ title, description, urlToImage, url }) => {


  useEffect(() => {
    const fetchNews = async () => {
      let url =
        "https://newsapi.org/v2/top-headlines?country=in&apiKey=d4fd151e4bde4205a4a321ea59435472";
      const data = await fetch(url);
      const response = await data.json();
      console.log(response);
    };
    fetchNews();
  }, []);

  return (
    <div>
      <div class="card mr-5 shadow p-3 mb-5" style={{ width: "18rem" }}>
        <img src={urlToImage} class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">{title}</h5>
          <p class="card-text">{description}</p>
          <a href={url} target="_blank" class="btn btn-sm btn-primary">
            Read More
          </a>
        </div>
      </div> 
    </div>
    
  );
};

export default NewsItem;
