import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./ItemDetailPage.css";

const ItemDetailPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [item, setItem] = useState(location.state?.item);
  const [showShare, setShowShare] = useState(false);
  const [isImageFullscreen, setIsImageFullscreen] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    // If item is not passed via state, try to get from localStorage or fetch
    if (!item) {
      const cachedItem = localStorage.getItem("currentItem");
      if (cachedItem) {
        setItem(JSON.parse(cachedItem));
      } else {
        // Redirect to home if no item found
        navigate("/");
      }
    } else {
      // Cache the item for potential refresh
      localStorage.setItem("currentItem", JSON.stringify(item));
    }
  }, [item, navigate]);

  const handleShare = async () => {
    const shareData = {
      title: item.itemname,
      text: `Check out ${item.itemname} from ${item.category} category!`,
      url: window.location.href,
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else {
        await navigator.clipboard.writeText(window.location.href);
        setShowShare(true);
        setTimeout(() => setShowShare(false), 2000);
      }
    } catch (error) {
      console.error("Error sharing:", error);
    }
  };

  const toggleFullscreen = () => {
    setIsImageFullscreen(!isImageFullscreen);
  };

  if (!item) {
    return (
      <div className="error-container">
        <div className="error-content">
          <h2>Item not found</h2>
          <p>The item you're looking for doesn't exist or has been removed.</p>
          <button onClick={() => navigate("/")}>Go Back Home</button>
        </div>
      </div>
    );
  }

  return (
    <div className="detail-page">
      <div className="container">
        <div className="detail-card">
          <div className="detail-image-container">
            {!imageLoaded && (
              <div className="image-loader">
                <div className="loader-spinner"></div>
              </div>
            )}
            <img
              src={item.image}
              alt={item.itemname}
              className={`detail-image ${imageLoaded ? "loaded" : "loading"}`}
              onError={(e) => {
                e.target.src =
                  "https://via.placeholder.com/1200x600?text=Image+Not+Available";
                setImageLoaded(true);
              }}
              onLoad={() => setImageLoaded(true)}
              onClick={toggleFullscreen}
            />
            <button className="fullscreen-btn" onClick={toggleFullscreen}>
              <span className="fullscreen-icon">⛶</span>
            </button>
          </div>

          {/* Fullscreen Modal */}
          {isImageFullscreen && (
            <div className="fullscreen-modal" onClick={toggleFullscreen}>
              <div className="fullscreen-content">
                <img
                  src={item.image}
                  alt={item.itemname}
                  className="fullscreen-image"
                  onError={(e) => {
                    e.target.src =
                      "https://via.placeholder.com/1200x600?text=Image+Not+Available";
                  }}
                />
                <button className="close-fullscreen" onClick={toggleFullscreen}>
                  ✕
                </button>
                <div className="fullscreen-caption">
                  {item.itemname} - {item.category}
                </div>
              </div>
            </div>
          )}

          <div className="detail-content">
            <div className="detail-header">
              <div>
                <h1 className="detail-title">{item.itemname}</h1>
                <span className="detail-category">{item.category}</span>
              </div>
              <button className="share-button" onClick={handleShare}>
                <span className="share-icon">🔗</span>
                Share
              </button>
            </div>

            {showShare && (
              <div className="share-notification">
                Link copied to clipboard!
              </div>
            )}

            <div className="detail-props">
              <h2 className="props-title">Technical Specifications</h2>
              <div className="props-grid">
                {item.itemprops.map((prop, index) => (
                  <div key={index} className="prop-card">
                    <div className="prop-label-detail">{prop.label}</div>
                    <div className="prop-value-detail">{prop.value}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="action-buttons">
              <button className="back-to-home" onClick={() => navigate("/")}>
                ← Back to Catalog
              </button>
              <button
                className="view-category-btn"
                onClick={() =>
                  navigate(`/category/${item.category.toLowerCase()}`)
                }
              >
                View All {item.category} →
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetailPage;
