import { useEffect, useState } from "react";
import StarRating from "../components/StarRating";
import Loader from "./Loader";

const KEY = "5fee00cf";

const SelectedMovie = ({ selectedId, onCloseMovie, onAddWatched }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [movie, setMovie] = useState({});
  const [userRating, setUserRating] = useState(0);

  const {
    Title: title,
    Year: year,
    Poster: poster,
    Runtime: runtime,
    imdbRating,
    Plot: plot,
    Released: released,
    Genre: genre,
    Actors: actors,
    Director: director,
  } = movie;

  // Handle adding the movie to the watched list
  function handleAdd() {
    const newWatchedMovie = {
      imdbID: selectedId,
      title,
      year,
      poster,
      imdbRating: Number(imdbRating),
      runtime: runtime ? Number(runtime.split(" ").at(0)) : 0, // Safely handle runtime
      userRating,
    };

    onAddWatched(newWatchedMovie);
    onCloseMovie();
  }

  // Fetch movie details on component mount
  useEffect(() => {
    async function getMovieDetails() {
      try {
        const res = await fetch(
          `http://www.omdbapi.com/?apikey=${KEY}&i=${selectedId}`
        );
        const data = await res.json();
        setMovie(data);
        setIsLoading(false);
      } catch (error) {
        console.error("Failed to fetch movie details:", error);
        setIsLoading(false);
      }
    }
    getMovieDetails();
  }, [selectedId]);

  return (
    <div className="details">
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <header>
            <button className="btn-back" onClick={onCloseMovie}>
              &larr;
            </button>
            <img src={poster} alt={`Poster of ${title} movie`} />
            <div className="details-overview">
              <h2 className="title">{title}</h2>
              <p>
                {released} &bull; {runtime || "N/A"}{" "}
                {/* Handle undefined runtime */}
              </p>
              <p>{genre}</p>
              <p>
                <span></span>
                {imdbRating ? imdbRating : "N/A"} IMDb rating {/* Handle NaN */}
              </p>
            </div>
          </header>
          <section>
            <div className="rating">
              <StarRating
                maxRating={10}
                size={24}
                onSetRating={setUserRating} // Capture user rating
              />
              <button className="btn-add" onClick={handleAdd}>
                Add to list
              </button>
            </div>
            <p>
              <em>{plot}</em>
            </p>
            <p>Starring {actors}</p>
            <p>Directed by {director}</p>
          </section>
        </>
      )}
    </div>
  );
};

export default SelectedMovie;
