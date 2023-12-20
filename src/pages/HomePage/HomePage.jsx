import { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import NewsList from "../../components/NewsList/NewsList";
import SearchBar from "../../components/SearchBar/SearchBar";

import "./HomePage.css";

function HomePage() {
  const [search, setSearch] = useState("");
  return (
    <>
      <Navbar />
      <div className="home-page">
        <h1>Rony's Hacker News</h1>
        <SearchBar setSearch={setSearch} />
        <NewsList search={search} />
      </div>
    </>
  );
}

export default HomePage;
