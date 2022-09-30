import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { client, searchStarship } from "../lib/client";

import StarshipList from "../components/StarshipList";
import Button from "../components/Button";

const Search = () => {
  const [searchParams] = useSearchParams();
  const term = searchParams.get("term");
  if (!term || !term.trim().length)
    return (
      <div className="grid h-screen text-white text-center mt-10">
        Search term cannot be empty.
      </div>
    );

  const [starships, setStarships] = useState(null);
  const [next, setNext] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    searchStarship(term).then((response) => {
      setStarships(response.data.results);
      setNext(response.data.next);
      setLoading(false);
    });
  }, [term]);

  const loadMoreStarships = () => {
    client.get(next).then((response) => {
      starships.push(...response.data.results);
      setStarships(starships);
      setNext(response.data.next);
    });
  };

  // Custom class to eliminate white background
  const spanClass = starships?.length > 5 ? "" : "grid h-screen";

  return (
    <main>
      {!loading && !starships.length ? (
        <p className="grid h-screen text-white text-center mt-10">
          No results.
        </p>
      ) : (
        <span className={spanClass}>
          <StarshipList starships={starships} />
        </span>
      )}
      {next ? (
        <div className="grid w-screen place-items-center">
          <Button
            text="Load more"
            onClick={loadMoreStarships}
            classes={"mb-10 items-center"}
          />
        </div>
      ) : null}
    </main>
  );
};

export default Search;
