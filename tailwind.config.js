const { colors } = require('tailwindcss/defaultTheme');
const { fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
  //purge: ['./src/**/*.html'], //移除沒用到的class讓style程式碼縮減到最少，新版沒有purge了？
  mode: 'jit',
  darkMode: 'media', // or 'class'
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./src/**/*.html"
  ],
  theme: {
    extend: {
      //自訂斷點
      screens: {
        'tablet': '640px',
        //=> @media (min-width: 640px) { ... }
        'laptop': '1024px',
        //=> @media (min-width: 1024px) { ... }
        'desktop': '1280px',
        //=> @media (min-width: 1280px) { ... }
        'xxl': '1920px',
        //=> @media (min-width: 1920px) { ... }
      },
      colors: {
        'gray': colors.zinc,
      },
      fontFamily: {
        sans: ['Noto Sans TC',...fontFamily.sans],
      }
    },
    //如果要增加css狀態..，但如果使用jit模式，則以下配置可以不用設定，因為jit預設就是各種狀態全開
    variants: {
      extend: {
        ringWidth: ['active'] //舉例：active狀態下的效果
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}
