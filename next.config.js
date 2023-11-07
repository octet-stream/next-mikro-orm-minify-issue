/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverComponentsExternalPackages: [
      "@mikro-orm/core",
      "@mikro-orm/mysql",
      "@mikro-orm/migrations",
      "@mikro-orm/seeder"
    ]
  }
}

module.exports = nextConfig
