const RoleController = require('./role.controller');
const UserController = require('./user.controller');

const ActivityController = require('./activity.controller');
const BankAccountController = require('./bank-account.controller');
const ClientController = require('./customer/client.controller');
const LeadController = require('./customer/lead.controller');

const RequestController = require('./request.controller');
const ProductsController = require('./products.controller');
const subProductsController = require('./subProducts.controller');
module.exports = {
  RoleController,
  UserController,

  // customer controllers
  ActivityController,
  BankAccountController,

  ClientController,
  LeadController,

  RequestController,
  ProductsController,
  subProductsController
};
