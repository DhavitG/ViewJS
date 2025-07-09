import { useEffect, useState } from "react";
import MovieCard from "../Components/MovieCard";
import "../css/Home.css";
import { getPopularMovies, searchMovies } from "../services/api";

function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadPopularMovies = async () => {
      try {
        setIsLoading(true);

        const popularMovies = await getPopularMovies();
        setMovies(popularMovies);
      } catch (e) {
        console.log(e);
        setError("Failed to load movies")
      } finally {
        setIsLoading(false);
      }
    };

    loadPopularMovies();
  }, []);

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
