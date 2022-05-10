import React, { useState, createContext } from "react";

export const ResultsContext = createContext({
  results: [],
  getResults: () => {},
  searchTerm: "",
  setSearchTerm: () => {},
  isLoading: false,
});

const options = {
  method: "GET",
  headers: {
    "X-User-Agent": "desktop",
    "X-Proxy-Location": "US",
    "X-RapidAPI-Host": "google-search3.p.rapidapi.com",
    "X-RapidAPI-Key": process.env.REACT_RAPID_API_KEY,
  },
};

const baseUrl = "https://google-search3.p.rapidapi.com/api/v1";

const ResultsContextProvider = ({ children }) => {
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("iphone");

  const getResults = async (type) => {
    setIsLoading(true);
    const response = await fetch(`${baseUrl}${type}`, options);
    const data = await response.json();

    if (type.includes("/news")) {
      setResults(data.entries);
    } else if (type.includes("/image")) {
      setResults(data.image_results);
    } else if (type.includes("/video")) {
      setResults(data.entries);
    } else {
      setResults(data.results);
    }

    setIsLoading(false);
  };

  return (
    <ResultsContext.Provider
      value={{ results, isLoading, searchTerm, setSearchTerm, getResults }}
    >
      {children}
    </ResultsContext.Provider>
  );
};

export default ResultsContextProvider;
