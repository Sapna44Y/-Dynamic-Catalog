import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import ItemCard from "../components/ItemCard";
import catalogData from "../data/data.json";
import "./CategoryPage.css";

const CategoryPage = () => {
  const { categoryName } = useParams();
  const navigate = useNavigate();
  const [categoryItems, setCategoryItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sortBy, setSortBy] = useState("name");
  const [viewMode, setViewMode] = useState("grid");

  useEffect(() => {
    // Filter items by category
    const filtered = catalogData.filter(
      (item) => item.category.toLowerCase() === categoryName?.toLowerCase(),
    );
    setCategoryItems(filtered);
    setLoading(false);
  }, [categoryName]);

  const handleSort = (criteria) => {
    setSortBy(criteria);
    const sorted = [...categoryItems];
    if (criteria === "name") {
      sorted.sort((a, b) => a.itemname.localeCompare(b.itemname));
    } else if (criteria === "props") {
      sorted.sort((a, b) => b.itemprops.length - a.itemprops.length);
    }
    setCategoryItems(sorted);
  };

  const getCategoryIcon = () => {
    switch (categoryName?.toLowerCase()) {
      case "cars":
        return "🚗";
      case "bikes":
        return "🏍️";
      case "phones":
        return "📱";
      case "computers":
        return "💻";
      default:
        return "📦";
    }
  };

  const getCategoryTitle = () => {
    return categoryName
      ? categoryName.charAt(0).toUpperCase() + categoryName.slice(1)
      : "Category";
  };

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loader"></div>
        <p>Loading category...</p>
      </div>
    );
  }

  return (
    <div className="category-page">
      <div className="container">
        <div className="category-header-page">
          <button className="back-button-page" onClick={() => navigate("/")}>
            ← Back to Home
          </button>
          <div className="category-info">
            <div className="category-icon-page">{getCategoryIcon()}</div>
            <div>
              <h1 className="category-title-page">{getCategoryTitle()}</h1>
              <p className="category-description">
                {categoryItems.length}{" "}
                {categoryItems.length === 1 ? "product" : "products"} available
              </p>
            </div>
          </div>

          <div className="controls">
            <div className="sort-controls">
              <label>Sort by:</label>
              <select
                value={sortBy}
                onChange={(e) => handleSort(e.target.value)}
              >
                <option value="name">Name</option>
                <option value="props">Number of Specs</option>
              </select>
            </div>

            <div className="view-controls">
              <button
                className={`view-btn ${viewMode === "grid" ? "active" : ""}`}
                onClick={() => setViewMode("grid")}
              >
                ⊞ Grid
              </button>
              <button
                className={`view-btn ${viewMode === "list" ? "active" : ""}`}
                onClick={() => setViewMode("list")}
              >
                ☰ List
              </button>
            </div>
          </div>
        </div>

        {categoryItems.length === 0 ? (
          <div className="no-items">
            <div className="no-items-icon">🔍</div>
            <h3>No items found in this category</h3>
            <button onClick={() => navigate("/")}>
              Browse Other Categories
            </button>
          </div>
        ) : (
          <div className={`items-container ${viewMode}`}>
            {categoryItems.map((item, index) => (
              <div key={`${item.itemname}-${index}`} className="item-wrapper">
                <ItemCard item={item} />
              </div>
            ))}
          </div>
        )}

        <div className="stats-footer">
          <p>
            Showing all {categoryItems.length} items in {getCategoryTitle()}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;
