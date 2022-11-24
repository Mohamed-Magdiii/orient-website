const Joi = require('joi');
const { CONSTANTS } = require('../../../common');

module.exports.create = Joi.object({
  type: Joi.string().required().valid(CONSTANTS.TRANSACTIONS_TYPES),
  transactionGateway: Joi.string().required().valid(CONSTANTS.TRANSACTIONS_GATEWAYS),
  // customerId: Joi.string().required(),
  content: Joi.any(),
  amount: Joi.number().required(),
  // currency: Joi.string().required(),
  tradingAccountId: Joi.string(),
  tradingAccountFromId: Joi.string(),
  tradingAccountToId: Joi.string(),
});

module.exports.update = Joi.object({
  content: Joi.any(),
});
