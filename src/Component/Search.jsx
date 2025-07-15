import { useState, useEffect } from 'react';
import { useParams} from 'react-router';
import { Link, Route,Routes } from 'react-router';
import Thumb from './Thumb'
import Home from './homethumb';

function Search({setLoader}) {
  let {name} = useParams()
  let [movie, setMovie] = useState([])
  let apikey = '38ae9202'
   
  useEffect(() => {
    setLoader(true)
    fetch(`https://omdbapi.com/?apikey=${apikey}&s=${name}`).then((data)=>{
      return data.json()
    }).then((data)=>{
     
      setMovie(data.Search)
      setLoader(false)
    })
   
  },[name])


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
      </section>
        
    </>
    
    
  )


}

export default Search;