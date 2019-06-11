'use strict';
const { json } = require('micro');
const { sign } = require('jsonwebtoken');
const jwtAuth = require('micro-jwt-auth');
const rdb = require('./lib/rdb.js');
require('dotenv').config();

/**
 * user, pass が一致すれば jwt token を返す。
 * @param {http.IncomingMessage} req
 */
const login = async req => {
  const body = await json(req);
  if (body.user === process.env.USER && body.pass === process.env.PASS) {
    const user = { name: body.user };
    const token = sign({ user }, process.env.SECRET);
    return { token, user };
  } else {
    return {};
  }
};

/**
 * 血圧データを DB から取得して返します。
 * @return {Promise.<array>}
 */
const fetchBpData = jwtAuth(process.env.SECRET)(async () => {
  const result = await rdb.fetchBpRecords();
  return result[0];
});

/**
 * micro entrypoint.
 * @param {http.IncomingMessage} req
 */
module.exports = async req => {
  switch (req.url) {
    case '/login':
      return login(req);
    case '/bp':
      return fetchBpData(req);
    default:
      break;
  }
};
