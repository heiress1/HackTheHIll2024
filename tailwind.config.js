/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                main: "#AFEA96",
                dark: "#979A96",
                mid: "#D9D9D8",
                white: "#FFFFFE",
            },
        },
    },
    plugins: [],
};
