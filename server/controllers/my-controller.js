'use strict';

module.exports = {
  index(ctx) {
    ctx.body = strapi
      .plugin('report')
      .service('myService')
      .getWelcomeMessage();
  },
};
