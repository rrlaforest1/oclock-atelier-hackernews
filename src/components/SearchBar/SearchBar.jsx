import { useState } from "react";
import "./SearchBar.css";
import { useEffect } from "react";

function SearchBar({ setSearch }) {
  const [searchInput, setSearchInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearch(searchInput);
  };

  return (
    <>
      <div className="search-bar">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name=""
            id=""
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
          </button>
        </form>
      </div>
    </>
  );
}

export default SearchBar;
