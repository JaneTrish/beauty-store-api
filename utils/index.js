const { createToken, isTokenValid, attachCookiesToResponse } = require('./jwt');
const createTokenUser = require('./createTokenUser');
const { hashPassword, checkPassword } = require('./password');
const checkPermissions = require('./checkPermissions');

module.exports = {
  createToken,
  isTokenValid,
  attachCookiesToResponse,
  createTokenUser,
  hashPassword,
  checkPassword,
  checkPermissions,
};
