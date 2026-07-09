import { useState, useEffect } from "react";
import { fetchSiteSettings } from "../lib/api";
import { sha256 } from "../lib/crypto";
import { Eye, EyeOff, Lock, AlertCircle, RefreshCw, CheckCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import PageLoader from "./UI/PageLoader";

export default function PasswordGate({ children }) {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [settings, setSettings] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [fetchError, setFetchError] = useState(false);

  // Load configuration from Sanity
  const loadSettings = async () => {
    try {
      setLoading(true);
      setFetchError(false);
      const data = await fetchSiteSettings();
      setSettings(data);

      if (!data || !data.passwordEnabled) {
        setIsAuthorized(true);
      } else {
        // Check local storage for authorization hash
        const savedHash = localStorage.getItem("site_authorized_hash");
        if (savedHash && savedHash === data.passwordHash) {
          setIsAuthorized(true);
        } else {
          setIsAuthorized(false);
        }
      }
    } catch (err) {
      console.error("Error loading password protection settings:", err);
      setFetchError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadSettings();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!password) {
      setError("Please enter the password");
      return;
    }

    setIsSubmitting(true);
    setError("");

    try {
      const inputHash = await sha256(password);
      if (inputHash === settings.passwordHash) {
        localStorage.setItem("site_authorized_hash", inputHash);
        setIsAuthorized(true);
      } else {
        setError("Invalid password. Please check and try again.");
      }
    } catch (err) {
      console.error(err);
      setError("An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (loading) {
    return <PageLoader />;
  }

  // Fail-secure: If settings failed to fetch, show an error state with a retry button
  if (fetchError) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-slate-950 text-white p-4">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-md p-8 rounded-2xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-md text-center shadow-2xl"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-950/50 border border-red-500/30 text-red-500 mb-6">
            <AlertCircle size={32} />
          </div>
          <h2 className="text-xl font-semibold mb-2">Connection Error</h2>
          <p className="text-slate-400 text-sm mb-6">
            We couldn't connect to the server to verify site settings. Please check your internet connection and try again.
          </p>
          <button
            onClick={loadSettings}
            className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-medium transition duration-200 shadow-lg shadow-indigo-600/20 active:scale-[0.98]"
          >
            <RefreshCw size={18} className="animate-spin-slow" />
            Retry Connection
          </button>
        </motion.div>
      </div>
    );
  }

  // If password protection is disabled or the user is already authorized
  if (isAuthorized) {
    return children;
  }

  return (
    <div className="relative flex items-center justify-center min-h-screen bg-gradient-to-br from-slate-950 via-[#020617] to-indigo-950 text-white p-4 overflow-hidden">
      {/* Decorative Blur Background Blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-teal-500/5 rounded-full blur-[120px] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="w-full max-w-md z-10"
      >
        <div className="text-center mb-8">
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-950/60 border border-indigo-500/30 text-indigo-400 text-xs font-semibold uppercase tracking-wider mb-4"
          >
            <Lock size={12} /> Staging Environment
          </motion.div>
          <h1 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-white via-slate-100 to-slate-400 bg-clip-text text-transparent">
            geoConvergence
          </h1>
          <p className="text-slate-400 text-sm mt-2">
            This site is protected. Please enter the site password to proceed.
          </p>
        </div>

        <div className="p-8 rounded-2xl bg-slate-900/40 border border-slate-800/80 backdrop-blur-xl shadow-2xl relative overflow-hidden">
          {/* Subtle Card Glow */}
          <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/5 via-transparent to-transparent pointer-events-none" />

          <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
            <div>
              <label htmlFor="password" className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                Password
              </label>
              <div className="relative rounded-xl shadow-sm">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full block pl-4 pr-12 py-3 bg-slate-950/80 border border-slate-800 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 rounded-xl text-white placeholder-slate-600 focus:outline-none transition duration-200"
                  placeholder="••••••••"
                  autoComplete="current-password"
                  autoFocus
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 flex items-center pr-4 text-slate-500 hover:text-slate-300 transition-colors"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            <AnimatePresence mode="wait">
              {error && (
                <motion.div
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -5 }}
                  className="flex items-start gap-2.5 p-3 rounded-lg bg-red-950/30 border border-red-500/20 text-red-400 text-xs"
                >
                  <AlertCircle size={16} className="mt-0.5 flex-shrink-0" />
                  <span>{error}</span>
                </motion.div>
              )}
            </AnimatePresence>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full flex items-center justify-center py-3 px-4 border border-transparent rounded-xl text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-200 shadow-lg shadow-indigo-600/20 active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <RefreshCw size={16} className="animate-spin" />
              ) : (
                "Unlock Access"
              )}
            </button>
          </form>
        </div>

        <div className="text-center mt-8 text-xs text-slate-600">
          &copy; {new Date().getFullYear()} geoConvergence. All rights reserved.
        </div>
      </motion.div>
    </div>
  );
}
