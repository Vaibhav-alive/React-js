import React from 'react'
import { useRef, useEffect } from 'react'
import Genrelist from '../constant/genrelist'
import MovieCard from './MovieCard'
function list() {
  const card = useRef([])
  useEffect(() => {

       const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show')
          }
          else{
            entry.target.classList.remove('show') 
          }
        })
      },
      { threshold: 0.5 } // adjust threshold as needed
    )
    card.current.forEach((section) => {
      if (section) observer.observe(section)
    })
    return () => {
      card.current.forEach((section) => {
        if (section) observer.unobserve(section)
      })
    }

  }, [])

  return (

    <div className="list" >
      {Genrelist.genere.map((item, index) => index <= 4 && (
        <section key={item.id} ref={(el) => (card.current[index] = el)}>
          <h2>{item.name}</h2>
          <MovieCard gid={item.id} />
        </section>
      ))}

    </div>
  )
}

export default list