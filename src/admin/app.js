export default {
  config: {
    locales: [
      'pt-BR'
    ],
  },
  translations: {
    "pt-BR": {
      "app.components.LeftMenu.navbrand.title": "BRX SOLAR Dashboard"
    }
  },
  tutorials: false,
  notifications: {
    releases: false
  },
  bootstrap(app) {
    console.log(app);
  },
};
