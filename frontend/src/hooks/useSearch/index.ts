import { Dispatch, FormEvent, SetStateAction } from "react";
import axios from "axios";
import { Record } from "../../types";

interface SearchProps {
  query: string;
  setResults: Dispatch<SetStateAction<Record[]>>;
}

export const useSearch = ({ query, setResults }: SearchProps) => {
  const endpoint = "http://localhost:5001";
  const handleSearch = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios.get(`${endpoint}/search?q=${query}`);
      setResults(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  return { handleSearch };
};

