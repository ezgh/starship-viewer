import { Link } from "react-router-dom";

const CommonCard = ({ url, name, model, hyperdriveRating }) => {
  let starshipRoute = "";
  if (url.startsWith("https://swapi.dev/api"))
    starshipRoute = url.split("https://swapi.dev/api")[1];
  return (
    <li className="m-5 p-5 group">
      <Link
        to={starshipRoute}
        className="relative block overflow-hidden bg-center bg-no-repeat bg-cover rounded-xl h-72 bg-[url(https://images.unsplash.com/photo-1552832230-c0197dd311b5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1592&q=80)]"
      >
        <div className="relative p-8 pt-40 text-white bg-black bg-opacity-40 hover:bg-opacity-0">
          <h5 className="text-2xl lg:text-3xl font-bold">{name}</h5>
          <p className="text-md lg:text-lg">{model}</p>
          <p className="text-sm font-medium tracking-widest text-pink-500">
            Hyperdrive Rating: {hyperdriveRating}
          </p>
          <h3 className="opacity-0 absolute text-2xl text-white font-bold bottom-5 right-5 group-hover:opacity-100">
            Learn more
          </h3>
        </div>
      </Link>
    </li>
  );
};

export default CommonCard;
