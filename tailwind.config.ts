
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				// Fantasy theme custom colors
				fantasy: {
					day: {
						primary: '#F5F5F5',    // White
						secondary: '#F8E9D2',  // Cream
						accent: '#D4AF37',     // Gold
						highlight: '#A8D5BA',  // Soft Green
						text: '#333333',       // Dark Gray
					},
					night: {
						primary: '#1A1A2E',    // Rich Black
						secondary: '#30305A',   // Dark Purple
						accent: '#C0C0C0',     // Silver
						highlight: '#0F3460',   // Dark Blue
						text: '#E0E0E0',       // Light Gray
					}
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			fontFamily: {
				'fantasy': ['Cinzel Decorative', 'serif'],
				'content': ['Lora', 'serif'],
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' },
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' },
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-10px)' },
				},
				'glow': {
					'0%, 100%': { 
						filter: 'drop-shadow(0 0 2px rgba(212, 175, 55, 0.5))' 
					},
					'50%': { 
						filter: 'drop-shadow(0 0 8px rgba(212, 175, 55, 0.8))' 
					},
				},
				'rotate-slow': {
					'0%': { transform: 'rotate(0deg)' },
					'100%': { transform: 'rotate(360deg)' },
				},
				'sparkle': {
					'0%': { 
						opacity: '0',
						transform: 'scale(0)' 
					},
					'50%': { 
						opacity: '1',
						transform: 'scale(1)' 
					},
					'100%': { 
						opacity: '0',
						transform: 'scale(0)' 
					},
				},
				'fade-in': {
					'0%': { opacity: '0' },
					'100%': { opacity: '1' },
				},
				'slide-up': {
					'0%': { 
						opacity: '0',
						transform: 'translateY(20px)' 
					},
					'100%': { 
						opacity: '1',
						transform: 'translateY(0)' 
					},
				},
				'text-shimmer': {
					'0%': { backgroundPosition: '0% 50%' },
					'100%': { backgroundPosition: '100% 50%' },
				},
				'pulse-3d': {
					'0%, 100%': { 
						transform: 'scale3d(1, 1, 1)',
					},
					'50%': { 
						transform: 'scale3d(1.05, 1.05, 1.05)',
					},
				},
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'float': 'float 3s ease-in-out infinite',
				'glow': 'glow 2s ease-in-out infinite',
				'rotate-slow': 'rotate-slow 8s linear infinite',
				'sparkle': 'sparkle 2s ease-in-out infinite',
				'fade-in': 'fade-in 0.5s ease-out',
				'slide-up': 'slide-up 0.5s ease-out',
				'text-shimmer': 'text-shimmer 2s linear infinite',
				'pulse-3d': 'pulse-3d 2s ease-in-out infinite',
			},
			transformStyle: {
				'3d': 'preserve-3d',
			},
			perspective: {
				'1000': '1000px',
				'2000': '2000px',
			},
			backdropFilter: {
				'crystal': 'blur(8px) saturate(180%)',
			},
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
