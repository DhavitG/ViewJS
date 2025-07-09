import "./css/App.css";
import MovieCard from "./Components/MovieCard";
import Home from "./Pages/Home";
import Favorites from "./Pages/Favorites";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import { MovieProvider } from "./contexts/MovieContext";

function App() {
  return (
    <MovieProvider>
      <Navbar/>
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </main>
    </MovieProvider>
  );
}

export default App;
