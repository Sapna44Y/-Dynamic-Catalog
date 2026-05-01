import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import ItemDetailPage from "./pages/ItemDetailPage";
import CategoryPage from "./pages/CategoryPage";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import ContactUs from "./pages/ContactUs";
import "./App.css";

// Error Boundary Component
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Error caught by boundary:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="error-boundary">
          <h2>Something went wrong</h2>
          <p>{this.state.error?.message}</p>
          <button onClick={() => window.location.reload()}>Refresh Page</button>
        </div>
      );
    }
    return this.props.children;
  }
}

// Wrapper component to add Layout to pages
const PageWrapper = ({ children }) => {
  return <Layout>{children}</Layout>;
};

function App() {
  return (
    <ErrorBoundary>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <PageWrapper>
                <HomePage />
              </PageWrapper>
            }
          />
          <Route
            path="/item/:itemName"
            element={
              <PageWrapper>
                <ItemDetailPage />
              </PageWrapper>
            }
          />
          <Route
            path="/category/:categoryName"
            element={
              <PageWrapper>
                <CategoryPage />
              </PageWrapper>
            }
          />
          <Route
            path="/privacy-policy"
            element={
              <PageWrapper>
                <PrivacyPolicy />
              </PageWrapper>
            }
          />
          <Route
            path="/terms-of-service"
            element={
              <PageWrapper>
                <TermsOfService />
              </PageWrapper>
            }
          />
          <Route
            path="/contact"
            element={
              <PageWrapper>
                <ContactUs />
              </PageWrapper>
            }
          />
          <Route
            path="*"
            element={
              <PageWrapper>
                <NotFoundPage />
              </PageWrapper>
            }
          />
        </Routes>
      </div>
    </ErrorBoundary>
  );
}

// 404 Not Found Page Component
const NotFoundPage = () => {
  return (
    <div className="not-found-container">
      <div className="not-found-content">
        <h1>404</h1>
        <h2>Page Not Found</h2>
        <p>The page you're looking for doesn't exist or has been moved.</p>
        <a href="/" className="home-link">
          Go Back Home
        </a>
      </div>
    </div>
  );
};

export default App;
