const { authMiddleware,validationMiddleware } = require('./middlewares');

const router = require('express').Router();
const ctr =  require('../controllers').ProductsController
const {create} = require('./validations').productsValidations
//add product for individuals
router.post('/individual', authMiddleware, validationMiddleware(create),  ctr.createRecord)

module.exports = router;