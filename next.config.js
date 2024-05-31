/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
  images: {
    domains: [
      "cdn.iconscout.com",
      "d8it4huxumps7.cloudfront.net",
      "img.freepik.com",
    ], // Add the domain(s) here
  },
};

module.exports = nextConfig;
