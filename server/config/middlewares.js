module.exports = [
  'strapi::errors',
  'strapi::security',
  'strapi::poweredBy',
  {
    name: 'strapi::cors',
    config: {
      enabled: false,
      headers: '*',
      origin: ['https://football-club-coursework.vercel.app', 'http://localhost:3001', 'http://5.181.108.131:1337']
    }
  },
  'strapi::logger',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];




