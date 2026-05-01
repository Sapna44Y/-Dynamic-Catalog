import { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ItemCard from "./ItemCard";
import "./CategoryCarousel.css";

const CategoryCarousel = ({ category, items }) => {
  const navigate = useNavigate();
  const carouselRef = useRef(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const scroll = (direction) => {
    if (carouselRef.current) {
      const scrollAmount = isMobile ? 280 : 320;
      const newScrollLeft =
        carouselRef.current.scrollLeft +
        (direction === "left" ? -scrollAmount : scrollAmount);

      carouselRef.current.scrollTo({
        left: newScrollLeft,
        behavior: "smooth",
      });
    }
  };

  const handleScroll = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      setShowLeftArrow(scrollLeft > 0);
      setShowRightArrow(scrollLeft + clientWidth < scrollWidth - 10);
    }
  };

  useEffect(() => {
    const carousel = carouselRef.current;
    if (carousel) {
      carousel.addEventListener("scroll", handleScroll);
      handleScroll();
      return () => carousel.removeEventListener("scroll", handleScroll);
    }
  }, [items]);

  return (
    <div className="category-carousel-container">
      <div className="carousel-header">
        <div className="carousel-title-section">
          <div className="category-icon-carousel">
            {category === "Cars" && "🚗"}
            {category === "Bikes" && "🏍️"}
            {category === "Phones" && "📱"}
            {category === "Computers" && "💻"}
          </div>
          <h2 className="carousel-title">{category}</h2>
          <span className="item-count">{items.length} items</span>
        </div>
        <button
          className="view-all-button"
          onClick={() => navigate(`/category/${category.toLowerCase()}`)}
        >
          View All {items.length} Items →
        </button>
      </div>

      <div className="carousel-wrapper">
        {showLeftArrow && (
          <button
            className="carousel-arrow left"
            onClick={() => scroll("left")}
          >
            ❮
          </button>
        )}

        <div className="carousel-track" ref={carouselRef}>
          {items.map((item, index) => (
            <div key={`${item.itemname}-${index}`} className="carousel-item">
              <ItemCard item={item} />
            </div>
          ))}
        </div>

        {showRightArrow && items.length > (isMobile ? 2 : 3) && (
          <button
            className="carousel-arrow right"
            onClick={() => scroll("right")}
          >
            ❯
          </button>
        )}
      </div>
    </div>
  );
};

export default CategoryCarousel;
