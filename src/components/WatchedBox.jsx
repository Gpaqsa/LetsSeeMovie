import { useState } from "react";
import Button from "./Button";

const WatchedBox = ({ children }) => {
  const [isOpen2, setIsOpen2] = useState(true);

  return (
    <div className="box">
      <Button onOpen={setIsOpen2}>{isOpen2 ? "–" : "+"}</Button>
      {isOpen2 && <>{children}</>}
    </div>
  );
};

export default WatchedBox;
