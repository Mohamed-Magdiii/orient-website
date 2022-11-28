const RoleController = require('./role.controller');
const UserController = require('./user.controller');

const ActivityController = require('./activity.controller');
const BankAccountController = require('./bank-account.controller');

const RequestController = require('./request.controller');
const ProductsController = require('./products.controller');
const subProductsController = require('./subProducts.controller');
const TeamsController = require('./teams.controller');
module.exports = {
  RoleController,
  UserController,

  // customer controllers
  ActivityController,
  BankAccountController,
  RequestController,
  ProductsController,
  subProductsController,
  TeamsController
};
