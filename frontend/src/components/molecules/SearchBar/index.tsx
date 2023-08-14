import { ChangeEvent, Dispatch, SetStateAction, useState } from "react";
import { useSearch } from "../../../hooks";
import { Record } from "../../../types";

interface Props {
  setResults: Dispatch<SetStateAction<Record[]>>;
}

export const SearchBar = ({ setResults }: Props) => {
  const [query, setQuery] = useState("");

  const handleSetQuery = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const { handleSearch } = useSearch({ query, setResults });

  return (
    <form className="form-inline my-4" onSubmit={handleSearch}>
      <div className="d-flex">
        <input
          type="text"
          className="form-control me-2"
          spellCheck="false"
          value={query}
          onChange={handleSetQuery}
          placeholder="Cerca release"
        />
        <button type="submit">Cerca</button>
      </div>
    </form>
  );
};

