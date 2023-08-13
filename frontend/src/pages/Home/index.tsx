import { useState } from "react";
import { Record } from "../../types";
import { Results } from "../../components/organisms/Results";
import { SearchBar } from "../../components/molecules/SearchBar";
import { Wrapper } from "../../components/templates/Wrapper";

export const Home = () => {
  const [results, setResults] = useState<Record[]>([]);
  return (
    <Wrapper>
      <SearchBar setResults={setResults} />
      <Results results={results} />
    </Wrapper>
  );
};

