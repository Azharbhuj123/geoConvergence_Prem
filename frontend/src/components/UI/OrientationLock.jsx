// components/OrientationLock.jsx
import React from "react";

export default function OrientationLock() {
    return (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black text-white text-center p-6 landscape:hidden">
            <div>
                <h1 className="text-xl font-bold mb-2">
                    Please rotate your device
                </h1>
                <p>This page only works in horizontal (landscape) mode.</p>
            </div>
        </div>
    );
}