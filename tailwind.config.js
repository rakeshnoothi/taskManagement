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
        },
        extend: {
            animation: {
                "spin-once": "spin .5s linear",
            },
        },
    },
    plugins: [],
};
