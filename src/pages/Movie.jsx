import { useParams, Link } from "react-router-dom";
import { movies } from "../data/movies";
import { actors } from "../data/actors";

export default function Movie() {
  const { movieId } = useParams();
  const movie = movies.find((m) => parseInt(movieId) === m.id);

  if (!movie) {
    return <h1>Movie not found!</h1>;
  }

  return (
    <>
      <h1>{movie.title}</h1>
      <img src={movie.image} alt={movie.title} />
      <h2>{movie.tagline}</h2>
      <ul>
        {movie.cast.map((castMember) => {
          const actor = actors.find((a) => a.id === castMember.id);
          return (
            <li key={castMember.id}>
              <Link to={`/actors/${actor.id}`}>{actor.name}</Link> as{" "}
              {castMember.character}
            </li>
          );
        })}
      </ul>
    </>
  );
}
