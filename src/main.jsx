import React from "react";
import ReactDOM from "react-dom/client";
// import StarRating from "./components/StarRating";
import App from "./App.jsx";
import "./index.css";

// const Test = () => {
//   const [movieRating, setMovieRating] = useState(0);
//   return (
//     <div>
//       <StarRating
//         color="orange"
//         maxRating={10}
//         onSetMovieRating={setMovieRating}
//       />
//       <p>{movieRating}</p>
//     </div>
//   );
// };

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
    {/* <StarRating
      maxRating={5}
      messages={["Terrible", "Bad", "Okay", "Good", "Amazing"]}
      className="test"
    />
    <StarRating maxRating={5} color="red" defaultRating={3} /> */}
    {/* <Test /> */}
  </React.StrictMode>
);
