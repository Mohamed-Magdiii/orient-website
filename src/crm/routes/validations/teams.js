const Joi = require('joi');
const { CONSTANTS } = require('../../../common');


module.exports.create = Joi.object({
  title: Joi.object({
    en: Joi.string(),
    ar: Joi.string()
}),
  name: Joi.object({
    en: Joi.string(),
    ar: Joi.string()
}),
});


