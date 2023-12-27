module.exports = ({ env }) => {
  return {
    settings: {
      cors: {
        enabled: true,
        origin: ["http://5.181.108.131:1337"],
      },
    },
    load: {
      before: ["cors", "poweredBy", "logger", "responses", "gzip"],
    },
  };
};
