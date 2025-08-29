import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { Link, Route, Routes } from 'react-router';
import Thumb from './Thumb'
import Home from './homethumb';
import Notfound from '../assets/Not-found.jpg'

function Search({ setLoader }) {
  let { name } = useParams()
  let [movie, setMovie] = useState([])
  let apikey = '1e399cbd'
  let [page, setPage] = useState(1)
  let [error, setError] = useState("")
  let [errorstatus, setErrorstatus] = useState(false)

  useEffect(() => {
    setLoader(true)
    fetch(`https://omdbapi.com/?apikey=${apikey}&s=${name}&page=${page}`).then((data) => {
      return data.json()
    }).then((data) => {
      setLoader(false)
      if (data.Response == "True") {
        setError(null)
        setErrorstatus(false)
        const sorted = data.Search.sort((a, b) => {
          const yearA = parseInt(a.Year.split("-")[0])
          const yearB = parseInt(b.Year.split("-")[0])
          return yearB - yearA;
        })
        if (page == 1) {
          setMovie(sorted)
          // setErrorstatus(false)

        }
        else if (page > 1) {
          setMovie((prev) => [...prev, ...sorted])
        }
      } else {
        setMovie([]);
        setErrorstatus(true);
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
      
      <Home />
      <section className="main-cont">
        <div className="main">
          {errorstatus == true ? (
            <div className="width">
              <div className="error">
                <img src={Notfound} alt="" />
              </div>
            </div>

          ) : (

            <>
              <div className="movies-thumb">
                {movie.map((movie) => (
                  <Link to={`/movie/${movie.imdbID}`} key={movie.imdbID}>
                    <Thumb movie={movie} />
                  </Link>
                ))}
              </div>

              <button className="btn" onClick={loadmore}>Load More..</button>
            </>
          )}
        </div>

      </section>

    </>


  )


}

export default Search;