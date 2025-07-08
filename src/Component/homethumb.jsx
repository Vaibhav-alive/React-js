
function Home( {res} ){
    
    return(
            <div className="t-index">
                    <div className="t-flex">
                        <img src={res.imageSet.verticalPoster.w240} alt="" />
                        <div className="t-desc">
                            <div className="name">{res.originalTitle}</div>
                            <div className="release">{res.Year}</div>
                        </div>
                    </div>
                    
              
            </div>
    )
}

export default Home;