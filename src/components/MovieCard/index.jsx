import { Link } from "react-router-dom";

export default function MovieCard({ movie }) {
  return (
    <div>
      <img src={movie.thumbnail} alt={movie.title} />
      <Link to={`/movies/${movie.id}`}>
        <h2>{movie.title}</h2>
      </Link>
      <p>{movie.tagline}</p>
    </div>
  );
}
