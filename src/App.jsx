import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
// import Search from "./Search";
import Search from "./components/Search";
import NumResult from "./components/NumResult";

import Box from "./components/Box";

import MovieList from "./components/MovieList";

import WatchedSummery from "./components/WatchedSummery";
import WatchedMovieList from "./components/WatchedMovieList";
import Loader from "./components/Loader";
import ErrorMessage from "./components/Error";
import SelectedMovie from "./components/SelectedMovie";

const KEY = "5fee00cf";
export default function App() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const [watched, setWatched] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [selectedId, setSelectedId] = useState(null);

  const handleSelectedMovie = (id) => {
    setSelectedId((selectedId) => (id === selectedId ? null : id));
  };
  const handleCloseMovie = () => {
    setSelectedId(null);
  };

  const handleAddWatchedMovie = (movie) => {
    setWatched([(watched) => [...watched, movie]]);
  };
  useEffect(
    function () {
      // const controller = new AbortController();

      async function fetchMovies() {
        try {
          setIsLoading(true);
          setError("");

          const res = await fetch(
            `http://www.omdbapi.com/?apikey=${KEY}&s=${query}`
            // { signal: controller.signal }
          );

          if (!res.ok)
            throw new Error("Something went wrong with fetching movies");

          const data = await res.json();
          if (data.Response === "False") throw new Error("Movie not found");

          setMovies(data.Search);
          setError("");
        } catch (err) {
          // if (err.name !== "AbortError") {
          //   console.log(err.message);
          //   setError(err.message);
          // }
          console.log(err.message);
          setError(err.message);
        } finally {
          setIsLoading(false);
        }
      }

      if (query.length < 3) {
        setMovies([]);
        setError("");
        return;
      }

      fetchMovies();

      // return function () {
      //   controller.abort();
      // };
    },
    [query]
  );
  return (
    <>
      <Navbar>
        <Search query={query} setQuery={setQuery} />
        <NumResult movies={movies} />
      </Navbar>
      <Main>
        {/* Second Version of prop drilling */}
        {/* <Box element={<MovieList movies={movies} />} />
        <Box
          element={
            <>
              <WatchedSummery watched={watched} />
              <WatchedMovieList watched={watched} />
            </>
          }
        /> */}
        <Box>
          {isLoading && <Loader />}
          {!isLoading && !error && (
            <MovieList movies={movies} onSelectedMovie={handleSelectedMovie} />
          )}
          {error && <ErrorMessage message={error} />}
        </Box>
        <Box>
          {isLoading && <Loader />}

          {selectedId ? (
            <SelectedMovie
              selectedId={selectedId}
              onCloseMovie={handleCloseMovie}
              onAddWatched={handleAddWatchedMovie}
            />
          ) : (
            <>
              <WatchedSummery watched={watched} />
              <WatchedMovieList watched={watched} />
            </>
          )}
        </Box>
      </Main>
    </>
  );
}
