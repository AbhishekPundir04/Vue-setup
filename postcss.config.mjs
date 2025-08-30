import tailwindcss from '@tailwindcss/postcss';  // Import the correct Tailwind CSS plugin
import autoprefixer from 'autoprefixer';

export default {
  plugins: [
    tailwindcss(),  // Use Tailwind CSS PostCSS plugin
    autoprefixer(),
  ],
};
