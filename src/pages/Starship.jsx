import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getStarshipById } from "../lib/client";
import DetailCard from "../components/DetailCard";

const Starship = () => {
  const [starship, setStarship] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    getStarshipById(params.id)
      .then((response) => {
        setStarship(response.data);
      })
      .catch((err) => {
        setError(err);
      });
  }, []);

  const params = useParams();
  return (
    <main className="grid h-screen">
      {error ? (
        <p class="text-center text-white text-xl place-items-center mt-10">
          Error, starship with {params.id} id is not found.
        </p>
      ) : (
        <DetailCard route={`/starships/${params.id}/`} starship={starship} />
      )}
    </main>
  );
};

export default Starship;
