var config = {
  isDev: true,
  ninjaInfo: 'francisco.dias'
};

config.hapi = {
  host: 'localhost',
  port: 8090
};

// Client side
config.client = {
  isDev: config.isDev,
  debugMode: true,
  title: 'Dev Challenge'
};

module.exports = config;