import { useState, useRef, useEffect } from "react";
import { useThemeStore } from "../store/useThemeStore";
import { urlFor } from "../lib/sanity";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Transforming({ title, description, cards = [] }) {
    const { theme } = useThemeStore();
    const [sliderPosition, setSliderPosition] = useState(50); // percentage
    const [isDragging, setIsDragging] = useState(false);

    const containerRef = useRef(null);

    // Get images from cards prop (matches your Sanity structure)
    const beforeImage = cards?.[0]?.image;
    const afterImage = cards?.[1]?.image;

    const beforeUrl = beforeImage ? urlFor(beforeImage) : "https://placehold.co/800x520/0f172a/60a5fa?text=Before";
    const afterUrl = afterImage ? urlFor(afterImage) : "https://placehold.co/800x520/1e2937/94a3b8?text=After";

    const handleMove = (clientX) => {
        if (!containerRef.current) return;

        const rect = containerRef.current.getBoundingClientRect();
        let position = ((clientX - rect.left) / rect.width) * 100;

        // Clamp between 5% and 95%
        position = Math.max(5, Math.min(95, position));
        setSliderPosition(position);
    };

    const handleMouseMove = (e) => {
        if (!isDragging) return;
        handleMove(e.clientX);
    };

    const handleTouchMove = (e) => {
        if (!isDragging) return;
        handleMove(e.touches[0].clientX);
    };

    const handleMouseDown = () => setIsDragging(true);
    const handleMouseUp = () => setIsDragging(false);

    // Global mouse up handler
    useEffect(() => {
        const handleGlobalUp = () => setIsDragging(false);
        document.addEventListener("mouseup", handleGlobalUp);
        document.addEventListener("touchend", handleGlobalUp);

        return () => {
            document.removeEventListener("mouseup", handleGlobalUp);
            document.removeEventListener("touchend", handleGlobalUp);
        };
    }, []);

    return (
        <section
            className={`${theme === "dark" ? "dark" : ""
                } py-10 sm:py-20 px-6 sm:px-8 lg:px-14 bg-[var(--bg)]`}
        >
            <div className="max-w-[1440px] mx-auto">
                {/* Header */}
                <div className="mb-12">
                    <h2 className="heading-primary text-center">
                        {title || "Transforming The Physical Into Digital"}
                    </h2>
                    <p className="text-subtitle max-w-2xl mx-auto text-center mt-3">
                        {description}
                    </p>
                </div>

                {/* Before / After Slider */}
                <div
                    ref={containerRef}
                    className="relative rounded-3xl overflow-hidden shadow-2xl bg-black aspect-[16/9] md:aspect-[2.1/1] max-h-[620px] cursor-ew-resize select-none"
                    onMouseMove={handleMouseMove}
                    onTouchMove={handleTouchMove}
                    onMouseLeave={handleMouseUp}
                >
                    {/* After Image (Right / Base Layer) */}
                    <img
                        src={afterUrl}
                        alt="After - Digital Twin"
                        className="absolute inset-0 w-full h-full object-cover"
                    />

                    {/* Before Image (Left / Overlay) */}
                    <div
                        className="absolute inset-0 overflow-hidden"
                        style={{ width: `${sliderPosition}%` }}
                    >
                        <img
                            src={beforeUrl}
                            alt="Before - Reality Capture"
                            className="absolute inset-0 w-full h-full object-cover"
                        />
                    </div>

                    {/* Divider Line */}
                    <div
                        className="absolute top-0 bottom-0 w-0.5 bg-white shadow-[0_0_10px_rgba(255,255,255,0.6)] z-10 pointer-events-none"
                        style={{ left: `${sliderPosition}%` }}
                    />

                    {/* Draggable Handle */}
                    <div
                        className="absolute top-1/2 -translate-y-1/2 z-20 flex items-center justify-center w-12 h-12 -ml-6 cursor-ew-resize transition-transform hover:scale-110 active:scale-95"
                        style={{ left: `${sliderPosition}%` }}
                        onMouseDown={handleMouseDown}
                        onTouchStart={handleMouseDown}
                        aria-label="Drag to compare before and after"
                    >
                        <div className="w-11 h-11 rounded-full bg-white shadow-xl flex items-center justify-center border-4 border-slate-900/80 hover:border-blue-600 transition-colors">
                            <ChevronLeft className="w-6 h-6 text-slate-900" />
                            <ChevronRight className="w-6 h-6 text-slate-900" />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}