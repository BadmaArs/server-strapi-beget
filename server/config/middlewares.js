module.exports = {
  load: {
    before: ['timer', 'responseTime', 'logger', 'responses', 'gzip'],
    after: ['parser', 'router'],
  },
  settings: {
    cors: {
      enabled: false,
    },
  },
};

