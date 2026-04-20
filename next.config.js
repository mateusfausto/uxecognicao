/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // Se for hospedar em username.github.io/repo-name, ajuste o basePath:
  // basePath: '/nome-do-repositorio',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

module.exports = nextConfig;
