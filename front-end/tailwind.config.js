/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        img_bg_home:
          "url('https://www.tecnicageracao.com.br/wp-content/uploads/2019/01/post-blog-diferenca-entre-massagem-e-massoterapia.jpg')",
        img_bg_home2: "url('../bghome.jpg')",
      },
    },
  },
  plugins: [],
};
