/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(mov|mp4)$/,
      use: [
        {
          loader: "file-loader",
          options: {
            name: "[name].[ext]",
            publicPath: "/_next/static/smageVid",
            outputPath: "static/smageVid",
          },
        },
      ],
    });
    return config;
  },
};

export default nextConfig;
