import { useState, useEffect } from "react";
import Details from "../components/Details";
import { useLocation } from "react-router-dom";

function Bookmark() {
  const { state } = useLocation();
  const data = state?.bookmarks;
  console.log(data);
  return (
    <>
      {data?.map((movie) => {
        return (
          <Details
            image={movie?.image}
            description={movie?.description}
            author={movie?.hero}
            hero={movie.author}
            title={movie?.title}
            publishedAt={movie?.year}
            runtime={movie?.runtime}
            key={movie?.urlToIimagemage}
          />
        );
      })}
    </>
  );
}

export default Bookmark;
