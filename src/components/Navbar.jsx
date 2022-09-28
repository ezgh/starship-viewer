import { Link } from "react-router-dom";
import { Disclosure } from "@headlessui/react";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";

export default function Navbar() {
  return (
    <Disclosure as="header" className="bg-gray-800">
      <>
        <div className="mx-auto max-w-7xl px-2 sm:px-4 lg:divide-y lg:divide-gray-700 lg:px-8">
          <div className="relative flex h-16 justify-between">
            <div className="relative z-10 flex px-2 lg:px-0">
              <div className="flex flex-shrink-0 items-center">
                <Link to="/">
                  <img
                    className="block h-8 w-auto"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Star_Wars_Yellow_Logo.svg/1268px-Star_Wars_Yellow_Logo.svg.png?20140504224300"
                    alt="Your Company"
                  />
                </Link>
              </div>
            </div>
            <div className="relative z-0 flex flex-1 items-center justify-center px-2 sm:absolute sm:inset-0">
              <div className="w-full sm:max-w-xs">
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
                    name="search"
                    className="block w-full rounded-md border border-transparent bg-gray-700 py-2 pl-10 pr-3 text-sm placeholder-gray-400 focus:border-white focus:bg-white focus:text-gray-900 focus:placeholder-gray-500 focus:outline-none focus:ring-white sm:text-sm"
                    placeholder="Search"
                    type="search"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    </Disclosure>
  );
}
