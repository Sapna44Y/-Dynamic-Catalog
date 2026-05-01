// Utility functions for the application

// Format currency if needed
export const formatCurrency = (amount, currency = "USD") => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: currency,
  }).format(amount);
};

// Truncate text with ellipsis
export const truncateText = (text, maxLength = 50) => {
  if (text.length <= maxLength) return text;
  return text.substr(0, maxLength) + "...";
};

// Capitalize first letter of each word
export const capitalizeWords = (str) => {
  return str.replace(/\b\w/g, (char) => char.toUpperCase());
};

// Get unique categories from items
export const getUniqueCategories = (items) => {
  return [...new Set(items.map((item) => item.category))];
};

// Filter items by search term
export const filterItemsBySearch = (items, searchTerm) => {
  if (!searchTerm.trim()) return items;

  const term = searchTerm.toLowerCase();
  return items.filter(
    (item) =>
      item.itemname.toLowerCase().includes(term) ||
      item.category.toLowerCase().includes(term) ||
      item.itemprops.some(
        (prop) =>
          prop.label.toLowerCase().includes(term) ||
          prop.value.toLowerCase().includes(term),
      ),
  );
};

// Sort items by name
export const sortItemsByName = (items, ascending = true) => {
  return [...items].sort((a, b) => {
    if (ascending) {
      return a.itemname.localeCompare(b.itemname);
    } else {
      return b.itemname.localeCompare(a.itemname);
    }
  });
};

// Get random items
export const getRandomItems = (items, count = 3) => {
  const shuffled = [...items];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled.slice(0, count);
};

// Validate image URL
export const isValidImageUrl = (url) => {
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => resolve(true);
    img.onerror = () => resolve(false);
    img.src = url;
  });
};

// Debounce function for search
export const debounce = (func, delay) => {
  let timeoutId;
  return (...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func(...args), delay);
  };
};
