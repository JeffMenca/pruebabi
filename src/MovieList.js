import React, { useState } from "react";
import axios from "axios";

const MovieList = () => {
  const fetchMovies = async () => {
    let year = document.querySelector("input").value;
    try {
      const response = await axios.get(
        `https://jsonmock.hackerrank.com/api/movies?Year=${year}`
      );
      setMovies(response.data.data);
      console.log(response.data.data);
    } catch (error) {
    }
  };
  const [movies, setMovies] = useState([]);

  return (
    <div className=" h-full">
      <header className="App-header">
        <div class="layout-column align-items-center mt-50">
          <section className="flex justify-center">
            <input
              type="number"
              className="bg-gray-200 px-6 py-2 text-center rounded-md mr-6"
              placeholder="Enter Year eg 2015"
              data-test-id="app-input"
            />
            <button
              className="bg-green-500 px-6 py-2 text-center rounded-md text-white"
              data-test-id="submit-button"
              onClick={fetchMovies}
            >
              Search
            </button>
          </section>

          <ul class="mt-50 styled" data-test-id="movieList">
            {movies.length > 0 &&
              movies.map((movie) => (
                <li className="border-solid border-2 border-gray-100 py-4 shadow-md my-6" key={movie.imdbID}>
                  {movie.Title}
                </li>
              ))}

            {movies.length === 0 && (
              <li class="slide-up-fade-in py-10">No results found</li>
            )}
          </ul>

          <div class="mt-50 slide-up-fade-in" data-test-id="no-result"></div>
        </div>
      </header>
    </div>
  );
};

export default MovieList;
