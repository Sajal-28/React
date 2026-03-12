import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Movies from "./pages/Movies"
import MovieDetails from "./pages/MovieDetails"
import Favourite from "./pages/Favourite"
import { ToastContainer } from "react-toastify"

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movie-details/:id" element={<MovieDetails />} />
          <Route path="/fav" element={<Favourite />} />
        </Routes>

        <ToastContainer />
      </BrowserRouter>
    </div>
  )
}

export default App