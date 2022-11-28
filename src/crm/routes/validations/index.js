// exporting all validations

const authValidations = require('./auth');
const userValidations = require('./user');
const roleValidations = require('./role');

const bankAccountValidations = require('./bank-accounts');
const requestValidations = require('./request');
const transactionValidations = require('./transaction');
const productsValidations = require('./products');
const subProductsValidations = require('./subProducts');
const teamsValidations = require('./teams');

module.exports = {
  authValidations,
  userValidations,
  roleValidations,
  bankAccountValidations,
  requestValidations,
  transactionValidations,
  productsValidations,
  subProductsValidations,
  teamsValidations
};
