import "./Actors.css";
import { Link, useSearchParams } from "react-router-dom";
import { actors } from "../data/actors";

export default function Actors() {
  const [query, setQuery] = useSearchParams();
  const sort = query.get("sort") || "name";

  const sortedActors = actors.toSorted((a, b) => {
    if (sort === "popularity") {
      return b.popularity - a.popularity;
    } else {
      return a.name.localeCompare(b.name);
    }
  });

  return (
    <>
      <h1>Actors</h1>
      <div className="sort-section">
        <button
          className={sort === "name" ? "sort-active" : null}
          onClick={() => {
            setQuery({ sort: "name" });
          }}
        >
          By name
        </button>
        <button
          className={sort === "popularity" ? "sort-active" : null}
          onClick={() => {
            setQuery({ sort: "popularity" });
          }}
        >
          By popularity
        </button>
      </div>
      <ul>
        {sortedActors.map((actor) => {
          return (
            <li key={actor.id}>
              <img src={actor.image} alt={actor.name} />
              <Link to={actor.id.toString()}>
                <h2>{actor.name}</h2>
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}
