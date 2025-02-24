import React from "react";
import { useGlobalContext } from "../../Api/Context";
import "./storiescss.css";
import Loading from "../Pages/Loading";
import uniqid from "uniqid";
import NotFoundAnyStories from "./NotFoundAnyStories";
function Stories() {
  const { articles, isLoading } = useGlobalContext();
  console.log(articles);
  return (
    <>
      {isLoading ? (
        <>
          <Loading />
        </>
      ) : (
        <>
          {articles && articles.length === 0 ? (
            <>
              <NotFoundAnyStories />
            </>
          ) : (
            <div className="card-contenr">
              {articles &&
                articles.map((curPost) => {
                  if (curPost.title !== "[Removed]") {
                    const timestamp = curPost.publishedAt;
                    const date = new Date(timestamp);
                    const formattedDate = `${date.getDate()}/${
                      date.getMonth() + 1
                    }/${date.getFullYear()}`;
                    const imgURL = curPost.urlToImage;
                    const id = uniqid();
                    return (
                      <div className="card" key={id}>
                        <div className="card-header">
                          <img
                            src={imgURL}
                            alt="not found"
                            srcSet=""
                            id="news-img"
                          />
                        </div>
                        <div className="card-content">
                          <h3 id="news-title">{curPost.title}</h3>
                          <h6 id="news-source" className="news-source">
                            {formattedDate}
                          </h6>
                          <p id="news-desc" className="news-desc">
                            {curPost.description}
                          </p>
                          <a href={curPost.url}>read more</a>
                        </div>
                      </div>
                    );
                  } else {
                    return null;
                  }
                })}
            </div>
          )}
        </>
      )}
    </>
  );
}

export default Stories;
