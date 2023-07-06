import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

interface SearchBarProps {
  handleSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ handleSearch }) => {
  return (
    <span className="search-bar">
      <input
        type="text"
        className="search-bar__input"
        placeholder="Buscar..."
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleSearch(e.currentTarget.value);
          }
        }}
      />
      <FontAwesomeIcon icon={faSearch} className="search-bar__icon" />
    </span>
  );
};

export default SearchBar;
