import { useParams, Link } from "react-router-dom";
import { actors } from "../data/actors";
import { movies } from "../data/movies";

export default function Actor() {
  const { actorId } = useParams();
  const actor = actors.find((a) => a.id === parseInt(actorId));
  if (!actor) return <h1>Actor not found!</h1>;
  const moviesWithActor = movies.filter((movie) => {
    return (
      movie.cast.findIndex(
        (castMember) => castMember.id === parseInt(actorId)
      ) >= 0
    );
  });

  return (
    <>
      <h1>{actor.name}</h1>
      <img src={actor.image} alt={actor.name} />
      <h2>Popularity: {actor.popularity}</h2>
      <h2>Movies</h2>
      <ul>
        {moviesWithActor.map((movie) => {
          return (
            <li key={movie.id}>
              <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}
