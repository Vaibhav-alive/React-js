import React from 'react'
import Genrelist from '../constant/genrelist'
import MovieCard from './MovieCard'
function list() {
 
  return (
    
    <div className="list" >
        {Genrelist.genere.map((item, index)=>index<=4&&(
            <section key={item.id}>
                <h2>{item.name}</h2>
                <MovieCard gid={item.id}  />
            </section>
        ))}
        
    </div>
  )
}

export default list