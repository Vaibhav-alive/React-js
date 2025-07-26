import { useNavigate, Route, Routes } from "react-router";
import { useRef, useState } from "react";
import Search from "./Search";

function Home() {
  const idk = useRef();
  let [loader, setLoader] = useState(false);
  const navigate = useNavigate();


  function handleSearch() {
    setLoader(true)
    const value = idk.current.value;
    if (value !== '') {
      navigate(`/movie/search/${value}`);
    }

  }

  function handleEsc(){
    navigate('/')
  }




  return (
    <>
    <div className="banner" onClick={handleEsc}>
      <div className="icon" />
      <p className="heading">FrameologyX</p>
    </div>
  
      <section className="navbar">
        <div className="search">
          <input type="text" ref={idk} placeholder="Made by Vaibhav, Search a movie here..." />
          <button onClick={handleSearch}  >
            Search
          </button>
        </div>
      </section>


    </>
  );
}
export default Home;