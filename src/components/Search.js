import React from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
function Search() {
  return (
    <div>
      <div className="flex items-center border bg-light-green border-gray-300 p-2 rounded-md w-2/4">
        <MagnifyingGlassIcon className="h-5 w-5 text-gray-400 mr-2 " />
        <input
          type="text"
          placeholder="Search"
          className="outline-none focus:outline-none border-none bg-light-green w-full"
        />
      </div>
    </div>
  );
}

export default Search;
