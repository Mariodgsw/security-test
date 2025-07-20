/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Colori UI - Tema scuro basato su #020E1E
        ui: {
          // Sfondi
          background: '#020E1E',      // Sfondo principale - Blu scuro
          backgroundAlt: '#051630',   // Sfondo alternativo - Leggermente più chiaro
          backgroundLight: '#0A1F3F', // Sfondo per card e elementi in risalto
          
          // Bordi e divisori
          border: '#0F2A4F',          // Bordi principali
          borderLight: '#153564',     // Bordi più chiari per hover
          divider: '#0D2445',         // Divisori tra sezioni
          
          // Testo
          text: {
            primary: '#FFFFFF',       // Testo principale - Bianco
            secondary: '#94A3B8',     // Testo secondario - Grigio chiaro
            tertiary: '#64748B',      // Testo terziario - Grigio medio
            light: '#475569',         // Testo disabilitato - Grigio scuro
          },

          // Overlay e ombre
          overlay: 'rgba(0, 7, 20, 0.7)',  // Overlay per modal
          shadow: {
            light: '0 4px 6px rgba(0, 7, 20, 0.1)',
            medium: '0 6px 10px rgba(0, 7, 20, 0.2)',
            dark: '0 8px 16px rgba(0, 7, 20, 0.3)',
          },

          // Accenti e hover
          accent: {
            primary: '#1DE59C',       // Accento primario - Verde brillante
            hover: '#16B780',         // Stato hover
            active: '#129F6E',        // Stato active
            muted: '#0F8A5F',         // Versione attenuata
          },
        },

        // Colori principali del brand - Puoi modificare questi per cambiare il tema principale
        primary: {
          50: '#f0fdf4',   // Sfumatura più chiara
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#1DE59C',  // Colore principale del brand
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#14532d',  // Sfumatura più scura
        },

        // Colori per stati di sicurezza
        security: {
          critical: {
            text: '#FF4444',    // Rosso brillante per testo critico
            bg: '#4C1F1F',      // Rosso scuro per sfondo critico
            border: '#662626',  // Rosso medio per bordo critico
          },
          warning: {
            text: '#FFB800',    // Giallo brillante per testo warning
            bg: '#4C3A00',      // Giallo scuro per sfondo warning
            border: '#664E00',  // Giallo medio per bordo warning
          },
          success: {
            text: '#1DE59C',    // Verde brillante per testo success
            bg: '#1F4C3A',      // Verde scuro per sfondo success
            border: '#266644',  // Verde medio per bordo success
          },
          info: {
            text: '#3b82f6',    // Blu brillante per testo info
            bg: '#1E2F4C',      // Blu scuro per sfondo info
            border: '#264166',  // Blu medio per bordo info
          },
        },

        // Colori per funzionalità specifiche
        features: {
          email: {
            text: '#6366f1',    // Testo per email security
            bg: '#1E204C',      // Sfondo per email security
            border: '#262766',  // Bordo per email security
          },
          infrastructure: {
            text: '#8b5cf6',    // Testo per infrastruttura
            bg: '#2A1F4C',      // Sfondo per infrastruttura
            border: '#382666',  // Bordo per infrastruttura
          },
          certificates: {
            text: '#10b981',    // Testo per certificati
            bg: '#1F4C3A',      // Sfondo per certificati
            border: '#266644',  // Bordo per certificati
          },
          waf: {
            text: '#14b8a6',    // Testo per WAF
            bg: '#1F4C47',      // Sfondo per WAF
            border: '#266661',  // Bordo per WAF
          },
          cdn: {
            text: '#06b6d4',    // Testo per CDN
            bg: '#1F464C',      // Sfondo per CDN
            border: '#266166',  // Bordo per CDN
          },
        },

        // Colori per i grafici
        chart: {
          red: '#FF6384',      // Rosso per grafici
          blue: '#36A2EB',     // Blu per grafici
          yellow: '#FFCE56',   // Giallo per grafici
          teal: '#4BC0C0',     // Verde acqua per grafici
          purple: '#9966FF',   // Viola per grafici
          orange: '#FF9F40',   // Arancione per grafici
          // Versioni semi-trasparenti
          redAlpha: 'rgba(255, 99, 132, 0.5)',
          blueAlpha: 'rgba(53, 162, 235, 0.5)',
          greenAlpha: 'rgba(34, 197, 94, 0.5)',
          tealAlpha: 'rgba(75, 192, 192, 0.5)',
        },
      },
      // Configurazioni per animazioni
      animation: {
        'gradient': 'gradient 8s linear infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        gradient: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          }
        }
      },
      // Configurazioni per ombre personalizzata per tema scuro
      boxShadow: {
        sm: '0 2px 4px rgba(0, 7, 20, 0.1)',
        DEFAULT: '0 4px 6px rgba(0, 7, 20, 0.1)',
        md: '0 6px 10px rgba(0, 7, 20, 0.15)',
        lg: '0 8px 16px rgba(0, 7, 20, 0.2)',
        xl: '0 12px 24px rgba(0, 7, 20, 0.25)',
      },

      // Background per overlay
      backgroundColor: {
        'overlay': 'rgba(0, 7, 20, 0.7)',
      },

      // Gradients personalizzati per tema scuro
      backgroundImage: {
        'gradient-radial': 'radial-gradient(circle at center, var(--tw-gradient-stops))',
        'gradient-card': 'linear-gradient(180deg, rgba(15, 42, 79, 0.3) 0%, rgba(5, 22, 48, 0.3) 100%)',
      },
    },
  },
  plugins: [],
} 