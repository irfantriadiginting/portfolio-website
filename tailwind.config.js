/** @type {import('tailwindcss').Config} */
export default {
    // Tailwind hanya akan generate CSS untuk class yang dipakai di file-file ini
    // Ini penting agar file CSS yang dihasilkan tidak membengkak (tree-shaking)
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            // Custom color palette dark theme
            colors: {
                bg: {
                    primary: '#080810',
                    secondary: '#111122',
                    card: '#15152a',
                },
                accent: {
                    purple: '#8b5cf6',
                    'purple-light': '#a78bfa',
                    cyan: '#06b6d4',
                    'cyan-light': '#22d3ee',
                },
                text: {
                    primary: '#e2e8f0',
                    secondary: '#94a3b8',
                    muted: '#64748b',
                },
            },
            // Custom font family (diload dari Google Fonts di index.html)
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                display: ['Space Grotesk', 'sans-serif'],
            },
            // Custom animasi
            animation: {
                'fade-in': 'fadeIn 0.6s ease-out forwards',
                'slide-up': 'slideUp 0.6s ease-out forwards',
                'glow-pulse': 'glowPulse 3s ease-in-out infinite',
                'typewriter': 'typewriter 3s steps(30) forwards',
                'float': 'float 6s ease-in-out infinite',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                slideUp: {
                    '0%': { opacity: '0', transform: 'translateY(30px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                glowPulse: {
                    '0%, 100%': { boxShadow: '0 0 20px rgba(139, 92, 246, 0.3)' },
                    '50%': { boxShadow: '0 0 40px rgba(139, 92, 246, 0.7)' },
                },
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-10px)' },
                },
            },
            // Custom backdrop blur
            backdropBlur: {
                xs: '2px',
            },
        },
    },
    plugins: [],
}
