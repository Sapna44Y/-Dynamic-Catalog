import { useState, useEffect } from "react";
import "./SearchBar.css";

const SearchBar = ({ items, onSearchResults }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [resultCount, setResultCount] = useState(0);

  useEffect(() => {
    if (searchTerm.trim() === "") {
      onSearchResults(null);
      setIsSearching(false);
      return;
    }

    setIsSearching(true);
    const timeoutId = setTimeout(() => {
      const filtered = items.filter(
        (item) =>
          item.itemname.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.category.toLowerCase().includes(searchTerm.toLowerCase()),
      );
      onSearchResults(filtered);
      setResultCount(filtered.length);
      setIsSearching(false);
    }, 300);

    return () => clearTimeout(timeoutId);
  }, [searchTerm, items, onSearchResults]);

  return (
    <div className="search-container">
      <div className="search-wrapper">
        <div className="search-icon">🔍</div>
        <input
          type="text"
          className="search-input"
          placeholder="Search products by name or category..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        {searchTerm && (
          <button className="search-clear" onClick={() => setSearchTerm("")}>
            ✕
          </button>
        )}
      </div>
      {isSearching && (
        <div className="search-loading">
          <div className="search-loader"></div>
        </div>
      )}
      {searchTerm && !isSearching && (
        <div className="search-stats">
          Found {resultCount} {resultCount === 1 ? "result" : "results"} for "
          {searchTerm}"
        </div>
      )}
    </div>
  );
};

export default SearchBar;
