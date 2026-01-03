import { Suspense, lazy } from "react";
import { HelmetProvider } from 'react-helmet-async';
import { Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";

// Lazy load pages
const Home = lazy(() => import("./components/home"));
const DestinationsPage = lazy(() => import("./components/DestinationsPage"));
const About = lazy(() => import("./components/About"));
const NotFound = lazy(() => import("./components/NotFound.tsx"));

function App() {
  return (
    <HelmetProvider>
      <Suspense fallback={<p>Loading...</p>}>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/destinations" element={<DestinationsPage />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </HelmetProvider>
  );
}

export default App;
