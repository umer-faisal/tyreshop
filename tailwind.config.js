/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
       fontFamily: {
      montserrat: ['Montserrat', 'sans-serif'],
    },
      colors: {
        dark: "#0f0f0f",
        light: "#f5f5f5",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
          dark: "hsl(var(--primary-dark))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
          dark: "hsl(var(--secondary-dark))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
          dark: "hsl(var(--accent-dark))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)',
        'section-gradient': 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)',
        'card-gradient': 'linear-gradient(135deg, #ffffff 0%, #f1f5f9 100%)',
        'primary-gradient': 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
        'primary-dark': 'linear-gradient(135deg, #1d4ed8 0%, #1e40af 100%)',
        'secondary-gradient': 'linear-gradient(135deg, #64748b 0%, #475569 100%)',
        'accent-gradient': 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
        'accent-dark': 'linear-gradient(135deg, #d97706 0%, #b45309 100%)',
      },
      boxShadow: {
        'glow-primary': '0 0 20px rgba(59, 130, 246, 0.3)',
      },
    },
  },
  plugins: [],
}

