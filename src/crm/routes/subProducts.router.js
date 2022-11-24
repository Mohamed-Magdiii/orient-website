const { authMiddleware, validationMiddleware } = require('./middlewares');

const router = require('express').Router();
const ctr =  require('../controllers').subProductsController
const {create} =  require('./validations').subProductsValidations

//add product for individuals
router.post('/' , authMiddleware ,validationMiddleware(create) ,  ctr.createRecord)



module.exports = router;