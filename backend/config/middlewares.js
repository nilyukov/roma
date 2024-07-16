module.exports = [
  'strapi::logger',
  'strapi::errors',
  {
  name: "strapi::security",
  config: {
    contentSecurityPolicy: {
      useDefaults: true,
      directives: {
        "script-src": ["'self'", "https:", "http:"],
        "frame-src": ["'self'", "https:", "http:"],
      },
    },
  },
},
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
