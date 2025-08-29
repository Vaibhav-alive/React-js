import React, { useEffect, useState, useRef } from "react";
import Slider from "./slider";
import { Link } from "react-router";

const OMDB_KEY = "1e399cbd";

function MovieCard({ gid }) {
  const clientID =
    "70c3cc51cdd9d1e452812982f939f35d15aeec8f02d4e9bbd0a512cbe6a2363f";

  const [ids, setIds] = useState([]);
  const [details, setDetails] = useState([]);
  const [cache, setCache] = useState({});

  // Fetch Trakt movies by genre
  useEffect(() => {
    fetch(`https://api.trakt.tv/movies/popular?genres=${gid}&limit=8`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "trakt-api-version": "2",
        "trakt-api-key": clientID,
      },
    })
      .then((res) => res.json())
      .then((data) => setIds(data))
      .catch((err) => console.log("Trakt error:", err));
  }, [gid]);

  // Fetch OMDb details with caching
  useEffect(() => {
    if (ids.length > 0) {
      Promise.all(
        ids.map(async (m) => {
          const imdbID = m.ids.imdb;

          if (cache[imdbID]) return cache[imdbID];

          const res = await fetch(
            `https://www.omdbapi.com/?apikey=${OMDB_KEY}&i=${imdbID}`
          );
          const data = await res.json();

          // store in cache
          setCache((prev) => ({ ...prev, [imdbID]: data }));
          return data;
        })
      ).then((allDetails) => {
        // remove duplicates
        const unique = allDetails.filter(
          (v, i, a) => v.imdbID && a.findIndex((t) => t.imdbID === v.imdbID) === i
        );
        setDetails(unique);
      });
    }
  }, [ids]);
  if (!details) return <div>Loading!!!</div>
  if (!cache) return <div>Loading!!!</div>
  return (
    <div className="flex-card">
      {details.map((item, index) =>  (
        <Link to={`/movie/${item.imdbID}`} key={index}>
          <Slider movie={item} />
        </Link>
      ))}
    </div>
  );
}

export default MovieCard;
