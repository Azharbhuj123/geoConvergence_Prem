export const Linkedin = ({ size = 24, className, color }) => {
    return (
        <svg key="li" width={size} height={size} viewBox="0 0 24 24" fill={color || "black"}>
            <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
            <circle cx="4" cy="4" r="2" />
        </svg>
    );
};
export const Twitter = ({ size = 24, className, color }) => {
    return (
        <svg key="x" width={size} height={size} viewBox="0 0 24 24" fill={color || "black"}>
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
    );
};
export const Instagram = ({ size = 24, className, color }) => {
    return (
        <svg key="ig" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color || "black"} strokeWidth="2">
            <rect x="2" y="2" width="20" height="20" rx="5" />
            <circle cx="12" cy="12" r="5" />
            <circle cx="17.5" cy="6.5" r="1.5" fill={color || "black"} stroke="none" />
        </svg>
    );
};
export const Facebook = ({ size = 24, className, color }) => {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color || "white"}>
            <path d="M13 22V12h3l1-4h-4V6.5c0-1.2.3-2 2-2H18V1.2C17.5 1.1 16.2 1 14.7 1 11.6 1 9.5 2.9 9.5 6.2V8H7v4h2.5v10H13z" />
        </svg>
    );
};