import { useState, useEffect } from "react";
import Details from "../components/Details";

function Home() {
  const [movdata, setmovdata] = useState([]);
  async function getDataFromAPI(apiURL, token) {
    try {
      const response = await fetch(apiURL, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await response.json();
      setmovdata(data);
    } catch (error) {
      console.error(error);
    }
  }

  const apiURL = "http://projects.raisonminds.com/api/data.json";
  const token = "k_sudl4l70";

  getDataFromAPI(apiURL, token);

  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className=" -m-4">
            {movdata?.genres?.map((genre) => {
              return (
                <div className=" flex  flex-col">
                  <h1 className="sm:text-3xl text-2xl -ml-2 font-medium title-font  text-gray-900">
                    {genre}
                  </h1>
                  <div className=" overflow-x-scroll space-x-6 p-6 flex flex-row ">
                    <section className="text-gray-700   body-font ">
                      <div className="container px-5 py-24 mx-auto">
                        <div className="flex flex-wrap -m-4">
                          {movdata?.movies
                            .filter((movie) => movie?.genres.includes(genre))
                            .map((movie) => {
                              return (
                                <Details
                                  image={movie?.posterUrl}
                                  description={movie?.plot}
                                  author={movie?.actors}
                                  hero={movie.director}
                                  title={movie?.title}
                                  publishedAt={movie?.year}
                                  runtime={movie?.runtime}
                                  key={movie?.urlToImage}
                                />
                              );
                            })}
                        </div>
                      </div>
                    </section>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
