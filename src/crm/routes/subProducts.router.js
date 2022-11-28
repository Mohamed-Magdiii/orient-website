const { authMiddleware, validationMiddleware } = require('./middlewares');

const router = require('express').Router();
const ctr =  require('../controllers').subProductsController
const {create} =  require('./validations').subProductsValidations

//add product for individuals
router.post('/' , authMiddleware ,validationMiddleware(create) ,  ctr.createRecord)
router.patch('/:id' , authMiddleware  ,  ctr.updateRecord)
router.delete('/:id' , authMiddleware  ,  ctr.deleteRecord)



module.exports = router;