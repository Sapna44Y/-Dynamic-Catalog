import { useState, useEffect } from "react";
import CategoryCarousel from "../components/CategoryCarousel";
import SearchBar from "../components/SearchBar";
import catalogData from "../data/data.json";
import "./HomePage.css";

const HomePage = () => {
  const [groupedData, setGroupedData] = useState({});
  const [filteredData, setFilteredData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [featuredItems, setFeaturedItems] = useState([]);

  useEffect(() => {
    // Group items by category
    const grouped = catalogData.reduce((acc, item) => {
      if (!acc[item.category]) {
        acc[item.category] = [];
      }
      acc[item.category].push(item);
      return acc;
    }, {});

    setGroupedData(grouped);

    // Get random featured items (first 6 items or random)
    const featured = [...catalogData]
      .sort(() => 0.5 - Math.random())
      .slice(0, 6);
    setFeaturedItems(featured);

    setLoading(false);
  }, []);

  const handleSearchResults = (results) => {
    if (results && results.length > 0) {
      const grouped = results.reduce((acc, item) => {
        if (!acc[item.category]) {
          acc[item.category] = [];
        }
        acc[item.category].push(item);
        return acc;
      }, {});
      setFilteredData(grouped);
    } else {
      setFilteredData(results === null ? null : {});
    }
  };

  const displayData = filteredData !== null ? filteredData : groupedData;
  const hasResults = Object.keys(displayData).length > 0;
  const totalItems = catalogData.length;

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loader"></div>
        <p>Loading catalog...</p>
      </div>
    );
  }

  return (
    <div className="homepage">
      <div className="container">
        <header className="hero-section">
          <h1 className="hero-title">Dynamic Multi-Category Catalog</h1>
          <p className="hero-subtitle">
            Explore our diverse collection of {totalItems} products across 4
            categories
          </p>
        </header>

        <SearchBar items={catalogData} onSearchResults={handleSearchResults} />

        {filteredData !== null && Object.keys(displayData).length === 0 ? (
          <div className="no-results">
            <div className="no-results-icon">🔍</div>
            <h3>No products found</h3>
            <p>Try searching with different keywords</p>
            <button onClick={() => handleSearchResults(null)}>
              Clear Search
            </button>
          </div>
        ) : (
          <>
            {/* Category Carousels */}
            {Object.entries(displayData).map(([category, items]) => (
              <CategoryCarousel
                key={category}
                category={category}
                items={items}
              />
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default HomePage;
