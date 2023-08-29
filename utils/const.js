const http2 = require('node:http2');

const STATUS_OK = 200; // 200
const STATUS_CREATED = 201; // 201
const ERROR_SERVER = http2.constants.HTTP_STATUS_INTERNAL_SERVER_ERROR; // 500

const limiterSetting = {
  windowMs: 15 * 60 * 10000,
  standardHeaders: true,
  legacyHeaders: false,
};

module.exports = {
  STATUS_OK,
  STATUS_CREATED,
  ERROR_SERVER,
  limiterSetting,

};
