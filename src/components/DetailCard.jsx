import { isActualNumber } from "../lib/services";

const DetailCard = ({ starship }) => {
  return (
    <div>
      {starship ? (
        <section className="container mx-auto p-10 md:p-20 antialiased ">
          <article className=" flex flex-wrap md:flex-nowrap shadow-lg mx-auto max-w-3xl group transform duration-500 hover:-translate-y-1">
            <img
              className="w-full md:w-52"
              src="https://i.ibb.co/Kr4b0zJ/152013403-10158311889099633-8423107287930246533-o.jpg"
              alt=""
            />
            <div className="bg-white">
              <div className="p-5 pb-10">
                <h1 className="text-2xl font-semibold text-gray-800 mt-4">
                  {starship.name}
                </h1>
                <h1 className="text-xl font-semibold text-gray-800">
                  {starship.model}
                </h1>
                <p className="text-xl text-gray-400 mt-2 leading-relaxed">
                  {isActualNumber(starship.passengers) ? (
                    <span>
                      The passenger capacity is {starship.passengers}.{" "}
                    </span>
                  ) : null}
                  {isActualNumber(starship.max_atmosphering_speed) ? (
                    <span>
                      The max athmosphering speed is{" "}
                      {starship.max_atmosphering_speed}.
                    </span>
                  ) : null}
                </p>
              </div>
              <div className="bg-blue-50 p-5">
                <div className="sm:flex sm:justify-between">
                  <div>
                    <div className="text-lg text-gray-700">
                      Manufactured by{" "}
                      <span className="text-gray-900 font-bold">
                        {" "}
                        {starship.manufacturer}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="mt-3 text-gray-600 text-sm md:text-sm">
                  Crew: {starship.crew} {" | "} Cargo Capacity:{" "}
                  {starship.cargo_capacity}
                </div>
              </div>
            </div>
          </article>
        </section>
      ) : null}
    </div>
  );
};

export default DetailCard;
