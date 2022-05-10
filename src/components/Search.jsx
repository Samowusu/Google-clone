import React, { useState, useEffect, useContext } from "react";
import Links from "./Links";
import { useDebounce } from "use-debounce";
import { ResultsContext } from "../context/ResultsContextProvider";

const Search = () => {
  const [textState, setTextState] = useState("Elon Musk");
  const { setSearchTerm } = useContext(ResultsContext);
  const [debouncedValue] = useDebounce(textState, 300);

  useEffect(() => {
    if (debouncedValue) setSearchTerm(debouncedValue);
  }, [debouncedValue]);

  return (
    <div className="relative sm:ml-48 md:ml-72 sm:-mt-10 mt-3">
      <input
        value={textState}
        type="text"
        className="sm:w-96 w-80 h-10 dark:bg-gray-200 border rounded-full shadow-sm outline-none p-6 text-black hover:shadow-lg"
        placeholder="Search Google or type URL"
        onChange={(e) => setTextState(e.target.value)}
      />
      {textState && (
        <button
          type="button"
          onClick={() => setTextState("")}
          className="absolute top-1.5 right-4 text-2xl text-gray-500"
        >
          X
        </button>
      )}
      <Links />
    </div>
  );
};

export default Search;
