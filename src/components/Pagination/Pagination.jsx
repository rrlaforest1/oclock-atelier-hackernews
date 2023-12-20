import { useState } from "react";
import "./Pagination.css";

function Pagination({ page, setPage, nbpages }) {
  const [pages, setPages] = useState([]);

  let numberOfPages = [...Array(nbpages - 1).keys()];

  const maxAndMinPages = () => {
    const maxNmin = [];
    let counterMin = 0;
    let counterMax = 0;
    for (let i = 0; i < 5; i++) {
      if (numberOfPages[page - i]) {
        counterMin++;
      } else {
        counterMax++;
      }
      if (numberOfPages[page + i]) {
        counterMax++;
      } else {
        counterMin++;
      }
    }
    return [page + 1 - counterMin, page + 1 + counterMax];
  };

  numberOfPages = numberOfPages.slice(maxAndMinPages()[0], maxAndMinPages()[1]);

  return (
    <>
      <ul className="pagination">
        {numberOfPages.map((onePage, pageIndex) => {
          return (
            <li
              className={`page ${onePage == page ? "current" : ""}`}
              key={pageIndex}
              onClick={() => setPage(onePage)}
            >
              {onePage}
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Pagination;
