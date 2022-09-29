import { useState, useEffect } from "react";
import { client, getAllStarships } from "../lib/client";
import StarshipList from "../components/StarshipList";
import Button from "../components/Button";

const Home = () => {
  const [starships, setStarships] = useState(null);
  const [next, setNext] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    getAllStarships()
      .then((response) => {
        setStarships(response.data.results);
        setNext(response.data.next);
      })
      .catch((err) => {
        setError(err);
      });
  }, [error]);

  const loadMoreStarships = () => {
    client.get(next).then((response) => {
      starships.push(...response.data.results);
      setStarships(starships);
      setNext(response.data.next);
    });
  };

  return (
    <div>
      {error ? (
        <p className="grid h-screen text-3xl text-white mt-4 mx-auto text-center">
          Error happened with the API.
        </p>
      ) : (
        <StarshipList starships={starships} />
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
    </div>
  );
};

export default Home;
