import { useState } from "react";
import MovieList from "./MovieList";
import Button from "./Button";

const ListBox = ({ movies }) => {
  // console.log(movies);
  const [isOpen1, setIsOpen1] = useState(true);

  return (
    <div className="box">
      <Button onOpen={setIsOpen1}>{isOpen1 ? "–" : "+"}</Button>
      {isOpen1 && <MovieList movies={movies} />}
    </div>
  );
};

export default ListBox;
