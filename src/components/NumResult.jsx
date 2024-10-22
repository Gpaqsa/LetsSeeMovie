
const NumResult = ({ movies }) => {
  // console.log(movies);
  return (
    <p className="num-results">
      Found <strong>{movies.length}</strong> results
    </p>
  );
};

export default NumResult
