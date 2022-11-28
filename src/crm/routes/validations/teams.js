const Joi = require('joi');
const { CONSTANTS } = require('../../../common');


module.exports.create = Joi.object({
  title: Joi.object({
    en: Joi.string().required(),
    ar: Joi.string().required()
}),
  name: Joi.object({
    en: Joi.string().required(),
    ar: Joi.string().required()
}),
});



module.exports.delete = Joi.object({
 memeberId : Joi.string().required()
});

