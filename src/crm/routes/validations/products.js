const Joi = require('joi');
const { CONSTANTS } = require('../../../common');


module.exports.create = Joi.object({
  type: Joi.string().required().valid(CONSTANTS.PRODUCTS_TYPE),
  title: {
    en: Joi.string().required(),
    ar: Joi.string().required(),
  },
  description: {
    en: Joi.string().required(),
    ar: Joi.string().required(),
  }
});

