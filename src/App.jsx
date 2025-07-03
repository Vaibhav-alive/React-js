import { useState, useRef } from 'react'
import './App.css'
let api = 'https://www.omdbapi.com/?apikey=61e576a4&s='
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import Moviedetail from './Component/moviedetails'
import Thumb from './Component/Thumb'
function App() {
  let idk = useRef()
  let [movies, setMovies] = useState([])
  let [loader, setLoader] = useState(false)
  let [Response, setResponse] = useState()
  function fetchData() {
    let moviename = idk.current.value
    setLoader(true)
    fetch(api + moviename).then((data) => {
      return data.json()
    }).then((data) => {
      if (data.Response == "True") {
        setMovies(data.Search)
        setResponse(data.Response)
      }
      else {
        setMovies([])
        setResponse(data.Response)
      }
      setLoader(false)
      console.log(data)
    })
  }
  return (
    <Router>
      <Routes>
        <Route path='/' element={
          <>

            <section className="navbar">
              <div className="search">
                <input type="text" ref={idk} placeholder="Made by Vaibhav, Search a movie here..." />
                <button onClick={fetchData}>
                  Search
                  <div className={loader == true ? "loader" : "none"}></div>
                </button>
              </div>
            </section>
            <section className="main">

              {
                movies.map((movie) => (
                  <Link to={`/movie/${movie.imdbID}`} key={movie.imdbID} >
                    <Thumb movie={movie} />

                  </Link>
                ))
              }
            </section>
          </>

        } />
        <Route path='/movie/:id' element={<Moviedetail />} />
      </Routes>
    </Router>

  )
}

export default App
