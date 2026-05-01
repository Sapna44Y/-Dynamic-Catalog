import { useNavigate } from "react-router-dom";
import "./ItemCard.css";

const ItemCard = ({ item }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/item/${encodeURIComponent(item.itemname)}`, { state: { item } });
  };

  // Get first 2 properties for preview
  const previewProps = item.itemprops.slice(0, 2);

  return (
    <div className="item-card" onClick={handleClick}>
      <div className="card-image-container">
        <img
          src={item.image}
          alt={item.itemname}
          className="card-image"
          onError={(e) => {
            e.target.src = "https://via.placeholder.com/300x200?text=No+Image";
          }}
        />
      </div>
      <div className="card-content">
        <h3 className="item-name">{item.itemname}</h3>
        <div className="preview-props">
          {previewProps.map((prop, idx) => (
            <div key={idx} className="preview-prop">
              <span className="prop-label">{prop.label}:</span>
              <span className="prop-value">{prop.value}</span>
            </div>
          ))}
          {item.itemprops.length > 2 && (
            <div className="more-indicator">
              +{item.itemprops.length - 2} more
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
