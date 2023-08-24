/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "gradus.paullebedev.ru",
        port: "",
        pathname: "/storage/**",
      },
    ],
  },
  env: {
    IMG_URL: "https://gradus.paullebedev.ru/storage",
    PUBLIC_TOKEN: "???",
    PRIVATE_TOKEN: "???",
    BASE_URL: "https://gradus.paullebedev.ru/api/",
  },
};

module.exports = nextConfig;
