import React, { useState } from "react";
import NewsItem from "./NewsItem";
import articles from "../sampleOutput";

const News = () => {
  const [page, setPage] = useState(1);

  const handlePreviousClick = () => {
    alert("Previous");
  };

  const handleNextClick = () => {
    setPage({
        page : page+1
    })
  };

  return (
    <div className="container my-3">
      <h2
        style={{
          backgroundColor: "lightcyan",
          padding: "10px",
          border: "1px solid black",
        }}
      >
        News App
      </h2>
      <div className="row justify-content-center">
        {articles.map((article, index) => {
          return (
            <div className="col-md-4">
              <NewsItem
                key={index}
                title={article.title.slice(0, 8)}
                description={article.description}
                urlToImage={article.urlToImage}
                url={article.url}
              />
            </div>
          );
        })}
      </div>
      <div className="container d-flex justify-content-between">
        <button
          type="button"
          class="btn btn-dark"
          onClick={handlePreviousClick}
          disabled={page<=1}
        >
          &larr; Previous
        </button>
        <button type="button" class="btn btn-dark" onClick={handleNextClick}>
          Next &rarr;
        </button>
      </div>
    </div>
  );
};

export default News;
