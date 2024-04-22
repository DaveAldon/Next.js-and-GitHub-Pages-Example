/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  basePath: "/Next.js-and-GitHub-Pages-Example",
  output: "export",
  images: {
    loader: "akamai",
    path: "/Next.js-and-GitHub-Pages-Example/",
  },
  assetPrefix: "/Next.js-and-GitHub-Pages-Example",
};

export default nextConfig;
