'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var path = require('path');

exports.default = {
  restapi: 'https://cnodejs.org/api/v1',
  favicon: path.join(__dirname, 'favicon.ico'),
  staticEntry: 'index.html',
  alias: process.env.NODE_ENV === 'production' ? {
    'react': 'react-lite',
    'react-dom': 'react-lite'
  } : {}
};