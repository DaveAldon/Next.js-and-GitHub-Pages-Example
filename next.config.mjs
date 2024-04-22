/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  basePath: "/Next.js-and-GitHub-Pages-Example",
  output: "export",
  images: {
    loader: "akamai",
    path: "",
  },
  assetPrefix: "./",
};

export default nextConfig;
