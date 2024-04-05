import React from "react";
import { FaSearch } from "react-icons/fa";

function SearchInput() {
  return (
    <form className="flex items-center gap-2">
      <input
        type="text"
        placeholder="search..."
        className="w-full p-2 text-white bg-gray-900 border border-gray-300 rounded-full focus:bg-black focus:border-blue-500 focus:outline-dotted focus:ring-2 focus:ring-blue-500"
      ></input>
      <button className="p-2 m-2 text-white bg-gray-900 border border-gray-500 rounded-full hover:bg-blue-500 hover:border-gray-900 hover:ring-2 hover:outline-dotted hover:outline-purple-300">
      <FaSearch  className="w-6 h-6 outline-none" />
        </button>
    </form>
  );
}

export default SearchInput;
