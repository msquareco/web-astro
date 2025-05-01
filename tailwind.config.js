// This is a Tailwind CSS configuration file that specifies the content files to scan for class names
// and extends the default theme. It also includes a plugin array for future use.
// It is used to customize the default Tailwind CSS configuration for a project.
// Importing the Tailwind CSS library

  // tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{html,js,astro}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
