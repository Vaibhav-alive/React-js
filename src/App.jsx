import { useState, useRef } from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import Moviedetail from './Component/moviedetails'
import Home from './Component/homethumb'
import Thumb from './Component/Thumb'
function App() {
  let idk = useRef()
  let [movies, setMovies] = useState([])
  let [action, setAction] = useState([])
  let [loader, setLoader] = useState(false)
  let [Response, setResponse] = useState()
  fetch('https://streaming-availability.p.rapidapi.com/shows/search/filters?country=IN&series_granularity=season&genres=action&order_direction=asc&order_by=original_title&genres_relation=and&output_language=en&show_type=movie', {
    method: 'GET',
    headers: {
        'x-rapidapi-key': 'e07fd030e1msh4127aacf9706b7dp114151jsn27b84cc0b9dc',
        'x-rapidapi-host': 'streaming-availability.p.rapidapi.com'
    }
}).then((res)=>{
  return res.json()
}).then((res)=>{
  setAction(res.shows)
  console.log(res.shows)
})
  function fetchData() {
    let moviename = idk.current.value;
    let api = `https://www.omdbapi.com/?apikey=61e576a4&s=${moviename}`
    
    setLoader(true)
    fetch(api).then((data) => {
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
              
              {
                
                action.map((res)=>(
                  <Link to={`/movie/${res.imdbId}`} key={res.imdbId} >
                   
                    <Home res={res} />
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
