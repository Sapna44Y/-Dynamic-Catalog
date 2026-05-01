# Dynamic Multi-Category Catalog

## Project Overview

A responsive web application that displays a multi-category product catalog with dynamic rendering capabilities. Built with React and Vite for optimal performance.

## Technologies Used

- **React 18**: Frontend framework for building UI components
- **Vite**: Next-generation build tool for faster development
- **React Router DOM v6**: For seamless navigation between pages
- **CSS3**: Custom styling with responsive design and animations
- **Git**: Version control

## Time Spent

**Total Time**: 6 hours

- Setup & Configuration: 30 minutes
- Component Development: 2 hours
- Styling & Responsiveness: 1.5 hours
- Routing & Navigation: 1 hour
- Testing & Debugging: 1 hour

## Implementation Approach

### Architecture

1. **Component-Based Structure**: Modular components for reusability
2. **Dynamic Rendering**: Categories and items are generated dynamically from JSON
3. **State Management**: React hooks (useState, useEffect) for local state management
4. **Responsive Design**: Mobile-first approach with CSS Grid and Flexbox

### Key Features

- **Category Grouping**: Items automatically grouped by category from JSON
- **Preview Cards**: Each category shows up to 4 items with key properties
- **Detail Pages**: Dynamic property display based on item's itemprops array
- **Responsive Grid**: Adapts to different screen sizes (mobile, tablet, desktop)
- **Smooth Navigation**: React Router for page transitions
- **Error Handling**: Fallback images and graceful error states

### Design Decisions

1. **Card Layout**: Clean, modern card design with hover effects
2. **Gradient Theme**: Consistent color scheme using purple-blue gradients
3. **Property Display**: Cards show first 2 properties as preview
4. **Detail View**: Grid layout for technical specifications
5. **Loading States**: Spinner animation during data loading

### Performance Optimizations

- Lazy loading not needed due to small dataset
- Efficient array methods for grouping
- Optimized image loading with object-fit cover
- Minimal re-renders using proper state management

## Installation & Setup

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Steps

1. Clone or download the project
2. Navigate to project directory
3. Install dependencies:
   ```bash
   npm install
   ```
# -Dynamic-Catalog
