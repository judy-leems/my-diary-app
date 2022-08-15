const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    createProxyMiddleware('/api', {
      target: `http://${process.env.REACT_APP_DB_HOST}:${process.env.REACT_APP_SERVER_PORT}`,
      changeOrigin: true,
    })
  );
};
