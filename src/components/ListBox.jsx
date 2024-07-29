import { useState } from "react";
import MovieList from "./MovieList";
import Button from "./Button";

const ListBox = ({ tempMovieData }) => {
  // eslint-disable-next-line no-unused-vars
  const [movies, setMovies] = useState(tempMovieData);
  const [isOpen1, setIsOpen1] = useState(true);

  return (
    <div className="box">
      <Button onOpen={setIsOpen1}>{isOpen1 ? "–" : "+"}</Button>
      {isOpen1 && <MovieList movies={movies} />}
    </div>
  );
};

export default ListBox;
