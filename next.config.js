/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
    reactStrictMode: true,
    images: {
      domains: ["source.unsplash.com"],
    },
    
  }
  
  module.exports = nextConfig

  