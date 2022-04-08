module.exports = {
  images: {
    domains: ['imgur.com'],
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.target = 'electron-renderer';
      config.node = {
        __dirname: true,
      };
    }

    return config;
  },
};
