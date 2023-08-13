import { useState } from "react";
import { Record } from "../../types";
import { Results } from "../Results";
import { SearchBar } from "../SearchBar";
import { Wrapper } from "../Wrapper";

export const Home = () => {
  const [results, setResults] = useState<Record[]>([]);
  return (
    <Wrapper>
      <SearchBar setResults={setResults} />
      <Results results={results} />
    </Wrapper>
  );
};

