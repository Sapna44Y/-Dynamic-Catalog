import ItemCard from "./ItemCard";
import "./CategorySection.css";

const CategorySection = ({ category, items }) => {
  // Show only first 4 items as preview
  const previewItems = items.slice(0, 4);

  return (
    <section className="category-section">
      <div className="category-header">
        <div className="category-title-wrapper">
          <div className="category-icon">
            {category === "Cars" && "🚗"}
            {category === "Bikes" && "🏍️"}
            {category === "Phones" && "📱"}
            {category === "Computers" && "💻"}
          </div>
          <h2 className="category-title">{category}</h2>
        </div>
        <div className="category-stats">
          {items.length} {items.length === 1 ? "item" : "items"}
        </div>
      </div>
      <div className="items-grid">
        {previewItems.map((item, index) => (
          <ItemCard key={`${item.itemname}-${index}`} item={item} />
        ))}
      </div>
      {items.length > 4 && (
        <div className="view-more">
          <span className="view-more-text">
            +{items.length - 4} more items in this category
          </span>
        </div>
      )}
    </section>
  );
};

export default CategorySection;
