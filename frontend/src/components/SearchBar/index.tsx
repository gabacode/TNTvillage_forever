import { Dispatch, SetStateAction, useState } from "react";
import { useSearch } from "../../hooks";
import { Record } from "../../types";

interface Props {
  setResults: Dispatch<SetStateAction<Record[]>>;
}

export const SearchBar = ({ setResults }: Props) => {
  const [query, setQuery] = useState("");

  const { handleSearch } = useSearch({ query, setResults });

  return (
    <form className="form-inline my-4" onSubmit={handleSearch}>
      <div className="d-flex">
        <input
          type="text"
          className="form-control me-2"
          spellCheck="false"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Cerca..."
        />
        <button className="btn btn-success" type="submit">
          Vai
        </button>
      </div>
    </form>
  );
};

