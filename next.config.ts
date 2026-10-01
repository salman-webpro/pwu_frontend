import type { NextConfig } from "next";

// GitHub Pages serves this repo from /<repo-name>/, not the domain root —
// basePath/assetPrefix only apply during the GitHub Actions build
// (GITHUB_PAGES=true), so `next dev` and a plain `next build` locally are
// unaffected.
const repoName = "pwu_frontend";
const isGithubPagesBuild = process.env.GITHUB_PAGES === "true";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    // next/image's optimization API needs a server — static export has
    // none. Not currently used anywhere in the app (plain <img> only, see
    // types/product.ts), but set for safety if that changes.
    unoptimized: true,
  },
  basePath: isGithubPagesBuild ? `/${repoName}` : "",
  assetPrefix: isGithubPagesBuild ? `/${repoName}/` : "",
};

export default nextConfig;
