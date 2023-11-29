/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        colors: {
            blue: {
                //bg
                100: "#EEF1FB",
                //hovering
                300: "#BDC9EF",
                //text
                900: "#2C4CB5",
            },
            white: "#ffff",
            black: "black",
            red: "#D33F49",
            green: {
                100: "#3CAC0C",
                500: " #246a07",
            },
            silver: {
                100: "#F4F4F6",
                500: "#BCBCC8",
            },
        },
        extend: {
            animation: {
                "spin-once": "spin .5s linear",
            },
        },
    },
    plugins: [],
};
