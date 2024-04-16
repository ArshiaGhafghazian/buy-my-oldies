import type { Config } from "tailwindcss"
import { colord, extend } from "colord"
import mixPlugin from "colord/plugins/mix"

extend([mixPlugin])

const generateDarkenColorFrom = (input: string, percentage = 0.07): string => {
    return colord(input).darken(percentage).toHex()
}
const generateForegroundColorFrom = (
    input: string,
    percentage = 0.07
): string => {
    return colord(input)
        .mix(colord(input).isDark() ? "white" : "black", percentage)
        .toHex()
}

type ColorObject = {
    [key: string]: string
}

export const tailwindColors: ColorObject = {
    current: "currentColor",
    transparent: "transparent",
    white: "#F9F9F9",
    primary: "#00ABE4",
    "primary-content": "#FFFFFF",
    "primary-focus": generateDarkenColorFrom("#007BEC"),
    secondary: "#6c5ce7",
    "secondary-content": "#FFFFFF",
    "secondary-focus": generateDarkenColorFrom("#6c5ce7"),
    accent: "#1FB2A5",
    "accent-content": "#FFFFFF",
    "accent-focus": generateDarkenColorFrom("#1FB2A5"),
    neutral: "#2a323c",
    "neutral-content": generateForegroundColorFrom("#FFFFFF"),
    "neutral-focus": generateDarkenColorFrom("#2a323c", 0.03),
    "base-25": "#F0F8FE",
    "base-50": "#E3EEFA",
    "base-75": "#20272e",
    "base-100": "#1d232a",
    "base-200": "#191e24",
    "base-300": "#15191e",
    "base-content": "#61738B",
    "base-heading": "#1E375A",

    info: "#3abff8",
    "info-content": generateForegroundColorFrom("#3abff8"),
    success: "#36d399",
    "success-content": generateForegroundColorFrom("#36d399"),
    warning: "#fbbd23",
    "warning-content": generateForegroundColorFrom("#fbbd23"),
    error: "#f87272",
    "error-content": generateForegroundColorFrom("#f87272"),
    "gradient-first": "#34eaa0",
    "gradient-second": "#0fa2e9",
}

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        colors: tailwindColors,
        extend: {
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
        },
    },
    darkMode: "class",
    plugins: [],
}
export default config
