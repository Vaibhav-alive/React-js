function Page(props){
  return (
    <div className="cont">
      <div className="desc-box">
          <div className="name"><h1>{props.title}</h1></div>
          <div className="flex">
            <div className="f9">
              <div className="Year">Year: {props.Year}</div>
              <div className="rating">imdb rating: {props.imdb}</div>
              <div className="Rated">rated: {props.Rated}</div>
              <div className="Released">released: {props.Released}</div>
              <div className="Runtime">runtime: {props.Runtime}</div>
              <div className="Genre">genre: {props.Genre}</div>
              <div className="Director">director: {props.Director}</div>
              <div className="Writer">writer: {props.Writer}</div>
              <div className="Actors">actors: {props.Actors}</div>
            </div>
            <div className="s9">
              <div className="Plot">plot: {props.Plot}</div>
              <div className="Language">language: {props.Language}</div>
              <div className="Country">country {props.Country}</div>
              <div className="Awards">awards: {props.Awards}</div>
              <div className="Type">type: {props.Type}</div>
              <div className="TotalSeasons">total seasons{props.TotalSeasons}</div>
            </div>
          </div>
      </div>
       <img src={props.poster} alt="" />
        
      
    </div>
    
  )
}

export default Page;