const Joi = require('joi');
const { CONSTANTS } = require('../../../common');


module.exports.create = Joi.object({
  title: {
    en: Joi.string().required(),
    ar: Joi.string().required(),
  },
  description: {
    en: Joi.string().required(),
    ar: Joi.string().required(),
  },
  product: Joi.string().required()
});
