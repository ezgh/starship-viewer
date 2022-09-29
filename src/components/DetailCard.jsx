import { useNavigate } from "react-router-dom";
import { getStarshipImageByRoute, isActualNumber } from "../lib/services";
import Button from "./Button";

const DetailCard = ({ route, starship }) => {
  const navigate = useNavigate();
  const image = getStarshipImageByRoute(route);
  return (
    <div>
      {starship ? (
        <div className="relative bg-gray-800 py-8 lg:py-16">
          <div
            className="absolute inset-x-0 top-0 hidden h-1/2 bg-gray-800 lg:block"
            aria-hidden="true"
          />
          <div className="mx-auto max-w-7xl bg-gray-800 lg:bg-transparent lg:px-8">
            <div className="lg:grid lg:grid-cols-12">
              <div className="relative z-10 lg:col-span-4 lg:col-start-1 lg:row-start-1 lg:bg-transparent lg:py-16">
                <div
                  className="absolute inset-x-0 h-1/2 bg-gray-800 lg:hidden"
                  aria-hidden="true"
                />
                <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:max-w-none lg:p-0">
                  <div className="aspect-w-10 aspect-h-6 sm:aspect-w-2 sm:aspect-h-1 lg:aspect-w-1">
                    <img
                      className="rounded-3xl object-cover object-center shadow-2xl"
                      src={image}
                      alt=""
                    />
                  </div>
                </div>
              </div>

              <div className="relative bg-gray-800 lg:col-span-10 lg:col-start-3 lg:row-start-1 lg:grid lg:grid-cols-10 lg:items-center lg:rounded-3xl lg:border-2 lg:border-starWarsYellow">
                <div
                  className="absolute inset-0 hidden overflow-hidden rounded-3xl lg:block"
                  aria-hidden="true"
                >
                  <svg
                    className="absolute bottom-full left-full translate-y-1/3 -translate-x-2/3 transform xl:bottom-auto xl:top-0 xl:translate-y-0"
                    width={404}
                    height={384}
                    fill="none"
                    viewBox="0 0 404 384"
                    aria-hidden="true"
                  >
                    <defs>
                      <pattern
                        id="64e643ad-2176-4f86-b3d7-f2c5da3b6a6d"
                        x={0}
                        y={0}
                        width={20}
                        height={20}
                        patternUnits="userSpaceOnUse"
                      >
                        <rect
                          x={0}
                          y={0}
                          width={4}
                          height={4}
                          className="text-gray-500"
                          fill="currentColor"
                        />
                      </pattern>
                    </defs>
                    <rect
                      width={404}
                      height={384}
                      fill="url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)"
                    />
                  </svg>
                  <svg
                    className="absolute top-full -translate-y-1/3 -translate-x-1/3 transform xl:-translate-y-1/2"
                    width={404}
                    height={384}
                    fill="none"
                    viewBox="0 0 404 384"
                    aria-hidden="true"
                  >
                    <defs>
                      <pattern
                        id="64e643ad-2176-4f86-b3d7-f2c5da3b6a6d"
                        x={0}
                        y={0}
                        width={20}
                        height={20}
                        patternUnits="userSpaceOnUse"
                      >
                        <rect
                          x={0}
                          y={0}
                          width={4}
                          height={4}
                          className="text-gray-500"
                          fill="currentColor"
                        />
                      </pattern>
                    </defs>
                    <rect
                      width={404}
                      height={384}
                      fill="url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)"
                    />
                  </svg>
                </div>
                <div className="relative max-w-md space-y-6 py-12 px-4 sm:max-w-3xl sm:py-16 sm:px-6 lg:col-span-6 lg:col-start-4 lg:max-w-none lg:p-0">
                  <h2 className="text-4xl font-bold tracking-tight text-white">
                    {starship.name}
                  </h2>
                  <h3 className="text-2xl font-bold tracking-tight text-white">
                    {starship.model}
                  </h3>
                  <ul className="text-xl text-white">
                    {isActualNumber(starship.passengers) ? (
                      <li>
                        Passengers:{" "}
                        <span className="font-extralight">
                          {starship.passengers}{" "}
                        </span>
                      </li>
                    ) : null}
                    {isActualNumber(starship.max_atmosphering_speed) ? (
                      <li>
                        Max Atmosphering Speed:{" "}
                        <span className="font-extralight">
                          {" "}
                          {starship.max_atmosphering_speed}{" "}
                        </span>
                      </li>
                    ) : null}
                    <li>
                      Manufacturer:
                      <span className="font-extralight">
                        {" "}
                        {starship.manufacturer}{" "}
                      </span>
                    </li>
                    <li>
                      Crew:{" "}
                      <span className="font-extralight"> {starship.crew} </span>
                    </li>
                    <li>
                      Cargo Capacity:
                      <span className="font-extralight">
                        {" "}
                        {starship.cargo_capacity}{" "}
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <span className="grid w-screen place-items-center">
            <Button
              text="Go back"
              onClick={() => navigate(-1)}
              classes={"my-6"}
            />
          </span>
        </div>
      ) : null}
    </div>
  );
};

export default DetailCard;
