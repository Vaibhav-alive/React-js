import { useState, useRef} from 'react'
import './App.css'
let api = 'https://www.omdbapi.com/?apikey=61e576a4&s='
import Home from './Component/Home'
import Thumb from './Component/Thumb'
function App() {
  let idk = useRef()
  let [movies, setMovies] = useState([])
  let [loader, setLoader] = useState(false)
  let [Response, setResponse] = useState()
  function fetchData(){
    let moviename = idk.current.value
    setLoader(true) 
    fetch(api+moviename).then((data)=>{
     return data.json()
    }).then((data)=>{
      if (data.Response == "True"){
        setMovies([data.Search])
        setResponse(data.Response)
        setLoader(false)
      }
      else{
        setMovies([])
        setResponse(data.Response)
        setLoader(false)
      }
      console.log(data)
    })
  }
 return(
    <>
      
      <section className="navbar">
            <div className="search">
                <input type="text" ref={idk} placeholder="Made by Vaibhav, Search a movie here..." />
                <button onClick={fetchData}>
                    Search
                    <div className={ loader==true ? "loader" : "none"}></div>
                </button>
            </div>
      </section>
      <section className="main">
        {
          movies.map((movie)=>(
            <Thumb movie={movie} key={movie.key} />
          ))
        }
      </section>
    </>
  )
}

export default App
