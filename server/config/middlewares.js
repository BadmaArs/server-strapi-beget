module.exports = ({ env }) => {
  return {
    settings: {
      cors: {
        enabled: true,
        origin: ["https://football-club-coursework.vercel.app"],
      },
    },
    load: {
      before: ["cors", "poweredBy", "logger", "responses", "gzip"],
    },
  };
};
