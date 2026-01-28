import { Suspense, lazy } from "react";
import { HelmetProvider } from 'react-helmet-async';
import { Routes, Route } from "react-router-dom";
import ScrollToTop from "@/components/layout/ScrollToTop";

// Lazy load pages

const Home = lazy(() => import("@/pages/Home"));
const DestinationsPage = lazy(() => import("@/pages/Destinations"));
const About = lazy(() => import("@/pages/About"));
const NotFound = lazy(() => import("@/pages/NotFound"));

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
