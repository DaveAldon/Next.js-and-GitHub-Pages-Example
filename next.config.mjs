/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  basePath:
    process.env.NODE_ENV === "production"
      ? "/Next.js-and-GitHub-Pages-Example"
      : "",
  output: "export",
  images: {
    loader: "akamai",
    path: "",
  },
  assetPrefix: "./",
};

export default nextConfig;
