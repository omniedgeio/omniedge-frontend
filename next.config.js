module.exports = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/dashboard",
        destination: "/dashboard/virtual-networks",
        permanent: true,
      },
    ];
  },
};
