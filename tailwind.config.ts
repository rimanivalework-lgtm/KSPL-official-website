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
			fontFamily: {
				'system': ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
				'primary': ['Inter', '-apple-system', 'BlinkMacSystemFont', 'DM Sans', 'sans-serif'],
				'secondary': ['DM Sans', '-apple-system', 'BlinkMacSystemFont', 'Inter', 'sans-serif'],
				'inter': ['Inter', '-apple-system', 'BlinkMacSystemFont', 'DM Sans', 'sans-serif'],
				'dmsans': ['DM Sans', '-apple-system', 'BlinkMacSystemFont', 'Inter', 'sans-serif'],
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))',
					dark: '#002648',
					light: '#307CC3',
					hover: 'hsl(var(--hover-blue))'
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
					foreground: 'hsl(var(--card-foreground))',
					'green-tint': 'hsl(var(--card-green-tint))',
					'cyan-tint': 'hsl(var(--card-cyan-tint))',
					'yellow-tint': 'hsl(var(--card-yellow-tint))',
					'blue-tint': 'hsl(var(--card-blue-tint))',
					'red-tint': 'hsl(var(--card-red-tint))'
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
				// New color palette
				blue: {
					50: '#EEF7FF',
					100: '#BADEFF',
					200: '#87C5FF',
					300: '#4EA0EC',
					400: '#307CC3',
					500: '#195C9A',
					600: '#093F71',
					700: '#002648',
				},
				red: {
					50: '#FFEDED',
					100: '#FFB6B7',
					200: '#FF7F82',
					300: '#ED4447',
					400: '#C42A2D',
					500: '#9B1619',
					600: '#72080A',
					700: '#4A0002',
				},
				yellow: {
					50: '#FFFCED',
					100: '#FFF3B6',
					200: '#FFEA80',
					300: '#FFE149',
					400: '#E5C833',
					500: '#BCA21E',
					600: '#937E0E',
					700: '#6B5A03',
				},
				green: {
					50: '#F1FFF4',
					100: '#C9FFD4',
					200: '#A0FFB5',
					300: '#77FD94',
					400: '#56D471',
					500: '#3BAB53',
					600: '#258239',
					700: '#145923',
				},
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)',
				xl: 'calc(var(--radius) + 4px)',
				'2xl': 'calc(var(--radius) + 8px)'
			},
			backgroundImage: {
				'gradient-primary': 'var(--gradient-primary)',
				'gradient-hero': 'var(--gradient-hero)',
				'gradient-section': 'var(--gradient-section)',
			},
			boxShadow: {
				'elegant': 'var(--shadow-elegant)',
				'glow': 'var(--shadow-glow)',
				'soft': 'var(--shadow-soft)',
				'medium': 'var(--shadow-medium)',
				'strong': 'var(--shadow-strong)',
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'gradient-shift': 'gradient-shift 3s ease infinite',
				'float': 'float 6s ease-in-out infinite',
				'pulse-glow': 'pulse-glow 3s ease-in-out infinite'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
