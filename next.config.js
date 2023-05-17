module.exports = {
  reactStrictMode: true,
  trailingSlash: true,
  images: {
    maximumFileSize: 1024 * 1024 * 20, // 20 MB (adjust the value as needed)
  },
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.(jpe?g|png|svg|gif|ico|eot|ttf|woff|woff2|mp4|pdf|webm)$/,
      type: "asset",
      generator: {
        filename: "public/assets/icons/.[hash][ext]",
      },
    });

    return config;
  },
};
