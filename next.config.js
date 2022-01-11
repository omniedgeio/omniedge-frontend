const withMDX = require("@next/mdx")({
  extension: /\.mdx$/,
});

module.exports = withMDX({
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/dashboard",
        destination: "/dashboard/virtual-networks",
        permanent: true,
      },
      // {
      //   source: "/docs",
      //   destination: "/docs/article/admin",
      //   permanent: true,
      // },
    ];
  },
  pageExtensions: ["js","ts", "tsx", "mdx","md"],
});
