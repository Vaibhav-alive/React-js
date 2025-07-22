import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { Link, Route, Routes } from 'react-router';
import Thumb from './Thumb'
import Home from './homethumb';
import Esc from './Esc';

function Search({ setLoader }) {
  let { name } = useParams()
  let [movie, setMovie] = useState([])
  let apikey = '38ae9202'
  let [page, setPage] = useState(1)
  let [error, setError] = useState("")
  let [errorstatus, setErrorStatus] = useState(false)

  useEffect(() => {
    setLoader(true)
    fetch(`https://omdbapi.com/?apikey=${apikey}&s=${name}&page=${page}`).then((data) => {
      return data.json()
    }).then((data) => {
      setLoader(false)
      if (data.Response == "True") {
        setError(null)
        setErrorStatus(false)
        const sorted = data.Search.sort((a,b)=>{
          const yearA = parseInt(a.Year.split("-")[0])
          const yearB = parseInt(b.Year.split("-")[0])
          return yearB - yearA;
        })
        if(page==1){
          setMovie(sorted)
        }
        else if(page>1){
          setMovie((prev)=> [...prev, ...sorted])
        }
      }else {
        setMovie([]);
        setErrorStatus(true);
        setError("No movies found...");
      }
    }).catch(err => {
      setMovie([])
      setError("Some error occureed")
    })

  }, [name, page])


  function loadmore() {
    setPage(prev => prev + 1)
  }

  if (!movie) return <div>Loading....</div>;
  return (
    <>
      <Esc />
      <Home />
      <section className="main">
        <div className="main">
          {errorstatus == true ? (
            <div className="error">{error}</div>
          ) : (
            movie.map((movie) => (
              <Link to={`/movie/${movie.imdbID}`} key={movie.imdbID}>
                <Thumb movie={movie} />
              </Link>
            ))
          )}
        </div>

        <button className="btn" onClick={loadmore}>Load More..</button>
      </section>

    </>


  )


}

export default Search;