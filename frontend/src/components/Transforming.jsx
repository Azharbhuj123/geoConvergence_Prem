import { useState, useRef, useEffect } from "react";
import { useThemeStore } from "../store/useThemeStore";
import { urlFor } from "../lib/sanity";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Transforming({ title, description, cards = [] }) {
    const { theme } = useThemeStore();
    const [sliderPosition, setSliderPosition] = useState(50);
    const [isDragging, setIsDragging] = useState(false);

    const containerRef = useRef(null);

    const beforeImage = cards?.[0]?.image;
    const afterImage = cards?.[1]?.image;

    const beforeUrl = beforeImage ? urlFor(beforeImage) : "https://placehold.co/800x520/0f172a/60a5fa?text=Before";
    const afterUrl = afterImage ? urlFor(afterImage) : "https://placehold.co/800x520/1e2937/94a3b8?text=After";

    const handleMove = (clientX) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        let position = ((clientX - rect.left) / rect.width) * 100;
        // Clamp between 0% and 100% so the before image can fully vanish
        position = Math.max(0, Math.min(100, position));
        setSliderPosition(position);
    };

    const handleMouseMove = (e) => { if (isDragging) handleMove(e.clientX); };
    const handleTouchMove = (e) => { if (isDragging) handleMove(e.touches[0].clientX); };
    const handleMouseDown = () => setIsDragging(true);
    const handleMouseUp = () => setIsDragging(false);

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
            className={`${theme === "dark" ? "dark" : ""} py-10 sm:py-20 px-6 sm:px-8 lg:px-14 bg-[var(--bg)]`}
        >
            <div className="max-w-[1440px] mx-auto">
                <div className="mb-12">
                    <h2 className="heading-primary text-center">
                        {title || "Transforming The Physical Into Digital"}
                    </h2>
                    <p className="text-subtitle max-w-5xl mx-auto text-center mt-3">
                        {description}
                    </p>
                </div>

                <div
                    ref={containerRef}
                    className="relative rounded-3xl overflow-hidden shadow-2xl bg-black aspect-[16/9] md:aspect-[2.1/1] max-h-[620px] cursor-ew-resize select-none"
                    onMouseMove={handleMouseMove}
                    onTouchMove={handleTouchMove}
                    onMouseLeave={handleMouseUp}
                >
                    {/* After Image — base layer, always full width */}
                    <img
                        src={afterUrl}
                        alt="After - Digital Twin"
                        className="absolute inset-0 w-full h-full object-cover"
                    />

                    {/*
                     * FIX: Before image overlay now uses clipPath instead of width.
                     *
                     * Root cause of the original bug:
                     *   The old approach set `width: sliderPosition%` on a wrapper div,
                     *   then placed the <img> absolutely inside it with `w-full`.
                     *   Because the img was `position:absolute`, it sized itself relative
                     *   to the nearest positioned ancestor — the outer container, NOT the
                     *   clipping wrapper. So the image was always rendered at full container
                     *   width, and only its visible window was restricted by the wrapper's
                     *   width. At 90–100%, the right edge of the wrapper fell short of the
                     *   actual image edge, leaving a sliver of the before image still showing.
                     *
                     * The fix:
                     *   We keep the before image as a full-size absolute layer (same as the
                     *   after image) and apply `clipPath: inset(0 X% 0 0)` directly to it,
                     *   where X = 100 - sliderPosition. clipPath operates on the element's
                     *   own rendered box, so there is zero gap — when sliderPosition hits
                     *   100%, inset(0 0% 0 0) = no clip at all... wait, we want the opposite.
                     *   inset(0 rightClip 0 0) clips FROM the right, so:
                     *     rightClip = (100 - sliderPosition)%
                     *   At sliderPosition=100 → rightClip=0%  → entire image visible (full left)
                     *   At sliderPosition=0  → rightClip=100% → image fully hidden
                     *   At sliderPosition=50 → rightClip=50%  → left half visible ✓
                     *
                     *   `will-change: clip-path` and the CSS transition ensure smooth GPU-
                     *   accelerated animation without layout thrash.
                     */}
                    <img
                        src={beforeUrl}
                        alt="Before - Reality Capture"
                        className="absolute inset-0 w-full h-full object-cover"
                        style={{
                            clipPath: `inset(0 ${100 - sliderPosition}% 0 0)`,
                            // Smooth transition only when NOT dragging, so dragging stays 1:1
                            transition: isDragging ? "none" : "clip-path 0.15s ease-out",
                            willChange: "clip-path",
                        }}
                    />

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