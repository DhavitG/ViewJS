import { useState } from "react";
import MovieCard from "../Components/MovieCard";
import "../css/Home.css"
import { getPopularMovies } from "../services/api";

function Home() {
  const [searchQuery, setSearchQuery] = useState("");

  const movies = [
    { id: 1, title: "John Wick", release_date: "2020" },
    { id: 2, title: "Indiana Jones", release_date: "1999" },
    { id: 3, title: "Interstellar", release_date: "2014" },
  ];

  function handleSearch(e) {
    e.preventDefault();
    setSearchQuery("");
  }

  return (
    <div className="home">
      <form className="search-form" onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search for movies..."
          className="search-input"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>

      <div className="movies-grid">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}

export default Home;
