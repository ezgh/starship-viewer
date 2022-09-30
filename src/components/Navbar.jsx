import { useState, useEffect } from "react";
import { Link, useSearchParams, useNavigate } from "react-router-dom";
import { Disclosure } from "@headlessui/react";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";

export default function Navbar() {
  const navigate = useNavigate();

  const [searchParams] = useSearchParams();
  const searchParamTerm = searchParams.get("term") || "";
  const [term, setTerm] = useState(searchParamTerm);

  useEffect(() => {
    setTerm(searchParamTerm);
  }, [searchParamTerm]);

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/search?term=${term}`);
  };

  return (
    <Disclosure
      as="header"
      className="bg-zinc-800"
      style={{
        backgroundImage: "url(/images/stardust.png)",
      }}
    >
      <>
        <div className="mx-auto max-w-7xl px-2 sm:px-4 lg:divide-y lg:divide-gray-700 lg:px-8">
          <div className="relative flex h-16 justify-between">
            <div className="relative z-10 flex px-2 lg:px-0">
              <div className="flex flex-shrink-0 items-center">
                <Link to="/">
                  <img
                    className="block h-12 w-auto py-1"
                    src="/images/logo.png"
                    alt="Star Wars Logo"
                  />
                </Link>
              </div>
            </div>
            <div className="relative z-0 flex flex-1 items-center justify-center px-2 sm:absolute sm:inset-0">
              <div className="w-full sm:max-w-xs">
                <form action="#" onSubmit={handleSearch}>
                  <label htmlFor="search" className="sr-only">
                    Search
                  </label>
                  <div className="relative">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                      <MagnifyingGlassIcon
                        className="h-5 w-5 text-gray-400"
                        aria-hidden="true"
                      />
                    </div>
                    <input
                      id="search"
                      name="term"
                      className="block w-full rounded-md border border-transparent bg-zinc-700 py-2 pl-10 pr-3 text-white text-sm placeholder-gray-400 focus:border-white focus:bg-white focus:text-gray-900 focus:placeholder-gray-500 focus:outline-none focus:ring-white sm:text-sm"
                      placeholder="Search"
                      type="search"
                      value={term}
                      onChange={(e) => setTerm(e.target.value)}
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </>
    </Disclosure>
  );
}
