import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import PageLoader from "./components/UI/PageLoader";
import ScrollToTop from "./components/UI/ScrollToTop";
import GovernmentPage from "./pages/GovernmentPage";
import ArcGisDevelopmentPage from "./pages/ArcGisDevelopmentPage";
import ArcGisEnterprisePage from "./pages/ArcGisEnterprisePage";
import { useThemeStore } from "./store/useThemeStore";
import { useEffect } from "react";
import FontPreviewPage from "./pages/FontPreviewPage";
import PasswordGate from "./components/PasswordGate";
import FacilitEasePage from "./pages/FacilitEasePage";
import ConnectArcGISPage from "./pages/ConnectArcGISPage";
import CartinuumPage from "./pages/CartinuumPage";
import ArcGISBuilderPage from "./pages/ArcGISBuilderPage";

const LandingPage = lazy(() => import("./pages/LandingPage"));
const connectArcGISPage = lazy(() => import("./pages/ConnectArcGISPage"));
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


function App() {
  const { theme, setTheme } = useThemeStore();

  useEffect(() => {
    document.documentElement.classList.toggle(
      "dark",
      theme === "dark"
    );
  }, [theme]);

  useEffect(() => {
    const mediaQuery = window.matchMedia(
      "(prefers-color-scheme: dark)"
    );

    const handleThemeChange = (e) => {
      if (!localStorage.getItem("theme")) {
        setTheme(e.matches ? "dark" : "light");
      }
    };

    mediaQuery.addEventListener("change", handleThemeChange);

    return () =>
      mediaQuery.removeEventListener(
        "change",
        handleThemeChange
      );
  }, [setTheme]);


  return (
    <PasswordGate>
      <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-white">
        <ScrollToTop />
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/solutions" element={<SolutionsPage />} />
            <Route path="/products" element={<ProductPage />} />
            <Route path="/why" element={<WhyPage />} />
            <Route path="/government" element={<GovernmentPage />} />
            <Route path="/career" element={<CareerPage />} />
            <Route path="/career/:id" element={<CareerDetails />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/:id" element={<BlogDetails />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/scan2twin" element={<Scan2TwinPage />} />
            <Route path="/FacilitEase" element={<IndoorMapsPage />} />
            <Route path="/lidar-scanning" element={<LidarScanningPage />} />
            {/* <Route path="/3d-modeling" element={<ThreeDModelingPage />} /> */}
            <Route path="/arcgis-indoors" element={<ArcGisIndoorsPage />} />
            <Route path="/arcgis-development" element={<ArcGisDevelopmentPage />} />
            <Route path="/arcgis-enterprise" element={<ArcGisEnterprisePage />} />
            <Route path="/digital-twins" element={<DigitalTwinsPage />} />
            <Route path="/reserv-assist" element={<ReservAssistPage />} />
            <Route path="/geo-printer" element={<GeoPrinterPage />} />
            <Route path="/scenario-planner" element={<ScenarioPlannerPage />} />
            <Route path="/room-reserv" element={<RoomReservPage />} />
            <Route path="/font-preview" element={<FontPreviewPage />} />
            <Route path="/facili-ease" element={<FacilitEasePage />} />
            <Route path="/arcgis-connect" element={<ConnectArcGISPage />} />
            <Route path="/cartinuum-widget" element={<CartinuumPage />} />
            <Route path="/arcgis-builder" element={<ArcGISBuilderPage />} />

          </Routes>
        </Suspense>
      </div>
    </PasswordGate>
  );
}

export default App;
