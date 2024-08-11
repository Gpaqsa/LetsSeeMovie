import { useState } from "react";
import Button from "./Button";

const ListBox = ({ children }) => {
  const [isOpen1, setIsOpen1] = useState(true);

  return (
    <div className="box">
      <Button onOpen={setIsOpen1}>{isOpen1 ? "–" : "+"}</Button>
      {isOpen1 && children}
    </div>
  );
};

export default ListBox;
