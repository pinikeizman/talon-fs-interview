/** @type {import('next').NextConfig} */
const nextConfig = {
  headers: () => {
    return [
      {
        source: "/:all*(css|woff2|svg|jpg|png)",
        locale: false,
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=9999999999, must-revalidate",
          },
        ],
      },
    ];
  },
  experimental: {
    serverComponentsExternalPackages: ["sequelize"],
  },
};

module.exports = nextConfig;
