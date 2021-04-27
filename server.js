const path = require('path');
const express = require('express');
const app = express();
const port = 3000;

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(__dirname + '/dist'))

  app.get('*', function(request, response) {
    response.sendFile(path.resolve(__dirname, 'dist', 'index.html'))
  })
} else {
  const webpack = require('webpack');
  const config = require('./webpack.config.js');
  const compiler = webpack(config);
  const middleware = require('webpack-dev-middleware');

  const history = require('connect-history-api-fallback');
  app.use(history());

  app.use(
    middleware(compiler, {
      publicPath: config.output.publicPath,
    })
  );
}

app.listen(port);
