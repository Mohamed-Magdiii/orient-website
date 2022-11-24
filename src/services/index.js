const userService = require('./user.service');
const roleService = require('./role.service');

const activityService = require('./activity.service');
const bankAccountService = require('./bank-account.service');
const customerService = require('./customer.service');
const requestService = require('./request.service');
const transactionService = require('./transaction.service');
const productsService = require('./products.service');
const SubProductsService = require('./subProducts.service');

module.exports = {
  userService,
  roleService,

  // customer services
  activityService,
  bankAccountService,
  customerService,
  requestService,
  transactionService,
  productsService,
  SubProductsService
};
