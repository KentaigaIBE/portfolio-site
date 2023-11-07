/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "kentaiga-portfolio-images.s3.us-east-2.amazonaws.com",
      "image.mux.com",
    ],
  },
};

module.exports = nextConfig;
