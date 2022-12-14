const Joi = require('joi');
const { CONSTANTS } = require('../../../common');


module.exports.create = Joi.object({
  type: Joi.string().required().valid('INDIVIDUAL', 'CORPORATE'),
  title: Joi.object({
    en: Joi.string(),
    ar: Joi.string()
}),
  description: Joi.object({
    en: Joi.string(),
    ar: Joi.string()
}),
});


