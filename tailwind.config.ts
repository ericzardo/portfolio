import type { Config } from 'tailwindcss';

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary-blue': 'var(--primary-blue)',
        'secondary-blue': 'var(--secondary-blue)',

        green: 'var(--green)',
        error: 'var(--error)',

        '50': 'var(--50)',
        '100': 'var(--100)',
        '200': 'var(--200)',
        '300': 'var(--300)',
        '400': 'var(--400)',
        '500': 'var(--500)',
        '600': 'var(--600)',
        '700': 'var(--700)',
        '800': 'var(--800)',
        '900': 'var(--900)',
        '950': 'var(--950)',

        'layer-gradient': 'var(--layer-gradient)',
        'fadein-fadeout': 'var(--background-gradient-transparent)',
      },
      fontSize: {
        'xs': ['12px', '24px'],
        'sm': ['14px', '24px'],
        'base': ['16px', '24px'],
        'md': ['18px', '24px'],
        'lg': ['20px', '24px'],
        'xl': ['32px', '40px'],
        '2xl': ['42px', '52px'],
        '3xl': ['50px', '64px']
      },
      boxShadow: {
        'little': 'var(--box-shadow-little)',
        'shadow': 'var(--box-shadow)',
      }
    },
  },
  plugins: [],
} satisfies Config;
