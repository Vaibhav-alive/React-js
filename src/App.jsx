import { useState, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

let api = 'https://www.omdbapi.com/?apikey=61e576a4&t='
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Page from './Component/Page'
let posterapi = 'https://img.omdbapi.com/?apikey=61e576a4&t='
function App() {
  let idk = useRef()
  
  let [loader, setLoader] = useState(false)
  let [poster, setPoster] = useState('')
  let [title, setTitle] = useState('')
  let [imdb, setimdb] = useState('')
  let [year, setYear] = useState('')
  const [rated, setRated] = useState('');
  const [released, setReleased] = useState('');
  const [runtime, setRuntime] = useState('');
  const [genre, setGenre] = useState('');
  const [director, setDirector] = useState('');
  const [writer, setWriter] = useState('');
  const [actors, setActors] = useState('');
  const [plot, setPlot] = useState('');
  const [language, setLanguage] = useState('');
  const [country, setCountry] = useState('');
  const [awards, setAwards] = useState('');
  const [type, setType] = useState('');
  const [totalSeasons, setTotalSeasons] = useState('');
  const [response, setResponse] = useState('');




  function fetchData(){
    let moviename = idk.current.value
    setLoader(true) 
    fetch(api+moviename).then((data)=>{
      return data.json()
    }).then((data)=>{
      setPoster(data.Poster)
      setTitle(data.Title)
      setimdb(data.imdbRating)
      setYear(data.Year)
      setRated(data.Rated);
      setReleased(data.Released);
      setRuntime(data.Runtime);
      setGenre(data.Genre);
      setDirector(data.Director);
      setWriter(data.Writer);
      setActors(data.Actors);
      setPlot(data.Plot);
      setLanguage(data.Language);
      setCountry(data.Country);
      setAwards(data.Awards);
      setType(data.Type);
      setTotalSeasons(data.TotalSeasons);
      setResponse(data.Response);
      setLoader(false)
      console.log(data) 
    })
  }
  return(
    <>
    <section className="navbar">
        <div className="title">
          <h2>Movie Info App</h2>
        </div>
        <div className="search">
          <input type="text" ref={idk} placeholder="Made by Vaibhav, Search a movie here..." />
          <button onClick={fetchData}>
            Search
            <div className={ loader==true ? "loader" : "none"}></div>
          </button>
        </div>
    </section>
    <section className='main'>
      <Page poster={poster} title={title} imdb={imdb} Year={year} Rated={rated} Released={released} Runtime={runtime} Genre={genre} Director={director} Writer={writer} Actors={actors} Plot={plot} Language={language} Country={country} Awards={awards} Type={type} TotalSeasons={totalSeasons} Response={response}/>
    </section>
    </>
  )
}

export default App
