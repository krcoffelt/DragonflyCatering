import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    imageSizes: [96, 128, 192, 256, 320, 384, 480, 560],
    qualities: [65, 75],
  },
  async redirects() {
    return [
      {
        source: "/catering-and-dining-experiences",
        destination: "/services",
        permanent: true,
      },
      {
        source: "/about-dragonfly-catering-company",
        destination: "/about",
        permanent: true,
      },
      {
        source: "/gift-card",
        destination: "/gift-cards",
        permanent: true,
      },
      {
        source: "/gift-certificates",
        destination: "/gift-cards",
        permanent: true,
      },
      {
        source: "/service-page/hire-a-chef",
        destination: "/private-chef-experiences",
        permanent: true,
      },
      {
        source: "/service-page/event-catering",
        destination: "/custom-catering",
        permanent: true,
      },
      {
        source: "/online-ordering",
        destination: "/contact",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
