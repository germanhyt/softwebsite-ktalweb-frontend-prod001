import type { Config } from "tailwindcss";

export default {
    content: [
        './src/**/*.{astro,js,jsx,ts,tsx}',
    ],
    theme: {
        screens: {
            xxs: "290px",
            xs: "375px",
            sm: "640px",
            md: "768px",
            lg: "1024px",
            xl: "1280px",
            "2xl": "1536px",
            "2.5xl": "1750px",
            "3xl": "1920px",
        },
        extend: {
            backgroundImage: {},
            fontFamily: {
                nunito: ["Nunito", "sans-serif"],
            },
            fontWeight: {
                thin: "100",
                "extra-light": "200",
                light: "300",
                normal: "400",
                medium: "500",
                semibold: "600",
                bold: "700",
                "extra-bold": "800",
                black: "900",
            },
            fontSize: {},
            colors: {
                "primary-purple-100": "#5919C1",

                "secondary-black-100": "#010101",

                "tertiary-white-100": "#F8F8F8",
                "tertiary-white-200": "#D9D9D9",

            },
            container: {
                padding: {
                    DEFAULT: "1rem",
                    sm: "1.2rem",
                    md: "1.5rem",
                    lg: "1.8rem",
                    xl: "3rem",
                    "2xl": "6rem",
                },
            },
        },
    },
    plugins: [],
} satisfies Config;
