const express = require('express');
const webpackMiddleware = require('webpack-dev-middleware');
const webpack = require('webpack');
const webpackConfig = require('./webpack.config.js');

const app = express();

// This will add configuration to serve project files, reload it on change etc.
app.use(webpackMiddleware(webpack(webpackConfig)));

app.listen(3050, () => console.log('Listening'));
