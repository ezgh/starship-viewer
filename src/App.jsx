import { useState, useEffect } from "react";
import { client, getAllStarships } from "./lib/client";
import Header from "./components/Header";
import StarshipList from "./components/StarshipList";
import Button from "./components/Button";

function App() {
  const [starships, setStarships] = useState(null);
  const [next, setNext] = useState(null);

  useEffect(() => {
    getAllStarships()
      .then((response) => {
        // TODO: Check response is valid
        setStarships(response.data.results);
        setNext(response.data.next);
      })
      .catch((err) => console.error(err));
  }, []);

  const loadMoreStarships = () => {
    client
      .get(next)
      .then((response) => {
        starships.push(...response.data.results);
        setStarships(starships);
        setNext(response.data.next);
      })
      .catch((err) => console.error(err));
  };

  return (
    <main className="bg-gray-800">
      <Header />
      {/* TODO: Create layout and wrap with container */}
      <div>
        {starships ? (
          <StarshipList starships={starships} />
        ) : (
          <p className="text-2xl text-white mt-4 mx-auto text-center">
            Loading...
          </p>
        )}
        {next ? (
          <div className="grid w-screen place-items-center">
            <Button text="Load more" onClick={loadMoreStarships} />
          </div>
        ) : null}
      </div>
    </main>
  );
}

export default App;
