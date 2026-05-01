import { useState } from "react";
import "./ImageWithFallback.css";

const ImageWithFallback = ({ src, alt, className, fallbackSrc }) => {
  const [imgSrc, setImgSrc] = useState(src);
  const [hasError, setHasError] = useState(false);

  const defaultFallback =
    "https://via.placeholder.com/400x300?text=No+Image+Available";
  const fallbackImage = fallbackSrc || defaultFallback;

  const handleError = () => {
    if (!hasError) {
      setImgSrc(fallbackImage);
      setHasError(true);
    }
  };

  return (
    <img
      src={imgSrc}
      alt={alt}
      className={className}
      onError={handleError}
      loading="lazy"
    />
  );
};

export default ImageWithFallback;
