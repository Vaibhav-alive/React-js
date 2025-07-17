function Thumb( {movie} ){
    
    return(
            <div className="t-index">
                    <div className="t-flex">
                        <img src={movie.Poster} alt="" />
                        <div className="t-desc">
                            <div className="name">{movie.Title}</div>
                            {/* <div className="release">{movie.Year}</div> */}
                        </div>
                    </div>
                    
              
            </div>
    )
}

export default Thumb;