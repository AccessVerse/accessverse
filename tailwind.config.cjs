/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin');

module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        cdark: '#111217', // dark - primary
        clight: '#f4f5f5', // light - primary

        csdark: '#181b1f', // dark - secondary (light)
        cslight: '#ffffff', // light - secondary (light)

        chdark: '#292929', // default hover bg (dark theme)
        chgray: '#f0f0f0', // default hover bg (light theme)

        cgray: '#333', // default border - dark
        clgray: '#e4e5e6', // default border - light

        cpantd: '#1677ff', // antd - primary
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar')({ nocompatible: true }),
    plugin(function ({ addVariant, e, postcss }) {
      addVariant('firefox', ({ container, separator }) => {
        const isFirefoxRule = postcss.atRule({
          name: '-moz-document',
          params: 'url-prefix()',
        });
        isFirefoxRule.append(container.nodes);
        container.append(isFirefoxRule);
        isFirefoxRule.walkRules((rule) => {
          rule.selector = `.${e(
            `firefox${separator}${rule.selector.slice(1)}`
          )}`;
        });
      });
    }),
  ],
};
