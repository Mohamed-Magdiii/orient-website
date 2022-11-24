const Joi = require('joi');
const { CONSTANTS } = require('../../../common');

module.exports.deposit = Joi.object({
  type: Joi.string().required(),
  amount: Joi.number().required(),
  customerId: Joi.string().required(),

});

module.exports.withdraw = Joi.object({
  type: Joi.string().required(),
  amount: Joi.number().required(),
  customerId: Joi.string().required(),
});
// data: Joi.string().valid('deposit'),

module.exports.create = Joi.object({
  type: Joi.string().required().valid(CONSTANTS.REQUESTS_TYPES),
  content: Joi.any(),
});

module.exports.update = Joi.object({
  content: Joi.any(),
});
