import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/home";
import DestinationsPage from "./components/DestinationsPage";

import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destinations" element={<DestinationsPage />} />
      </Routes>
    </Suspense>
  );
}

export default App;
