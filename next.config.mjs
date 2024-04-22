/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  publicRuntimeConfig: {
    basePath: "/Next.js-and-GitHub-Pages-Example",
  },
  output: "export",
  images: {
    loader: "akamai",
    path: "",
  },
};

export default nextConfig;
