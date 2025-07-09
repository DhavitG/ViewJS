import "./css/App.css";
import MovieCard from "./Components/MovieCard";
import Home from "./Pages/Home";
import Favorites from "./Pages/Favorites";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <div>
      <Navbar/>
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
