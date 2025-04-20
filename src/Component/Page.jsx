
function Page({movie}) {
  return (

    
   
      <div className="cont">
          {movie.map((movie) => (
           
                <div key={movie.imdbID} className="desc-box">
                  <style jsx>{`
                      .desc-box {
                          position: relative;
                         
                          background-size: cover;
                          background-position: center;
                      }
                      .desc-box > * {
                          position: relative;
                          z-index: 2;
                      }
                  `}</style>
                  <div className="f-prevent">
                  <div className="name"><h1>{movie.Title}</h1></div>
                  <div className="flex">
                      <div className="f9">
                          <div className="Year">Year: {movie.Year}</div>
                          <div className="rating">imdb rating: {movie.imdbRating}</div>
                          <div className="Rated">rated: {movie.Rated}</div>
                          <div className="Released">released: {movie.Released}</div>
                          <div className="Runtime">runtime: {movie.Runtime}</div>
                          <div className="Genre">genre: {movie.Genre}</div>
                          <div className="Actors">actors: {movie.Actors}</div>
                      </div>
                      <div className="s9">
                          <div className="Plot">plot: {movie.Plot}</div>
                          <div className="Language">language: {movie.Language}</div>
                          <div className="Country">country: {movie.Country}</div>
                          <div className="Awards">awards: {movie.Awards}</div>
                          <div className="Type">type: {movie.Type}</div>
                          
                          <div className="Director">director: {movie.Director}</div>
                          <div className="Writer">writer: {movie.Writer}</div>
                          
                      </div>
                  </div>
                  </div>
                  
                  <div className="poster">
                      <img src={movie.Poster} alt="" />
                  </div>
                </div>
               
            
            ))}
        </div>

  );
}
export default Page;