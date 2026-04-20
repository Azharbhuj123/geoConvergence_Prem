import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

const LandingPage = lazy(() => import("./pages/LandingPage"));
const CareerDetails = lazy(() => import("./pages/CareerDetails"));
const CareerPage = lazy(() => import("./pages/CareerPage"));
const WhyPage = lazy(() => import("./pages/WhyPage"));
const SolutionsPage = lazy(() => import("./pages/SolutionPage"));
const ProductPage = lazy(() => import("./pages/ProductPage"));
const BlogPage = lazy(() => import("./pages/Blog"));
const BlogDetails = lazy(() => import("./pages/BlogDetails"));
const Scan2TwinPage = lazy(() => import("./pages/Scan2Twin"));
const IndoorMapsPage = lazy(() => import("./pages/IndoorMapsPage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));
const LidarScanningPage = lazy(() => import("./pages/LidarScanningPage"));
const ThreeDModelingPage = lazy(() => import("./pages/ThreeDModelingPage"));
const ArcGisIndoorsPage = lazy(() => import("./pages/ArcGisIndoorsPage"));
const DigitalTwinsPage = lazy(() => import("./pages/DigitalTwinsPage"));
const ReservAssistPage = lazy(() => import("./pages/ReservAssistPage"));
const GeoPrinterPage = lazy(() => import("./pages/GeoPrinterPage"));
const ScenarioPlannerPage = lazy(() => import("./pages/ScenarioPlannerPage"));
const RoomReservPage = lazy(() => import("./pages/RoomReservPage"));
const EightStarPage = lazy(() => import("./pages/EightStarPage"));
const NAVSEASeaportPage = lazy(() => import("./pages/NAVSEASeaportPage"));
const GSAMasPage = lazy(() => import("./pages/GSAMasPage"));
const GSS2Page = lazy(() => import("./pages/GSS2Page"));
const Sba8aPage = lazy(() => import("./pages/Sba8aPage"));
const HubZonePage = lazy(() => import("./pages/HubZonePage"));

const PageLoader = () => (
  <div
    style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      minHeight: "100vh",
    }}
  >
    <div
      style={{
        width: "36px",
        height: "36px",
        border: "3px solid #e5e7eb",
        borderTop: "3px solid #6366f1",
        borderRadius: "50%",
        animation: "spin 0.7s linear infinite",
      }}
    />
    <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
  </div>
);

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-white">
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/career" element={<CareerPage />} />
          <Route path="/why" element={<WhyPage />} />
          <Route path="/career/:id" element={<CareerDetails />} />
          <Route path="/solutions" element={<SolutionsPage />} />
          <Route path="/products" element={<ProductPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:id" element={<BlogDetails />} />
          <Route path="/scan2twin" element={<Scan2TwinPage />} />
          <Route path="/indoormaps" element={<IndoorMapsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/lidar-scanning" element={<LidarScanningPage />} />
          <Route path="/3d-modeling" element={<ThreeDModelingPage />} />
          <Route path="/arcgis-indoors" element={<ArcGisIndoorsPage />} />
          <Route path="/digital-twins" element={<DigitalTwinsPage />} />
          <Route path="/reserv-assist" element={<ReservAssistPage />} />
          <Route path="/geo-printer" element={<GeoPrinterPage />} />
          <Route path="/scenario-planner" element={<ScenarioPlannerPage />} />
          <Route path="/room-reserv" element={<RoomReservPage />} />
          <Route path="/8star" element={<EightStarPage />} />
          <Route path="/navsea-seaport" element={<NAVSEASeaportPage />} />
          <Route path="/gsa-mas" element={<GSAMasPage />} />
          <Route path="/gss-2.0" element={<GSS2Page />} />
          <Route path="/sba-8a" element={<Sba8aPage />} />
          <Route path="/hubzone" element={<HubZonePage />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
