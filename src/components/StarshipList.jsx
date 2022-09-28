import CommonCard from "./CommonCard";

const StarshipList = ({ starships }) => {
  return (
    <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {starships
        ? starships.map((starship) => (
            <CommonCard
              key={starship.url}
              url={starship.url}
              name={starship.name}
              model={starship.model}
              hyperdriveRating={starship.hyperdrive_rating}
            />
          ))
        : null}
    </ul>
  );
};

export default StarshipList;
