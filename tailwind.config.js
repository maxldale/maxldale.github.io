module.exports = {
    content: ["./src/**/*.{astro,html,js,jsx,ts,tsx}"],
    safelist: [
      'grid-cols-1',
      'grid-cols-2',
      'grid-cols-3',
      'grid-cols-4',
      'sm:grid-cols-1',
      'md:grid-cols-2',
      'lg:grid-cols-3',
      'xl:grid-cols-4',
    ],
    theme: {
      extend: {},
    },
    plugins: [],
  };
  