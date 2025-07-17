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




  return (
    <>
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