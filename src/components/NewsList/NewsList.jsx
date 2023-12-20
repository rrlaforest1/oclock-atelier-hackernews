import { useState, useEffect } from "react";
import hackerNewsApi from "../../service/api";
import Pagination from "../Pagination/Pagination";
import Loading from "../Loading/Loading";

import "./NewsList.css";

function NewsList({ search }) {
  const [newsData, setNewsData] = useState({});
  const [page, setPage] = useState(0);

  console.log("search", search);

  const fetchNews = async () => {
    const response = await hackerNewsApi.getLatestNews(page);
    console.log("response", response);
    setNewsData(response);
  };

  const fetchSearchedNews = async () => {
    const response = await hackerNewsApi.searchNews(page, search);
    console.log("responseSearch", response);
    setNewsData(response);
  };

  useEffect(() => {
    if (search == "") {
      fetchNews();
    } else {
      fetchSearchedNews();
    }
  }, [page, search]);

  if (!newsData.hits) {
    return <Loading />;
  }
  return (
    <>
      <div className="news">
        <h2>NewsList</h2>
        <Pagination page={page} setPage={setPage} nbpages={newsData.nbPages} />
        <ul className="news-list">
          {newsData.hits.map((oneNews) => {
            return (
              <li key={oneNews.objectID} className="news-item">
                <p className="news-title">
                  {" "}
                  <a
                    href={oneNews.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {oneNews.title}
                  </a>
                </p>
                <p className="news-author">
                  <span>Written by: </span>
                  {oneNews.author}
                </p>
                <p className="news-link">
                  <a
                    href={oneNews.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Go to article
                  </a>
                </p>
                <p className="news-date">{oneNews.created_at}</p>
              </li>
            );
          })}
        </ul>
        <Pagination page={page} setPage={setPage} nbpages={newsData.nbPages} />
      </div>
    </>
  );
}

export default NewsList;
