import { useState, useEffect } from 'react';
import { useParams} from 'react-router';
import { Link, Route,Routes } from 'react-router';
import Thumb from './Thumb'
import Home from './homethumb';

function Search({setLoader}) {
  let {name} = useParams()
  let [movie, setMovie] = useState([])
  let apikey = '38ae9202'
  let [page, setPage] = useState(1)

  useEffect(() => {
    setLoader(true)
    fetch(`https://omdbapi.com/?apikey=${apikey}&s=${name}&page=${page}`).then((data)=>{
      return data.json()
    }).then((data)=>{
      setMovie( prev => [...prev, ...data.Search])
      setLoader(false)
    })

  },[page])
  useEffect(()=>{
    setLoader(true)
    fetch(`https://omdbapi.com/?apikey=${apikey}&s=${name}&page=1`).then((res)=>{
      return res.json()
    }).then((res)=>{
      if (res.Search) {
        const sorted = res.Search.sort((a,b)=>{
          const yearA = parseInt(a.year)
          const yearB = parseInt(b.year)
          return yearB - yearA ;
        })
        setMovie(sorted)
        
      }
      
    })
  },[name])

  function loadmore(){
    setPage(prev => prev+1)
  }
  return (
    <>
  <Home />
      <section className="main">
        
        {
           movie.map((movie)=>(
            <Link to={`/movie/${movie.imdbID}`} >
              <Thumb movie={movie} key={movie.imdbID}/>
            </Link>
              
           ))
        }
        <button className="btn" onClick={loadmore}>Load More..</button>
      </section>
        
    </>
    
    
  )


}

export default Search;