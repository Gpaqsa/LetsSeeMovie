import { useState } from "react";
import Button from "./Button";
import WatchedSummery from "./WatchedSummery";
import WatchedMovieList from "./WatchedMovieList";

const WatchedBox = ({ tempWatchedData }) => {
  const [isOpen2, setIsOpen2] = useState(true);
  // eslint-disable-next-line no-unused-vars
  const [watched, setWatched] = useState(tempWatchedData);

  return (
    <div className="box">
      <Button onOpen={setIsOpen2}>{isOpen2 ? "–" : "+"}</Button>

      {isOpen2 && (
        <>
          <WatchedSummery watched={watched} />

          <WatchedMovieList watched={watched} />
        </>
      )}
    </div>
  );
};

export default WatchedBox;