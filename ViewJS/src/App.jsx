import './App.css'
import MovieCard from './Components/MovieCard'
import Home from './Pages/Home'
import Favorites from './Pages/Favorites'
import {Routes, Route} from "react-router-dom"

function App() {

  return (
    <main className='main-content'>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/favorites' element={<Favorites/>}/>
      </Routes>
    </main>
  )
}

export default App
