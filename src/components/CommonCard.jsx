import { Link } from "react-router-dom";
import { getStarshipImageByRoute } from "../lib/services";

const CommonCard = ({ url, name, model, hyperdriveRating }) => {
  let starshipRoute = "";
  if (url.startsWith("https://swapi.dev/api"))
    starshipRoute = url.split("https://swapi.dev/api")[1];

  const image = getStarshipImageByRoute(starshipRoute);

  return (
    <li className="m-5 p-5">
      <Link
        to={starshipRoute}
        className="relative block overflow-hidden bg-center bg-no-repeat bg-cover rounded-xl h-72  "
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className="relative px-8 pt-40 pb-40 text-white bg-black group bg-opacity-40 hover:bg-opacity-0">
          <h5 className="text-2xl lg:text-3xl font-bold">{name}</h5>
          <p className="text-md lg:text-lg">{model}</p>
          <p className="text-sm font-medium tracking-widest text-pink-500">
            Hyperdrive Rating: {hyperdriveRating}
          </p>
          <h3 className="opacity-0 absolute text-2xl text-starWarsYellow font-bold top-5 right-5 group-hover:opacity-80">
            Learn more
          </h3>
        </div>
      </Link>
    </li>
  );
};

export default CommonCard;
