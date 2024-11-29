import MovieCard from "../components/MovieCard";
import { movies } from "../data/movies";

export default function Movies() {
  return (
    <>
      <h1>Movies</h1>
      <ul>
        {movies.map((movie) => {
          return (
            <li key={movie.id}>
              <MovieCard movie={movie} />
            </li>
          );
        })}
      </ul>
    </>
  );
}
