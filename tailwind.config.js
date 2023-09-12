module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  // ...
  // Các tùy chọn khác của bạn
  // ... theme: {
  theme: {
    extend: {
      backgroundImage: {
        heroBg: "url('../public/assets/svg/Group-7.svg')",
        aboutBg: "url('../public/assets/svg/Group-8.svg')",
        tokenomicsBg: "url('../public/assets/svg/Group 19.svg')",
        nftBg: "url('../public/assets/svg/Group 15.svg')",
        partnershipBg: "url('../public/assets/svg/Group 20.svg')",
        endBg: "url('../public/assets/svg/Group 23.svg')",
      },
    },
  },
};
