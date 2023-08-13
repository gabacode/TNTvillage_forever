import { useState } from "react";
import { Record } from "../types";
import { Results } from "./Results";
import { SearchBar } from "./SearchBar";

export const Home = () => {
  const [results, setResults] = useState<Record[]>([]);
  return (
    <div className="container">
      <SearchBar setResults={setResults} />
      <Results results={results} />
    </div>
  );
};

